#!/usr/bin/env node

/**
 * 보험브릿지(Insurance Bridge) 보험 원본 데이터 자동 변경 감지 및 보호 스크립트
 * 
 * [목적]
 * 1. 평상시: 기존 보험 원본 데이터(KCD 질병코드, 수술코드, 담보분류표 등) 변경을 자동 감지하여 무단 변경 방지
 * 2. 특정 보험사 작업 시: ALLOWED_INSURANCE_DATA 환경변수/인자에 지정된 보험사만 변경 허용하고 타사 데이터 변경 시 실패
 * 3. 공통 데이터: surgeryData, disputeData, infoData 등은 ALLOWED_COMMON_DATA로 별도 명시된 경우만 허용
 */

import { execSync } from 'node:child_process';
import path from 'node:path';

// 1. 보호 대상 보험사 파일 매핑
export const INSURER_DATA_MAP = {
  'db': ['src/data/terms/db.ts'],
  'kb': ['src/data/terms/kb.ts'],
  'meritz': ['src/data/terms/meritz.ts'],
  'hanwha': ['src/data/terms/hanwha.ts'],
  'lotte': ['src/data/terms/lotte.ts'],
  'samsung': ['src/data/terms/samsung.ts'],
  'hyundai': ['src/data/terms/hyundai.ts'],
  'heungkuk': ['src/data/terms/heungkuk.ts'],
  'nh': ['src/data/terms/nh.ts'],
  'hana': ['src/data/terms/hana.ts']
};

// 보험사 별칭 매핑 (예: lotte-ins, nh-fire 등)
export const INSURER_ALIASES = {
  'db-ins': 'db', 'db-fire': 'db', '동부': 'db',
  'kb-ins': 'kb', 'kb-fire': 'kb', '국민': 'kb',
  'meritz-fire': 'meritz', '메리츠': 'meritz',
  'hanwha-general': 'hanwha', 'hanwha-fire': 'hanwha', '한화': 'hanwha',
  'lotte-ins': 'lotte', 'lotte-fire': 'lotte', '롯데': 'lotte',
  'samsung-fire': 'samsung', '삼성': 'samsung',
  'hyundai-marine': 'hyundai', 'hyundai-fire': 'hyundai', '현대': 'hyundai',
  'heungkuk-fire': 'heungkuk', '흥국': 'heungkuk',
  'nh-fire': 'nh', 'nh-ins': 'nh', 'nonghyup': 'nh', '농협': 'nh',
  'hana-ins': 'hana', 'hana-fire': 'hana', '하나': 'hana'
};

// 2. 보호 대상 공통 데이터 매핑
export const COMMON_DATA_MAP = {
  'surgery': ['src/surgeryData.ts', 'src/data/surgeryData.ts'],
  'dispute': ['src/data/disputeData.ts', 'src/data/disputesData.ts'],
  'info': ['src/data/info/index.ts', 'src/data/info/loader.node.ts', 'src/data/info/types.ts', 'src/data/infoData.ts', 'src/data/info/'],
  'meritz82': ['src/data/meritz82Diseases.ts']
};

// 정규화 함수
export function normalizePath(filePath) {
  return filePath.replace(/\\/g, '/').replace(/^\.\//, '').trim();
}

export function parseAllowedList(input) {
  if (!input) return new Set();
  const items = Array.isArray(input) ? input : String(input).split(',');
  const result = new Set();

  for (const item of items) {
    const key = item.trim().toLowerCase();
    if (!key) continue;
    if (INSURER_ALIASES[key]) {
      result.add(INSURER_ALIASES[key]);
    } else {
      result.add(key);
    }
  }
  return result;
}

export function getChangedFilesFromGit(baseRef = null) {
  const files = new Set();
  try {
    // 1. Working tree vs HEAD
    try {
      const output = execSync('git diff --name-only HEAD', { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] });
      output.split('\n').filter(Boolean).forEach(f => files.add(normalizePath(f)));
    } catch {
      // ignore
    }

    // 2. Staged changes
    try {
      const output = execSync('git diff --name-only --cached', { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] });
      output.split('\n').filter(Boolean).forEach(f => files.add(normalizePath(f)));
    } catch {
      // ignore
    }

    // 3. Unstaged changes
    try {
      const output = execSync('git diff --name-only', { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] });
      output.split('\n').filter(Boolean).forEach(f => files.add(normalizePath(f)));
    } catch {
      // ignore
    }

    // 4. Untracked / Status
    try {
      const output = execSync('git status --porcelain', { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] });
      output.split('\n').filter(Boolean).forEach(line => {
        const filePart = line.substring(3).trim();
        if (filePart) files.add(normalizePath(filePart));
      });
    } catch {
      // ignore
    }

    // 5. If baseRef provided (e.g. CI PR branch)
    if (baseRef) {
      try {
        const output = execSync(`git diff --name-only ${baseRef}...HEAD`, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] });
        output.split('\n').filter(Boolean).forEach(f => files.add(normalizePath(f)));
      } catch {
        // ignore
      }
    }
  } catch (err) {
    // Git not available or not a git repo
  }

  return Array.from(files);
}

/**
 * 변경 파일 목록에 대한 유효성 검사 수행
 */
export function evaluateChanges(changedFiles, allowedInsurersInput = '', allowedCommonInput = '') {
  const allowedInsurers = parseAllowedList(allowedInsurersInput);
  const allowedCommon = parseAllowedList(allowedCommonInput);
  const allowAllCommon = allowedCommon.has('all') || allowedCommon.has('true') || allowedCommon.has('*');

  const violations = [];
  const authorizedInsurers = new Set();
  const authorizedCommon = new Set();
  const modifiedProtectedFiles = [];

  for (const rawFile of changedFiles) {
    const file = normalizePath(rawFile);

    // 1. 보험사별 데이터 파일 검사
    let matchedInsurer = null;
    for (const [insurerKey, patterns] of Object.entries(INSURER_DATA_MAP)) {
      for (const pattern of patterns) {
        if (file === pattern || file.endsWith('/' + pattern)) {
          matchedInsurer = insurerKey;
          break;
        }
      }
      if (matchedInsurer) break;
    }

    if (matchedInsurer) {
      modifiedProtectedFiles.push({ file, type: 'insurer', key: matchedInsurer });
      if (allowedInsurers.has(matchedInsurer)) {
        authorizedInsurers.add(matchedInsurer);
      } else {
        violations.push({
          file,
          type: 'insurer',
          key: matchedInsurer,
          message: `보험사 원본 데이터 [${matchedInsurer}] 변경이 감지되었습니다. (현재 허용된 보험사: [${Array.from(allowedInsurers).join(', ') || '없음'}])`
        });
      }
      continue;
    }

    // 2. 공통 데이터 파일 검사
    let matchedCommon = null;
    for (const [commonKey, patterns] of Object.entries(COMMON_DATA_MAP)) {
      for (const pattern of patterns) {
        if (file === pattern || file.startsWith(pattern) || file.endsWith('/' + pattern)) {
          matchedCommon = commonKey;
          break;
        }
      }
      if (matchedCommon) break;
    }

    if (matchedCommon) {
      modifiedProtectedFiles.push({ file, type: 'common', key: matchedCommon });
      if (allowAllCommon || allowedCommon.has(matchedCommon)) {
        authorizedCommon.add(matchedCommon);
      } else {
        violations.push({
          file,
          type: 'common',
          key: matchedCommon,
          message: `공통 데이터 [${matchedCommon}] 변경이 감지되었습니다. (공통 데이터는 ALLOWED_COMMON_DATA로 명시적 허용 필요)`
        });
      }
      continue;
    }
  }

  const isSuccess = violations.length === 0;

  return {
    isSuccess,
    violations,
    authorizedInsurers: Array.from(authorizedInsurers),
    authorizedCommon: Array.from(authorizedCommon),
    modifiedProtectedFiles
  };
}

/**
 * 자체 테스트 슈트 (Test A ~ Test E)
 */
export function runSelfTest() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🧪 보험 데이터 자동 변경 감지기 자체 테스트 실행');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  let passCount = 0;
  let failCount = 0;

  function assert(name, condition, details = '') {
    if (condition) {
      console.log(`  ✅ [PASS] ${name}`);
      passCount++;
    } else {
      console.error(`  ❌ [FAIL] ${name} ${details}`);
      failCount++;
    }
  }

  // 테스트 A: 보험 데이터 변경 없음 (일반 UI/스크립트 파일만 변경)
  {
    const files = ['src/components/Header.tsx', 'scripts/generate-sitemap.ts', 'index.html'];
    const res = evaluateChanges(files, '', '');
    assert('테스트 A: 보험 데이터 변경 없음 → PASS', res.isSuccess && res.violations.length === 0);
  }

  // 테스트 B: 허용되지 않은 보험사 데이터 변경 상황 (예: lotte.ts 변경, 허용값 없음)
  {
    const files = ['src/data/terms/lotte.ts'];
    const res = evaluateChanges(files, '', '');
    assert('테스트 B: 허용되지 않은 보험사 데이터 변경 → FAIL', !res.isSuccess && res.violations.length === 1 && res.violations[0].key === 'lotte');
  }

  // 테스트 C: 특정 보험사만 허용한 상황 (예: lotte만 허용, lotte.ts만 변경)
  {
    const files = ['src/data/terms/lotte.ts', 'src/components/TermsMaster.tsx'];
    const res = evaluateChanges(files, 'lotte', '');
    assert('테스트 C: 특정 보험사(lotte) 허용 후 lotte만 변경 → PASS', res.isSuccess && res.authorizedInsurers.includes('lotte'));
  }

  // 테스트 D: 특정 보험사(lotte)를 허용했지만 다른 보험사(db.ts, kb.ts)도 같이 변경된 상황
  {
    const files = ['src/data/terms/lotte.ts', 'src/data/terms/db.ts', 'src/data/terms/kb.ts'];
    const res = evaluateChanges(files, 'lotte', '');
    assert('테스트 D: lotte 허용 상태에서 db, kb 동시 변경 → FAIL', !res.isSuccess && res.violations.length === 2);
  }

  // 테스트 E: 공통 데이터(surgeryData.ts)가 명시적 허용 없이 변경된 상황 (lotte 허용 상태)
  {
    const files = ['src/data/terms/lotte.ts', 'src/surgeryData.ts'];
    const res = evaluateChanges(files, 'lotte', ''); // ALLOWED_INSURANCE_DATA=lotte만 주고 공통데이터 허용 안 함
    assert('테스트 E: 공통 데이터가 명시적 허용 없이 변경 → FAIL', !res.isSuccess && res.violations.some(v => v.key === 'surgery'));
  }

  // 테스트 E-2: 공통 데이터가 명시적 허용(surgery)된 상황
  {
    const files = ['src/surgeryData.ts'];
    const res = evaluateChanges(files, '', 'surgery');
    assert('테스트 E-2: 공통 데이터(surgery) 명시적 허용 후 변경 → PASS', res.isSuccess && res.authorizedCommon.includes('surgery'));
  }

  // 테스트 F: 복수 보험사 허용 (lotte, nh)
  {
    const files = ['src/data/terms/lotte.ts', 'src/data/terms/nh.ts'];
    const res = evaluateChanges(files, 'lotte,nh', '');
    assert('테스트 F: 복수 보험사(lotte, nh) 허용 후 둘 다 변경 → PASS', res.isSuccess && res.authorizedInsurers.length === 2);
  }

  console.log('────────────────────────────────────────────────────');
  console.log(`결과: 총 ${passCount + failCount}개 중 성공 ${passCount}개, 실패 ${failCount}개`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  return failCount === 0;
}

// 3. CLI 실행 진입점
function main() {
  const args = process.argv.slice(2);

  // 자체 테스트 플래그
  if (args.includes('--test')) {
    const success = runSelfTest();
    process.exit(success ? 0 : 1);
  }

  // CLI 옵션 파싱
  let allowedInsurers = process.env.ALLOWED_INSURANCE_DATA || '';
  let allowedCommon = process.env.ALLOWED_COMMON_DATA || '';
  let changedFilesArg = process.env.TEST_CHANGED_FILES || '';
  let baseRef = process.env.GITHUB_BASE_REF || null;

  for (const arg of args) {
    if (arg.startsWith('--allowed-insurance=')) {
      allowedInsurers = arg.split('=')[1];
    } else if (arg.startsWith('--allowed-common=')) {
      allowedCommon = arg.split('=')[1];
    } else if (arg.startsWith('--changed-files=')) {
      changedFilesArg = arg.split('=')[1];
    } else if (arg.startsWith('--base-ref=')) {
      baseRef = arg.split('=')[1];
    }
  }

  let changedFiles = [];
  if (changedFilesArg) {
    changedFiles = changedFilesArg.split(',').map(f => f.trim()).filter(Boolean);
  } else {
    changedFiles = getChangedFilesFromGit(baseRef);
  }

  console.log('🛡️  [보험브릿지] 보험 원본 데이터 변경 감지 검사');
  console.log(`   - 허용된 보험사 (ALLOWED_INSURANCE_DATA): ${allowedInsurers || '(없음 - 전체 보호)'}`);
  console.log(`   - 허용된 공통데이터 (ALLOWED_COMMON_DATA): ${allowedCommon || '(없음 - 전체 보호)'}`);
  console.log(`   - 감지된 변경 파일 수: ${changedFiles.length}개`);

  if (changedFiles.length === 0) {
    console.log('✅ 변경된 파일이 없거나 Git 변경사항이 감지되지 않았습니다. (검사 통과)');
    process.exit(0);
  }

  const result = evaluateChanges(changedFiles, allowedInsurers, allowedCommon);

  if (result.modifiedProtectedFiles.length > 0) {
    console.log('\n🔍 변경 감지된 보호 대상 파일:');
    result.modifiedProtectedFiles.forEach(item => {
      const isAuth = item.type === 'insurer'
        ? result.authorizedInsurers.includes(item.key)
        : result.authorizedCommon.includes(item.key);
      const mark = isAuth ? '🟢 [허용됨]' : '🔴 [위반]';
      console.log(`   ${mark} ${item.file} (${item.type}: ${item.key})`);
    });
  }

  if (!result.isSuccess) {
    console.error('\n🚨 [검사 실패] 승인되지 않은 보험 데이터 변경이 감지되었습니다!');
    result.violations.forEach(v => {
      console.error(`   ❌ ${v.file}: ${v.message}`);
    });
    console.error('\n💡 [조치 방법]');
    console.error('   1. 의도하지 않은 변경인 경우: 해당 파일의 변경 사항을 되돌려주세요 (git checkout / restore).');
    console.error('   2. 사용자가 해당 보험사 수정을 명시적으로 요청한 경우:');
    console.error('      환경변수 `ALLOWED_INSURANCE_DATA=보험사키` (예: ALLOWED_INSURANCE_DATA=lotte) 또는');
    console.error('      옵션 `--allowed-insurance=lotte` 를 지정하여 실행하세요.\n');
    process.exit(1);
  }

  console.log('\n✅ [검사 통과] 보험 원본 데이터가 안전하게 보호되고 있거나 명시적으로 허용된 범위 내에서만 변경되었습니다.');
  process.exit(0);
}

// 직접 실행 시 main() 호출
if (process.argv[1] && normalizePath(process.argv[1]).endsWith('check-insurance-data-changes.mjs')) {
  main();
}

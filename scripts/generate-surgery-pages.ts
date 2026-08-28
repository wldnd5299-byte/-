import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SURGERY_RECORDS } from '../src/data.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function escapeHtml(str: any): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

interface SurgeryPageConfig {
  typeKey: string; // 'all' | '1' | '2' | '3' | '4' | '5'
  pathSegment: string; // '' | 'type-1' | 'type-2' | 'type-3' | 'type-4' | 'type-5'
  canonicalUrl: string;
  title: string;
  h1: string;
  description: string;
  badge: string;
  badgeColor: string;
  summaryText: string;
  examples: string[];
}

export async function generateSurgeryPages() {
  console.log('🚀 Generating 1~5 Surgery Classification SEO static pages (Phase 1)...');

  // Filter 1~5 records (all 2,682 in SURGERY_RECORDS)
  const all1to5Records = SURGERY_RECORDS;
  const countTotal = all1to5Records.length;

  const countByGrade: Record<string, number> = {
    '1종': all1to5Records.filter(r => r.grade1to5 === '1종').length,
    '2종': all1to5Records.filter(r => r.grade1to5 === '2종').length,
    '3종': all1to5Records.filter(r => r.grade1to5 === '3종').length,
    '4종': all1to5Records.filter(r => r.grade1to5 === '4종').length,
    '5종': all1to5Records.filter(r => r.grade1to5 === '5종').length,
  };

  console.log(`- 1~5종 총 레코드 수: ${countTotal}건`);
  console.log(`  * 1종: ${countByGrade['1종']}건`);
  console.log(`  * 2종: ${countByGrade['2종']}건`);
  console.log(`  * 3종: ${countByGrade['3종']}건`);
  console.log(`  * 4종: ${countByGrade['4종']}건`);
  console.log(`  * 5종: ${countByGrade['5종']}건`);

  const pages: SurgeryPageConfig[] = [
    {
      typeKey: 'all',
      pathSegment: '',
      canonicalUrl: 'https://insurancebridge.co.kr/surgery/1to5/',
      title: '1~5종 수술비 분류표 및 수술명검색 | 보험브릿지',
      h1: '1~5종 수술비 분류표 및 수술명 검색',
      description: `손해보험 표준 약관 기준 1~5종 수술비 ${countTotal}개 전체 수술 분류표. 1종(치핵·백내장)부터 5종(5대장기이식·개심술)까지 질병수술비 종수 등급 및 세부 인정기준을 확인하세요.`,
      badge: '1~5종 전체 분류표',
      badgeColor: '#123941',
      summaryText: '1~5종 질병수술비는 질병 치료를 목적으로 기구를 사용하여 병소 부위를 절개, 절제 등의 조작을 가하는 외과적 치료 행위를 난이도 및 위험도에 따라 1종부터 5종까지 5단계로 세분화하여 정액 보상하는 특약입니다.',
      examples: ['1종: 피부이식, 치핵, 백내장, 액취증', '2종: 대장용종절제(EMR), 맹장수술, 체외충격파쇄석술', '3종: 담낭절제술, 자궁근종절제, 인공관절, 스텐트삽입술', '4종: 위절제술, 결장절제술, 신장적출, 폐엽절제', '5종: 간/심장/폐/신장 5대장기이식, 개두 뇌동맥류결찰술']
    },
    {
      typeKey: '1',
      pathSegment: 'type-1',
      canonicalUrl: 'https://insurancebridge.co.kr/surgery/1to5/type-1/',
      title: `1~5종 수술비 중 1종수술 종류 및 수술명 (${countByGrade['1종']}개) | 보험브릿지`,
      h1: '1~5종 수술비 중 [1종 수술] 약관 분류표',
      description: `1~5종 수술비 약관 기준 1종 수술 ${countByGrade['1종']}개 전체 목록. 피부이식술, 치핵근본수술, 백내장수술, 액취증, 부비동수술 등 다발성 생활 질환 수술의 보장 기준을 확인하세요.`,
      badge: '1종 수술 (경증·생활다빈도)',
      badgeColor: '#0284c7',
      summaryText: '1종 수술은 피부 및 피하조직, 감각기, 외래에서 비교적 간단히 시행되는 경증·생활밀착형 수술이 주로 해당됩니다. 대표적으로 치핵근본수술, 백내장 수정체수술, 피부이식술, 안검하수증수술, 액취증수술 등이 포함됩니다.',
      examples: ['피부이식술 (25㎠ 미만)', '치핵근본수술 / 항문 치열·치루 수술', '백내장 수정체 수술 (초음파유화술)', '액취증 수술', '부비동 근본수술 (축농증)', '손가락 건유리술 (방아쇠수지)']
    },
    {
      typeKey: '2',
      pathSegment: 'type-2',
      canonicalUrl: 'https://insurancebridge.co.kr/surgery/1to5/type-2/',
      title: `1~5종 수술비 중 2종수술 종류 및 수술명 (${countByGrade['2종']}개) | 보험브릿지`,
      h1: '1~5종 수술비 중 [2종 수술] 약관 분류표',
      description: `1~5종 수술비 약관 기준 2종 수술 ${countByGrade['2종']}개 전체 목록. 대장용종절제술(EMR), 체외충격파쇄석술(ESWL), 충수절제술(맹장), 편도절제술, 관절경 수술 등 보장 기준을 확인하세요.`,
      badge: '2종 수술 (근육·내시경·중등도)',
      badgeColor: '#0d9488',
      summaryText: '2종 수술은 근육·건·인대 수술, 내시경적 용종 절제술, 관절경 수술, 체외충격파 쇄석술 등이 포함되는 중등도 치료 단계입니다. 설계사 실무에서 가장 청구 빈도가 높은 내시경 대장용종절제술과 맹장수술이 대표적입니다.',
      examples: ['대장/위 용종절제술 (EMR, Polypectomy)', '체외충격파 쇄석술 (ESWL, 요로결석)', '충수절제술 (맹장염 수술)', '편도 및 아데노이드 절제술', '사지 관절경 수술 (반월상연골 등)', '골절 관혈적 정복고정술']
    },
    {
      typeKey: '3',
      pathSegment: 'type-3',
      canonicalUrl: 'https://insurancebridge.co.kr/surgery/1to5/type-3/',
      title: `1~5종 수술비 중 3종수술 종류 및 수술명 (${countByGrade['3종']}개) | 보험브릿지`,
      h1: '1~5종 수술비 중 [3종 수술] 약관 분류표',
      description: `1~5종 수술비 약관 기준 3종 수술 ${countByGrade['3종']}개 전체 목록. 담낭절제술, 자궁근종절제술, 척추 디스크 수술, 인공관절치환술, 경피적 혈관성형술(스텐트) 등 보장 기준을 확인하세요.`,
      badge: '3종 수술 (복강경·관혈 주요수술)',
      badgeColor: '#eab308',
      summaryText: '3종 수술은 복강경을 통한 주요 장기 절제, 척추 관혈 수술, 인공관절치환술, 자궁 및 난소 부인과 수술, 경피적 심혈관 스텐트삽입술 등이 해당됩니다. 수술비 보장금액이 크게 체감되는 핵심 담보 구간입니다.',
      examples: ['복강경하 담낭절제술 (담석증 등)', '자궁근종절제술 / 자궁적출술', '추간판탈출증 수술 (척추 디스크 관혈수술)', '인공관절 전치환술 (무릎, 고관절)', '경피적 관상동맥 풍선확장 및 스텐트삽입술 (PTCA)', '유방 절제술 (유방암/양성종양)']
    },
    {
      typeKey: '4',
      pathSegment: 'type-4',
      canonicalUrl: 'https://insurancebridge.co.kr/surgery/1to5/type-4/',
      title: `1~5종 수술비 중 4종수술 종류 및 수술명 (${countByGrade['4종']}개) | 보험브릿지`,
      h1: '1~5종 수술비 중 [4종 수술] 약관 분류표',
      description: `1~5종 수술비 약관 기준 4종 수술 ${countByGrade['4종']}개 전체 목록. 위절제술, 결장절제술, 신장적출술, 폐엽절제술 등 주요 내부 장기의 관혈적 개복·개흉 절제수술 보장 기준을 확인하세요.`,
      badge: '4종 수술 (주요장기 개복·개흉 절제)',
      badgeColor: '#ea580c',
      summaryText: '4종 수술은 위, 대장(결장/직장), 간, 췌장, 신장, 폐 등 생명 유지와 직결된 주요 흉복부 내부 장기의 관혈적 절제술 및 종양 광범위 적출술이 포함되는 고난도 중증 수술입니다.',
      examples: ['위 아전절제술 / 위 전절제술 (위암 등)', '결장절제술 / 직장절제술 (대장암 등)', '신장 적출술 (신장암, 신부전)', '폐엽 절제술 / 전폐 절제술 (폐암 등)', '개두 뇌종양 적출술', '개복하 간엽 절제술']
    },
    {
      typeKey: '5',
      pathSegment: 'type-5',
      canonicalUrl: 'https://insurancebridge.co.kr/surgery/1to5/type-5/',
      title: `1~5종 수술비 중 5종수술 종류 및 수술명 (${countByGrade['5종']}개) | 보험브릿지`,
      h1: '1~5종 수술비 중 [5종 수술] 약관 분류표',
      description: `1~5종 수술비 약관 기준 5종 수술 ${countByGrade['5종']}개 전체 목록. 간·심장·신장·폐 5대장기이식, 개두 뇌동맥류결찰술, 관상동맥우회술(CABG) 등 최고난도 관혈 수술 보장 기준을 확인하세요.`,
      badge: '5종 수술 (5대장기이식·개심·최고난도)',
      badgeColor: '#dc2626',
      summaryText: '5종 수술은 종수술비 약관상 가장 높은 지급률이 적용되는 최고위험·최고난도 수술입니다. 5대 장기이식(간, 심장, 신장, 폐, 췌장), 관상동맥우회술(CABG), 개두하 뇌동맥류결찰술, 대동맥류 인조혈관치환술 등이 속합니다.',
      examples: ['5대 장기이식 수술 (간, 신장, 심장, 폐, 췌장 이식)', '관상동맥 우회로술 (CABG)', '개두하 뇌동맥류 결찰술 (클립 결찰술)', '대동맥류 인조혈관 치환술', '심장 판막 치환술 / 성형술', '조혈모세포 이식술 (골수이식)']
    }
  ];

  let totalPagesGenerated = 0;

  for (const page of pages) {
    // Determine records for this page
    const pageRecords = page.typeKey === 'all'
      ? all1to5Records
      : all1to5Records.filter(r => r.grade1to5 === `${page.typeKey}종`);

    // Generate Quick Navigation Tabs HTML
    const navTabsHtml = `
      <div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 16px 0;">
        <a href="/surgery/1to5/" style="padding: 8px 14px; border-radius: 10px; font-size: 13px; font-weight: 700; text-decoration: none; border: 1px solid ${page.typeKey === 'all' ? '#123941' : '#cbd5e1'}; background: ${page.typeKey === 'all' ? '#123941' : '#ffffff'}; color: ${page.typeKey === 'all' ? '#ffffff' : '#334155'};">
          전체 (2,682)
        </a>
        <a href="/surgery/1to5/type-1/" style="padding: 8px 14px; border-radius: 10px; font-size: 13px; font-weight: 700; text-decoration: none; border: 1px solid ${page.typeKey === '1' ? '#0284c7' : '#cbd5e1'}; background: ${page.typeKey === '1' ? '#0284c7' : '#ffffff'}; color: ${page.typeKey === '1' ? '#ffffff' : '#334155'};">
          1종 (${countByGrade['1종']})
        </a>
        <a href="/surgery/1to5/type-2/" style="padding: 8px 14px; border-radius: 10px; font-size: 13px; font-weight: 700; text-decoration: none; border: 1px solid ${page.typeKey === '2' ? '#0d9488' : '#cbd5e1'}; background: ${page.typeKey === '2' ? '#0d9488' : '#ffffff'}; color: ${page.typeKey === '2' ? '#ffffff' : '#334155'};">
          2종 (${countByGrade['2종']})
        </a>
        <a href="/surgery/1to5/type-3/" style="padding: 8px 14px; border-radius: 10px; font-size: 13px; font-weight: 700; text-decoration: none; border: 1px solid ${page.typeKey === '3' ? '#ca8a04' : '#cbd5e1'}; background: ${page.typeKey === '3' ? '#ca8a04' : '#ffffff'}; color: ${page.typeKey === '3' ? '#ffffff' : '#334155'};">
          3종 (${countByGrade['3종']})
        </a>
        <a href="/surgery/1to5/type-4/" style="padding: 8px 14px; border-radius: 10px; font-size: 13px; font-weight: 700; text-decoration: none; border: 1px solid ${page.typeKey === '4' ? '#ea580c' : '#cbd5e1'}; background: ${page.typeKey === '4' ? '#ea580c' : '#ffffff'}; color: ${page.typeKey === '4' ? '#ffffff' : '#334155'};">
          4종 (${countByGrade['4종']})
        </a>
        <a href="/surgery/1to5/type-5/" style="padding: 8px 14px; border-radius: 10px; font-size: 13px; font-weight: 700; text-decoration: none; border: 1px solid ${page.typeKey === '5' ? '#dc2626' : '#cbd5e1'}; background: ${page.typeKey === '5' ? '#dc2626' : '#ffffff'}; color: ${page.typeKey === '5' ? '#ffffff' : '#334155'};">
          5종 (${countByGrade['5종']})
        </a>
      </div>
    `;

    // Generate Table Rows HTML for this page
    const tableRowsHtml = pageRecords.map((r, idx) => {
      return `
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 10px; color: #64748b; font-size: 13px; text-align: center; width: 50px;">${idx + 1}</td>
          <td style="padding: 12px 12px; color: #334155; font-size: 13px; font-weight: 600; white-space: nowrap; width: 130px;">
            <span style="background: #f1f5f9; color: #475569; padding: 3px 8px; border-radius: 6px; font-size: 11px; display: inline-block;">
              ${escapeHtml(r.category || '기타')}
            </span>
          </td>
          <td style="padding: 12px 14px; color: #0f172a; font-size: 14px; font-weight: 700;">
            <div style="color: #0f172a; margin-bottom: 4px;">${escapeHtml(r.name)}</div>
            ${r.description ? `<div style="font-size: 12px; color: #64748b; font-weight: 400; line-height: 1.5;">${escapeHtml(r.description)}</div>` : ''}
            ${r.tips ? `<div style="margin-top: 6px; font-size: 11px; color: #0369a1; background: #f0f9ff; padding: 4px 8px; border-radius: 4px; font-weight: 500; display: inline-block;">💡 ${escapeHtml(r.tips)}</div>` : ''}
          </td>
          <td style="padding: 12px 10px; text-align: center; width: 80px; white-space: nowrap;">
            <span style="display: inline-block; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 800; background: ${r.grade1to5 === '1종' ? '#e0f2fe' : r.grade1to5 === '2종' ? '#ccfbf1' : r.grade1to5 === '3종' ? '#fef9c3' : r.grade1to5 === '4종' ? '#ffedd5' : '#fee2e2'}; color: ${r.grade1to5 === '1종' ? '#0369a1' : r.grade1to5 === '2종' ? '#0f766e' : r.grade1to5 === '3종' ? '#854d0e' : r.grade1to5 === '4종' ? '#9a3412' : '#991b1b'};">
              ${escapeHtml(r.grade1to5)}
            </span>
          </td>
          <td style="padding: 12px 10px; text-align: center; width: 80px; white-space: nowrap; color: #64748b; font-size: 12px; font-weight: 600;">
            ${escapeHtml(r.grade1to3 || '-')}
          </td>
        </tr>
      `;
    }).join('');

    // JSON-LD Schema
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "홈",
              "item": "https://insurancebridge.co.kr/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "수술명 검색",
              "item": "https://insurancebridge.co.kr/surgery/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "1~5종 수술비 분류표",
              "item": "https://insurancebridge.co.kr/surgery/1to5/"
            },
            ...(page.typeKey !== 'all' ? [{
              "@type": "ListItem",
              "position": 4,
              "name": `${page.typeKey}종 수술`,
              "item": page.canonicalUrl
            }] : [])
          ]
        },
        {
          "@type": "MedicalWebPage",
          "headline": page.title,
          "description": page.description,
          "url": page.canonicalUrl,
          "publisher": {
            "@type": "Organization",
            "name": "보험브릿지",
            "url": "https://insurancebridge.co.kr/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://insurancebridge.co.kr/og-image.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": page.canonicalUrl
          }
        }
      ]
    };

    const html = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="naver-site-verification" content="29e08a26b48fedc496835f8449859ea98a16ddd7" />
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <link rel="canonical" href="${page.canonicalUrl}" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="보험브릿지" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:url" content="${page.canonicalUrl}" />
    <meta property="og:image" content="https://insurancebridge.co.kr/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(page.title)}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="https://insurancebridge.co.kr/og-image.png" />

    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8437372601039090" crossorigin="anonymous"></script>

    <!-- Structured Data -->
    <script type="application/ld+json">
      ${JSON.stringify(jsonLd, null, 2)}
    </script>
  </head>
  <body style="margin: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif; color: #1e293b; line-height: 1.6;">
    <div id="root">
      <header style="background: #123941; color: #ffffff; padding: 16px 24px; border-bottom: 3px solid #fde047;">
        <div style="max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <a href="/" style="color: #ffffff; text-decoration: none; font-size: 20px; font-weight: 900; display: flex; align-items: center; gap: 8px;">
            <span>보험브릿지</span>
            <span style="font-size: 11px; background: #fde047; color: #123941; padding: 2px 6px; border-radius: 4px; font-weight: 800;">실무플랫폼</span>
          </a>
          <nav style="display: flex; gap: 12px; font-size: 13px; font-weight: 600; flex-wrap: wrap;">
            <a href="/terms/" style="color: #e2e8f0; text-decoration: none;">담보별 분류표</a>
            <a href="/surgery/" style="color: #fde047; text-decoration: none;">수술명 검색</a>
            <a href="/indemnity/" style="color: #e2e8f0; text-decoration: none;">실손의료비 계산</a>
            <a href="/dispute/" style="color: #e2e8f0; text-decoration: none;">판례·분쟁조정</a>
            <a href="/claim/" style="color: #e2e8f0; text-decoration: none;">보험사 고객센터</a>
          </nav>
        </div>
      </header>

      <main style="max-width: 1100px; margin: 24px auto; padding: 0 16px;">
        <!-- Breadcrumb Navigation -->
        <nav style="font-size: 12px; color: #64748b; margin-bottom: 16px;">
          <a href="/" style="color: #64748b; text-decoration: none;">홈</a> &gt; 
          <a href="/surgery/" style="color: #64748b; text-decoration: none;">수술명 검색</a> &gt; 
          ${page.typeKey === 'all' 
            ? '<span style="color: #0f172a; font-weight: 700;">1~5종 수술비 분류표</span>' 
            : `<a href="/surgery/1to5/" style="color: #64748b; text-decoration: none;">1~5종 수술비 분류표</a> &gt; <span style="color: #0f172a; font-weight: 700;">${page.typeKey}종 수술</span>`}
        </nav>

        <!-- Page Header Card -->
        <article style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; margin-bottom: 24px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 18px; margin-bottom: 18px;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                <span style="background: ${page.badgeColor}; color: #ffffff; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 700;">${escapeHtml(page.badge)}</span>
                <span style="background: #f1f5f9; color: #475569; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 600;">등록 수술: ${pageRecords.length}개</span>
              </div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #0f172a; line-height: 1.4;">
                ${escapeHtml(page.h1)}
              </h1>
            </div>
            <a href="/surgery/" style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: #123941; color: #ffffff; border-radius: 10px; font-size: 13px; font-weight: 700; text-decoration: none; box-shadow: 0 2px 4px rgba(18,57,65,0.2);">
              <span>대화형 수술명 검색기 열기</span> &rarr;
            </a>
          </div>

          <!-- Description and Summary -->
          <div style="font-size: 14px; color: #334155; line-height: 1.7; margin-bottom: 16px;">
            <p style="margin: 0 0 10px 0;">${escapeHtml(page.summaryText)}</p>
          </div>

          <!-- Representative Examples -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
            <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 700; color: #0f172a;">📌 대표 수술 예시:</p>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              ${page.examples.map(ex => `<span style="background: #ffffff; border: 1px solid #cbd5e1; color: #334155; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600;">${escapeHtml(ex)}</span>`).join('')}
            </div>
          </div>

          <!-- Quick Navigation Tabs -->
          <div>
            <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 700; color: #64748b;">종별 세부 분류표 바로가기:</p>
            ${navTabsHtml}
          </div>
        </article>

        <!-- Static Rendered Surgery Table -->
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.02); margin-bottom: 24px;">
          <div style="padding: 16px 20px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <h2 style="margin: 0; font-size: 16px; font-weight: 800; color: #0f172a;">
              ${escapeHtml(page.h1)} 상세 목록 (${pageRecords.length}건)
            </h2>
            <span style="font-size: 12px; color: #64748b;">약관 기준 원본 데이터 전수 수록</span>
          </div>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; text-align: left;">
              <thead>
                <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1; font-size: 13px; color: #475569; font-weight: 700;">
                  <th style="padding: 12px 10px; text-align: center; width: 50px;">NO</th>
                  <th style="padding: 12px 12px; width: 130px;">수술부위/분류</th>
                  <th style="padding: 12px 14px;">수술명 및 보장 기준</th>
                  <th style="padding: 12px 10px; text-align: center; width: 80px;">1~5종</th>
                  <th style="padding: 12px 10px; text-align: center; width: 80px;">1~3종</th>
                </tr>
              </thead>
              <tbody>
                ${tableRowsHtml}
              </tbody>
            </table>
          </div>
        </section>

        <!-- Bottom CTA Box -->
        <div style="background: linear-gradient(135deg, #123941 0%, #1e5865 100%); border-radius: 16px; padding: 24px; color: #ffffff; text-align: center; margin-top: 32px; box-shadow: 0 4px 12px rgba(18,57,65,0.15);">
          <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 800; color: #fde047;">
            실시간 수술명 및 종수술 등급 즉시 검색
          </h3>
          <p style="margin: 0 0 16px 0; font-size: 13px; color: #cbd5e1; max-width: 600px; margin-left: auto; margin-right: auto;">
            보험브릿지 대화형 수술명 검색기에서 키워드 실시간 검색, 1~7종/1~8종 수술코드(KDRG) 비교 및 PDF 인쇄 기능을 바로 이용하실 수 있습니다.
          </p>
          <a href="/surgery/" style="display: inline-block; padding: 12px 24px; background: #fde047; color: #123941; border-radius: 10px; font-size: 14px; font-weight: 800; text-decoration: none;">
            대화형 수술명 검색기 열기
          </a>
        </div>
      </main>

      <footer style="margin-top: 48px; border-top: 1px solid #e2e8f0; background: #ffffff; padding: 32px 16px; text-align: center; font-size: 12px; color: #64748b;">
        <div style="max-width: 1100px; margin: 0 auto; line-height: 1.8;">
          <p style="font-weight: 700; color: #334155; margin-bottom: 4px;">보험브릿지 | 보험설계사 실무 정보 플랫폼</p>
          <p>본 사이트에서 제공하는 정보는 보험설계사의 실무 참고용으로 제공되며 법적 효력을 갖는 유권해석이 아닙니다. 정확한 보장 및 보상 기준은 해당 보험사의 최신 개별 상품 약관을 반드시 확인하시기 바랍니다.</p>
          <p style="margin-top: 8px; color: #94a3b8;">© 2026 InsuranceBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

    // Determine target directory
    const targetSubPath = page.pathSegment ? `surgery/1to5/${page.pathSegment}` : 'surgery/1to5';
    
    // 1. Write to root directory (surgery/1to5/...)
    const rootTargetDir = path.join(rootDir, targetSubPath);
    if (!fs.existsSync(rootTargetDir)) {
      fs.mkdirSync(rootTargetDir, { recursive: true });
    }
    fs.writeFileSync(path.join(rootTargetDir, 'index.html'), html, 'utf-8');

    // 2. Write to public directory (public/surgery/1to5/...)
    const publicTargetDir = path.join(rootDir, 'public', targetSubPath);
    if (!fs.existsSync(publicTargetDir)) {
      fs.mkdirSync(publicTargetDir, { recursive: true });
    }
    fs.writeFileSync(path.join(publicTargetDir, 'index.html'), html, 'utf-8');

    // 3. Write to dist directory if it exists
    const distTargetDir = path.join(rootDir, 'dist', targetSubPath);
    if (fs.existsSync(path.join(rootDir, 'dist'))) {
      if (!fs.existsSync(distTargetDir)) {
        fs.mkdirSync(distTargetDir, { recursive: true });
      }
      fs.writeFileSync(path.join(distTargetDir, 'index.html'), html, 'utf-8');
    }

    console.log(`✅ Generated: /${targetSubPath}/ (${pageRecords.length} records)`);
    totalPagesGenerated++;
  }

  console.log(`🎉 Successfully generated all ${totalPagesGenerated} surgery SEO static pages!`);
}

generateSurgeryPages();

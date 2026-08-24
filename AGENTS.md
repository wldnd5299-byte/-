# 보험브릿지(Insurance Bridge) AI 에이전트 작업 및 데이터 보호 규칙

본 프로젝트(보험브릿지)는 보험설계사를 위한 정밀한 보험약관, 담보분류표, 질병코드(KCD), 수술코드 실무 데이터를 다루고 있습니다.
AI 어시스턴트는 코드 작업, 신규 기능 추가, 리팩터링, SEO 최적화 등을 수행할 때 아래 명시된 **보험 데이터 보호 원칙**을 엄격히 준수해야 합니다.

---

## 1. 보험 원본 데이터 보호 구역 (`src/data/terms/*.ts`)

1. **보호 대상 파일**:
   - `src/data/terms/db.ts`
   - `src/data/terms/kb.ts`
   - `src/data/terms/meritz.ts`
   - `src/data/terms/hanwha.ts`
   - `src/data/terms/lotte.ts`
   - `src/data/terms/samsung.ts`
   - `src/data/terms/hyundai.ts`
   - `src/data/terms/heungkuk.ts`
   - `src/data/terms/nh.ts`
   - `src/data/surgeryData.ts`
   - `src/data/disputesData.ts`
   - `src/data/infoData.ts`
2. **수정 제한**:
   - 사용자가 **특정 보험사 또는 특정 담보 데이터 변경을 명시적으로 요청하지 않는 한** 상기 파일들을 절대 수정하지 않는다.
   - **타사 데이터 격리**: 특정 보험사 작업 시 다른 보험사의 데이터 파일은 절대 수정하지 않는다. (예: NH농협손해 작업 시 DB, KB, 메리츠 등 타사 파일 수정 금지)
   - 신규 담보 추가 시 **해당 보험사 파일에만 데이터를 추가(Append)**하고 다른 보험사 파일은 변경하지 않는다.

---

## 2. 데이터 무결성 및 Append-Only 원칙

1. **임의 변경 금지**:
   - 기존 담보의 `label`, `groupCount`, `id`, `disease`(질병명), `code`(질병코드), `group`(그룹), `section`, `summary`, 배열 순서는 사용자의 명시적 요청이 없는 한 변경을 일체 금지한다.
2. **배열 순서 및 서식 보존**:
   - 기존 배열의 재정렬 금지
   - 기존 코드의 불필요한 일괄 포맷팅/린트 정리 금지
   - 기존 데이터 정규화(Normalization) 또는 중복 제거(Deduplication) 금지
   - 기존 명칭, 코드 표기법을 AI의 자의적 판단으로 표준화/축약/수정 금지

---

## 3. 중앙 연동 파일 수정 제한 (`index.ts` & `TermsMaster.tsx`)

1. **`src/data/terms/index.ts`**:
   - 신규 담보 탭 등록에 필요한 **최소 라인 추가(import 및 router mapping 추가)만 허용**한다.
   - 기존 등록된 타사 항목/담보의 수정·삭제·정렬·정규화·리팩터링을 엄격히 금지한다.
2. **`src/components/TermsMaster.tsx`**:
   - 신규 탭/약관 안내 UI 박스 표시에 필요한 **최소 코드 추가만 허용**한다.
   - 기존 보험 데이터 관련 조건문, 렌더링 로직, 타사 탭 분기를 임의로 수정하거나 재구성하지 않는다.

---

## 4. 사이트 운영 및 유지보수 시 준수사항

1. **수정 핑계 금지**:
   - SEO 최적화, `sitemap.xml`, `robots.txt`, RSS 피드, UI 스타일링 개선, 빌드 에러 수정, 코드 리팩터링 등을 이유로 보험 원본 데이터를 수정해서는 안 된다.
2. **승인 없는 변경 금지**:
   - 약관 규정상 수정이 필요하다고 판단되더라도 사용자의 명시적 지시나 승인 없이 임의로 수정하지 않는다.
3. **작업 완료 보고**:
   - 작업 완료 후 반드시 **실제 변경된 파일 목록**을 보고하고, 보험 데이터 보호 구역 파일에 요청 범위를 벗어난 변경이 없는지 명확히 확인하여 전달한다.

import re

with open('src/components/TermsMaster.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add LOTTE_SURGERY_20_SECTIONS
target1 = 'export const LOTTE_SURGERY_18_SECTIONS = ['
lotte20_code = '''export const LOTTE_SURGERY_20_SECTIONS = [
  {
    title: '당뇨병 질환',
    items: [
      { num: '1', disease: '당뇨병', code: 'E10~E14' }
    ]
  },
  {
    title: '심장 질환',
    items: [
      { num: '2', disease: '만성 류마티스성 심장 질환', code: 'I05~I09' },
      { num: '3', disease: '허혈성 심장 질환', code: 'I20~I25' },
      { num: '4', disease: '폐성 심장병 및 폐순환의 질환', code: 'I26~I28' },
      { num: '5', disease: '기타 형태의 심장 병', code: 'I30~I52' }
    ]
  },
  {
    title: '고혈압 질환',
    items: [
      { num: '6', disease: '고혈압 질환', code: 'I10~I15' }
    ]
  },
  {
    title: '뇌혈관 질환',
    items: [
      { num: '7', disease: '뇌혈관 질환', code: 'I60~I69' }
    ]
  },
  {
    title: '간 질환',
    items: [
      { num: '8', disease: '바이러스 간염', code: 'B15~B19' },
      { num: '9', disease: '간의 질환', code: 'K70~K77' }
    ]
  },
  {
    title: '위·십이지장궤양',
    items: [
      { num: '10', disease: '위궤양', code: 'K25' },
      { num: '11', disease: '십이지장궤양', code: 'K26' },
      { num: '12', disease: '소화성 궤양', code: 'K27' },
      { num: '13', disease: '위공창 궤양', code: 'K28' }
    ]
  },
  {
    title: '만성 하부호흡기 질환',
    items: [
      { num: '14', disease: '만성 하부호흡기 질환', code: 'J40~J47' }
    ]
  },
  {
    title: '갑상선 질환',
    items: [
      { num: '15', disease: '갑상선의 장애', code: 'E00~E07' }
    ]
  },
  {
    title: '동맥경화증',
    items: [
      { num: '16', disease: '죽상경화증', code: 'I70' }
    ]
  },
  {
    title: '폐렴',
    items: [
      { num: '17', disease: '폐렴', code: 'J12~J18' }
    ]
  },
  {
    title: '녹내장',
    items: [
      { num: '18', disease: '녹내장', code: 'H40~H42' }
    ]
  },
  {
    title: '결핵',
    items: [
      { num: '19', disease: '결핵', code: 'A15~A19' }
    ]
  },
  {
    title: '신부전',
    items: [
      { num: '20', disease: '신부전', code: 'N17~N19' }
    ]
  },
  {
    title: '백내장',
    items: [
      { num: '21', disease: '백내장 및 수정체의 기타 장애', code: 'H25, H26, H28' }
    ]
  },
  {
    title: '관절염',
    items: [
      { num: '22', disease: '관절염', code: 'M00~M19' }
    ]
  },
  {
    title: '생식기 질환',
    items: [
      { num: '23', disease: '남성 생식기관의 질환', code: 'N40~N51' },
      { num: '24', disease: '여성 골반장기의 염증성 질환', code: 'N70~N77' },
      { num: '25', disease: '여성 생식트랙의 비염증성 장애', code: 'N80~N98' }
    ]
  },
  {
    title: '담석증',
    items: [
      { num: '26', disease: '담석증', code: 'K80' }
    ]
  },
  {
    title: '담낭염',
    items: [
      { num: '27', disease: '담낭염', code: 'K81' }
    ]
  },
  {
    title: '췌장 질환',
    items: [
      { num: '28', disease: '급성 췌장염 및 췌장의 기타 질환', code: 'K85, K86' }
    ]
  },
  {
    title: '치핵',
    items: [
      { num: '29', disease: '치핵 및 항문상피채', code: 'K64' }
    ]
  }
];

''' + target1

content = content.replace(target1, lotte20_code, 1)

# 2. Add lotte_surgery20 to activeSubTab type union
target2 = "'lotte_surgery7' | 'lotte_surgery16' | 'lotte_surgery18'"
replacement2 = "'lotte_surgery7' | 'lotte_surgery16' | 'lotte_surgery18' | 'lotte_surgery20'"
content = content.replace(target2, replacement2, 1)

# 3. Add state and toggle for lotte_surgery20
target3 = "const [expandedLotteSurgery18Sections, setExpandedLotteSurgery18Sections] = useState<Record<number, boolean>>({});"
replacement3 = target3 + "\n  const [expandedLotteSurgery20Sections, setExpandedLotteSurgery20Sections] = useState<Record<number, boolean>>({});"
content = content.replace(target3, replacement3, 1)

target4 = "const toggleLotteSurgery18Section = (idx: number) => { setExpandedLotteSurgery18Sections(prev => ({ ...prev, [idx]: !prev[idx] })); };"
replacement4 = target4 + "\n  const toggleLotteSurgery20Section = (idx: number) => { setExpandedLotteSurgery20Sections(prev => ({ ...prev, [idx]: !prev[idx] })); };"
content = content.replace(target4, replacement4, 1)

# 4. Add filteredLotteSurgery20Sections
target5 = "const filteredLotteSurgery18Sections = filterSurgerySections(LOTTE_SURGERY_18_SECTIONS);"
replacement5 = target5 + "\n  const filteredLotteSurgery20Sections = filterSurgerySections(LOTTE_SURGERY_20_SECTIONS);"
content = content.replace(target5, replacement5, 1)

# 5. Add PDF preamble & footnotes in renderDbSurgeryTab
target6 = '{/* 2. Top Summary Classification Table */}'
replacement6 = '''{tabKey === 'lotte_surgery20' && (
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 leading-relaxed font-bold shadow-3xs">
            <div className="font-black text-[#123941] mb-1 text-[11px] flex items-center gap-1.5">
              <span>📌 &lt;별표30&gt; 20대질병 분류표 적용 안내</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              약관에 규정하는 20대질병으로 분류되는 질병은 제7차 개정 한국표준질병·사인분류(통계청고시 제2015-309호, 2016.1.1. 시행) 중 다음에 적은 질병을 말합니다. 단, 아래 질병 이외에 출생전후기에 발생한 주요병태로 분류되는 질병(P코드)은 포함하지 않습니다.
            </p>
          </div>
        )}
        ''' + target6
content = content.replace(target6, replacement6, 1)

# Add footnotes to renderDbSurgeryTab
pos_render_end = content.find('const renderHyundaiDiseaseSurgeryTab =')
if pos_render_end != -1:
    footnotes_code = '''{tabKey === 'lotte_surgery20' && (
          <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-slate-700 leading-relaxed font-bold space-y-1 shadow-3xs">
            <div className="font-black text-amber-800 flex items-center gap-1 text-[11px]">
              <span>주) 유의사항</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold">
              1. 당뇨병 질환(E10~E14)에는 눈, 신장 등의 합병증을 동반한 당뇨병이 포함되어 있습니다(자세한 내용은 '한국표준질병·사인분류'를 참고).
            </p>
            <p className="text-[11px] text-slate-600 font-bold">
              2. 제8차 개정 이후 한국표준질병·사인분류에 있어서 상기 질병 이외에 추가로 상기 분류번호에 해당하는 질병이 있는 경우에는 그 질병도 포함하는 것으로 합니다.
            </p>
          </div>
        )}
      '''
    pos_insert = content.rfind('</div>\n    );', 0, pos_render_end)
    if pos_insert != -1:
        content = content[:pos_insert] + footnotes_code + content[pos_insert:]

# 6. Add sub-tab button for lotte_surgery20
pos_btn = content.find("activeSubTab === 'lotte_surgery18'")
if pos_btn != -1:
    pos_btn_end = content.find('</button>', pos_btn) + len('</button>')
    btn_code = '''
            <button
              onClick={() => setActiveSubTab('lotte_surgery20')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeSubTab === 'lotte_surgery20'
                  ? 'bg-[#123941] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              20대질병수술비
            </button>'''
    content = content[:pos_btn_end] + btn_code + content[pos_btn_end:]

# 7. Add view rendering call for lotte_surgery20
target8 = "selectedInsurer.id === 'lotte-ins' && activeSubTab === 'lotte_surgery18'"
pos_view = content.find(target8)
if pos_view != -1:
    pos_view_end = content.find(') : null', pos_view) + len(') : null')
    view_code = ''' : selectedInsurer.id === 'lotte-ins' && activeSubTab === 'lotte_surgery20' ? (
              renderDbSurgeryTab(
                'lotte_surgery20',
                '롯데손해보험 20대질병수술비',
                LOTTE_SURGERY_20_SECTIONS,
                filteredLotteSurgery20Sections,
                expandedLotteSurgery20Sections,
                setExpandedLotteSurgery20Sections,
                toggleLotteSurgery20Section
              )
            )'''
    content = content[:pos_view_end] + view_code + content[pos_view_end:]

# 8. Update handleDownloadPDF for lotte_surgery20
target9 = "const isLotteSurgery18 = selectedInsurer.id === 'lotte-ins' && activeSubTab === 'lotte_surgery18';"
replacement9 = target9 + "\n    const isLotteSurgery20 = selectedInsurer.id === 'lotte-ins' && activeSubTab === 'lotte_surgery20';"
content = content.replace(target9, replacement9, 1)

target10 = "isLotteSurgery18 ?"
replacement10 = "isLotteSurgery20 ? LOTTE_SURGERY_20_SECTIONS : isLotteSurgery18 ?"
content = content.replace(target10, replacement10, 1)

with open('src/components/TermsMaster.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated TermsMaster.tsx with lotte_surgery20 elements successfully!')

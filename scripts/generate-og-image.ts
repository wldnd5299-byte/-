import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

async function generateOgImage() {
  console.log('Fetching Pretendard font buffers for high-quality rendering...');
  
  let fontBuffers: Buffer[] = [];
  try {
    const [boldRes, blackRes, medRes] = await Promise.all([
      fetch('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/public/static/Pretendard-Bold.otf'),
      fetch('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/public/static/Pretendard-Black.otf'),
      fetch('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/public/static/Pretendard-Medium.otf')
    ]);
    
    const [boldBuf, blackBuf, medBuf] = await Promise.all([
      boldRes.arrayBuffer(),
      blackRes.arrayBuffer(),
      medRes.arrayBuffer()
    ]);

    fontBuffers = [Buffer.from(boldBuf), Buffer.from(blackBuf), Buffer.from(medBuf)];
    console.log('Pretendard fonts successfully loaded.');
  } catch (err) {
    console.warn('Could not download external fonts, falling back to system fonts:', err);
  }

  // Generate SVG matching exact 1200x630 specification
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <!-- Gradients -->
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#edf6fc"/>
    </linearGradient>
    
    <linearGradient id="skyGrad" x1="0" y1="0" x2="1" y2="0.8">
      <stop offset="0%" stop-color="#f0f9ff" stop-opacity="0.2"/>
      <stop offset="60%" stop-color="#e0f2fe" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#bae6fd" stop-opacity="0.8"/>
    </linearGradient>

    <linearGradient id="blueWave" x1="0" y1="1" x2="0.4" y2="0">
      <stop offset="0%" stop-color="#e0f2fe" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>

    <linearGradient id="bridgeSteel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="50%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>

    <linearGradient id="cableGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>

    <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>

    <!-- Dot Pattern -->
    <pattern id="dotPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
      <circle cx="8" cy="8" r="2.2" fill="#cbd5e1" fill-opacity="0.65" />
    </pattern>
  </defs>

  <!-- Base Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>

  <!-- Top-left Dot Matrix -->
  <rect x="20" y="20" width="120" height="200" fill="url(#dotPattern)" />

  <!-- Bottom-left Soft Curved Dynamic Accent -->
  <path d="M 0 380 Q 150 420 280 490 L 0 490 Z" fill="url(#blueWave)"/>
  <path d="M 0 440 Q 90 460 160 490 L 0 490 Z" fill="#bae6fd" fill-opacity="0.5"/>

  <!-- Right Scenic Sky & Water Background -->
  <path d="M 680 0 L 1200 0 L 1200 490 L 680 490 Q 640 245 680 0 Z" fill="url(#skyGrad)"/>

  <!-- Distant Mountains & Horizon -->
  <path d="M 750 435 Q 860 420 950 435 Q 1060 425 1200 430 L 1200 490 L 750 490 Z" fill="#94a3b8" fill-opacity="0.25"/>
  <path d="M 820 442 Q 920 432 1020 442 Q 1120 435 1200 440 L 1200 490 L 820 490 Z" fill="#64748b" fill-opacity="0.3"/>

  <!-- Sea Water Base -->
  <rect x="680" y="445" width="520" height="45" fill="url(#waterGrad)" fill-opacity="0.45"/>
  <!-- Sea Wave Lines -->
  <line x1="720" y1="460" x2="840" y2="460" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.7"/>
  <line x1="880" y1="455" x2="980" y2="455" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.7"/>
  <line x1="800" y1="472" x2="940" y2="472" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="1020" y1="465" x2="1160" y2="465" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.7"/>
  <line x1="960" y1="478" x2="1100" y2="478" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.6"/>

  <!-- RIGHT REALISTIC SUSPENSION BRIDGE STRUCTURE -->
  <g id="suspension-bridge" transform="translate(620, -20)">
    <!-- Distant Main Cable Arch (Back) -->
    <path d="M 120 420 Q 320 280 430 100 Q 510 240 580 410" fill="none" stroke="#94a3b8" stroke-width="3" stroke-opacity="0.6"/>

    <!-- Main Bridge Tower Pillars (Tower at X=430) -->
    <!-- Left Leg -->
    <polygon points="418,80 426,80 416,440 404,440" fill="url(#bridgeSteel)" stroke="#334155" stroke-width="1"/>
    <!-- Right Leg -->
    <polygon points="438,80 446,80 454,440 442,440" fill="url(#bridgeSteel)" stroke="#334155" stroke-width="1"/>
    <!-- Top Tower Crown -->
    <rect x="412" y="70" width="40" height="15" fill="#334155" rx="2"/>
    <rect x="415" y="65" width="34" height="6" fill="#1e293b"/>
    <!-- Tower Horizontal Crossbeams -->
    <rect x="416" y="140" width="32" height="12" fill="#334155" rx="1"/>
    <rect x="413" y="210" width="38" height="14" fill="#334155" rx="1"/>
    <rect x="410" y="290" width="44" height="16" fill="#334155" rx="1"/>
    <rect x="406" y="375" width="52" height="18" fill="#334155" rx="1"/>

    <!-- Tower X-Bracing Trusses -->
    <line x1="420" y1="152" x2="444" y2="210" stroke="#475569" stroke-width="2"/>
    <line x1="444" y1="152" x2="420" y2="210" stroke="#475569" stroke-width="2"/>
    <line x1="418" y1="224" x2="446" y2="290" stroke="#475569" stroke-width="2.5"/>
    <line x1="446" y1="224" x2="418" y2="290" stroke="#475569" stroke-width="2.5"/>
    <line x1="415" y1="306" x2="450" y2="375" stroke="#475569" stroke-width="3"/>
    <line x1="450" y1="306" x2="415" y2="375" stroke="#475569" stroke-width="3"/>

    <!-- Front Main Cable Arch -->
    <path d="M 100 425 Q 300 290 422 75 Q 490 220 580 405" fill="none" stroke="#475569" stroke-width="5"/>
    <path d="M 100 425 Q 300 290 422 75 Q 490 220 580 405" fill="none" stroke="#60a5fa" stroke-width="1.5" stroke-opacity="0.8"/>

    <!-- Vertical Suspender Ropes -->
    <!-- Left span suspenders -->
    <line x1="140" y1="422" x2="140" y2="400" stroke="#64748b" stroke-width="1.2"/>
    <line x1="170" y1="420" x2="170" y2="380" stroke="#64748b" stroke-width="1.2"/>
    <line x1="200" y1="418" x2="200" y2="358" stroke="#64748b" stroke-width="1.2"/>
    <line x1="230" y1="416" x2="230" y2="332" stroke="#64748b" stroke-width="1.2"/>
    <line x1="260" y1="414" x2="260" y2="302" stroke="#64748b" stroke-width="1.2"/>
    <line x1="290" y1="412" x2="290" y2="268" stroke="#64748b" stroke-width="1.2"/>
    <line x1="320" y1="410" x2="320" y2="230" stroke="#64748b" stroke-width="1.2"/>
    <line x1="350" y1="408" x2="350" y2="186" stroke="#64748b" stroke-width="1.2"/>
    <line x1="380" y1="406" x2="380" y2="136" stroke="#64748b" stroke-width="1.2"/>
    <line x1="405" y1="404" x2="405" y2="90" stroke="#64748b" stroke-width="1.2"/>

    <!-- Right span suspenders -->
    <line x1="455" y1="403" x2="455" y2="130" stroke="#64748b" stroke-width="1.2"/>
    <line x1="480" y1="401" x2="480" y2="195" stroke="#64748b" stroke-width="1.2"/>
    <line x1="505" y1="400" x2="505" y2="255" stroke="#64748b" stroke-width="1.2"/>
    <line x1="530" y1="398" x2="530" y2="310" stroke="#64748b" stroke-width="1.2"/>
    <line x1="555" y1="396" x2="555" y2="360" stroke="#64748b" stroke-width="1.2"/>

    <!-- Bridge Road Deck (Truss Girder) -->
    <polygon points="80,422 580,395 580,412 80,438" fill="#1e293b"/>
    <polygon points="80,418 580,392 580,402 80,428" fill="#475569"/>
    <!-- Road Stripe / Deck highlight -->
    <line x1="80" y1="424" x2="580" y2="397" stroke="#94a3b8" stroke-width="2"/>
    <line x1="80" y1="432" x2="580" y2="405" stroke="#0284c7" stroke-width="1.5"/>

    <!-- Pier / Caisson Foundation under Water -->
    <rect x="390" y="440" width="84" height="40" fill="#334155" rx="3"/>
    <rect x="382" y="465" width="100" height="20" fill="#1e293b" rx="2"/>
  </g>

  <!-- CALLIGRAPHY MOTTO (Right Center) -->
  <g id="calligraphy-slogan" transform="translate(845, 305)">
    <!-- Sub slogan -->
    <text x="0" y="0" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="28" font-weight="700" fill="#123941" letter-spacing="-0.02em" font-style="italic">
      신뢰와 정보를 잇는 다리,
    </text>
    <!-- Main handwritten brand name -->
    <text x="25" y="55" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="46" font-weight="900" fill="#123941" letter-spacing="-0.03em">
      보험브릿지
    </text>
    <!-- Dynamic Blue Brush Underline -->
    <path d="M 20 72 Q 95 62 170 67 Q 210 70 240 65 Q 160 78 20 72 Z" fill="#0066cc"/>
  </g>

  <!-- LEFT BRANDING & MAIN HEADINGS -->
  <g id="left-branding" transform="translate(68, 65)">
    <!-- Bridge Brand Icon (Stylized Navy/Blue Bridge) -->
    <g id="brand-logo-icon" transform="translate(0, 45) scale(0.92)">
      <!-- Outer/Inner Cables -->
      <path d="M 5 190 Q 75 140 105 10 L 115 10 Q 145 140 215 190" fill="none" stroke="#123941" stroke-width="14" stroke-linecap="round"/>
      <path d="M 35 190 Q 85 155 105 55 L 115 55 Q 135 155 185 190" fill="none" stroke="#0066cc" stroke-width="8"/>
      <!-- Main Towers -->
      <rect x="100" y="0" width="20" height="195" fill="#123941" rx="4"/>
      <!-- Cross Struts -->
      <rect x="80" y="70" width="60" height="12" fill="#123941" rx="2"/>
      <rect x="85" y="130" width="50" height="12" fill="#123941" rx="2"/>
      <!-- Suspenders -->
      <line x1="45" y1="190" x2="45" y2="165" stroke="#123941" stroke-width="5"/>
      <line x1="68" y1="190" x2="68" y2="145" stroke="#123941" stroke-width="5"/>
      <line x1="152" y1="190" x2="152" y2="145" stroke="#123941" stroke-width="5"/>
      <line x1="175" y1="190" x2="175" y2="165" stroke="#123941" stroke-width="5"/>
      <!-- Bridge Road Deck with Arch Bottom -->
      <path d="M 0 185 Q 110 165 220 185 L 220 205 Q 110 185 0 205 Z" fill="#123941"/>
      <path d="M 0 192 Q 110 174 220 192" stroke="#ffffff" stroke-width="4"/>
      <!-- Water Waves at base -->
      <path d="M 5 212 Q 55 204 110 212 Q 165 220 215 212" fill="none" stroke="#0066cc" stroke-width="5" stroke-linecap="round"/>
    </g>

    <!-- Main Typography (보험브릿지 INSURANCE BRIDGE) -->
    <g transform="translate(235, 60)">
      <text x="0" y="95" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="94" font-weight="900" fill="#123941" letter-spacing="-0.04em">
        보험브릿지
      </text>
      <text x="5" y="146" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="34" font-weight="800" fill="#0066cc" letter-spacing="0.14em">
        INSURANCE BRIDGE
      </text>
    </g>

    <!-- Center Separator Dot & Accent Line -->
    <g transform="translate(325, 235)">
      <circle cx="0" cy="0" r="5" fill="#0066cc"/>
      <line x1="-70" y1="0" x2="-15" y2="0" stroke="#cbd5e1" stroke-width="2"/>
      <line x1="15" y1="0" x2="70" y2="0" stroke="#cbd5e1" stroke-width="2"/>
    </g>

    <!-- Main Platform Headline -->
    <g transform="translate(35, 298)">
      <text x="0" y="0" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="44" font-weight="900" letter-spacing="-0.03em">
        <tspan fill="#123941">보험설계사를 위한 </tspan>
        <tspan fill="#0066cc">실무 정보 플랫폼</tspan>
      </text>
    </g>

    <!-- Subtitle -->
    <g transform="translate(48, 345)">
      <text x="0" y="0" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="27" font-weight="500" fill="#334155" letter-spacing="-0.02em">
        정확한 정보와 편리한 도구로 업무 효율을 높여드립니다.
      </text>
    </g>
  </g>

  <!-- BOTTOM 5 FEATURE PILLARS TOOLBAR (Height 140px, Y=490 to 630) -->
  <g id="bottom-toolbar" transform="translate(0, 490)">
    <!-- Navy Background -->
    <rect width="1200" height="140" fill="#123941"/>
    <!-- Top Accent Line -->
    <line x1="0" y1="0" x2="1200" y2="0" stroke="#1e4d58" stroke-width="2"/>

    <!-- Vertical Column Dividers -->
    <line x1="240" y1="20" x2="240" y2="120" stroke="#1e4d58" stroke-width="1.5"/>
    <line x1="480" y1="20" x2="480" y2="120" stroke="#1e4d58" stroke-width="1.5"/>
    <line x1="720" y1="20" x2="720" y2="120" stroke="#1e4d58" stroke-width="1.5"/>
    <line x1="960" y1="20" x2="960" y2="120" stroke="#1e4d58" stroke-width="1.5"/>

    <!-- 1. 보험약관 / 담보분류 -->
    <g transform="translate(32, 35)">
      <!-- Document & Shield Icon -->
      <g transform="translate(0, 2)">
        <rect x="5" y="0" width="40" height="52" rx="4" fill="none" stroke="#ffffff" stroke-width="3.5"/>
        <line x1="14" y1="14" x2="36" y2="14" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
        <line x1="14" y1="24" x2="28" y2="24" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
        <!-- Blue Shield Check Badge -->
        <g transform="translate(24, 25)">
          <path d="M 0 0 L 18 0 C 18 14 9 22 9 22 C 9 22 0 14 0 0 Z" fill="#0066cc" stroke="#ffffff" stroke-width="2"/>
          <path d="M 4 8 L 8 12 L 14 4" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </g>
      <text x="68" y="26" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="22" font-weight="700" fill="#ffffff" letter-spacing="-0.02em">
        보험약관
      </text>
      <text x="68" y="56" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="22" font-weight="700" fill="#ffffff" letter-spacing="-0.02em">
        담보분류
      </text>
    </g>

    <!-- 2. 수술명 / 검색 -->
    <g transform="translate(275, 35)">
      <!-- Search Magnifier Icon -->
      <g transform="translate(0, 5)">
        <circle cx="24" cy="24" r="18" fill="none" stroke="#38bdf8" stroke-width="4"/>
        <circle cx="24" cy="24" r="13" fill="none" stroke="#ffffff" stroke-width="2" stroke-opacity="0.5"/>
        <line x1="38" y1="38" x2="56" y2="56" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
      </g>
      <text x="75" y="26" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="22" font-weight="700" fill="#ffffff" letter-spacing="-0.02em">
        수술명
      </text>
      <text x="75" y="56" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="22" font-weight="700" fill="#ffffff" letter-spacing="-0.02em">
        검색
      </text>
    </g>

    <!-- 3. 실손의료비 / 계산기 -->
    <g transform="translate(515, 35)">
      <!-- Calculator Icon -->
      <g transform="translate(0, 5)">
        <rect x="0" y="0" width="46" height="58" rx="6" fill="none" stroke="#ffffff" stroke-width="3.5"/>
        <rect x="8" y="8" width="30" height="12" rx="2" fill="#0066cc"/>
        <!-- Calculator button dots -->
        <circle cx="13" cy="29" r="3" fill="#ffffff"/>
        <circle cx="23" cy="29" r="3" fill="#ffffff"/>
        <circle cx="33" cy="29" r="3" fill="#ffffff"/>
        <circle cx="13" cy="39" r="3" fill="#ffffff"/>
        <circle cx="23" cy="39" r="3" fill="#ffffff"/>
        <circle cx="33" cy="39" r="3" fill="#ffffff"/>
        <circle cx="13" cy="49" r="3" fill="#ffffff"/>
        <circle cx="23" cy="49" r="3" fill="#ffffff"/>
        <circle cx="33" cy="49" r="3" fill="#38bdf8"/>
      </g>
      <text x="68" y="26" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="22" font-weight="700" fill="#ffffff" letter-spacing="-0.02em">
        실손의료비
      </text>
      <text x="68" y="56" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="22" font-weight="700" fill="#ffffff" letter-spacing="-0.02em">
        계산기
      </text>
    </g>

    <!-- 4. 판례 및 / 분쟁조정사례 -->
    <g transform="translate(745, 35)">
      <!-- Legal Gavel Icon -->
      <g transform="translate(0, 5)">
        <g transform="rotate(-35 25 25)">
          <rect x="16" y="6" width="20" height="14" rx="2" fill="#38bdf8" stroke="#ffffff" stroke-width="2.5"/>
          <line x1="26" y1="20" x2="26" y2="52" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
        </g>
        <!-- Sound Block -->
        <rect x="4" y="50" width="44" height="8" rx="3" fill="#0066cc" stroke="#ffffff" stroke-width="2"/>
      </g>
      <text x="75" y="26" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="22" font-weight="700" fill="#ffffff" letter-spacing="-0.02em">
        판례 및
      </text>
      <text x="75" y="56" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="22" font-weight="700" fill="#ffffff" letter-spacing="-0.02em">
        분쟁조정사례
      </text>
    </g>

    <!-- 5. 실무에 필요한 / 모든 정보 -->
    <g transform="translate(985, 35)">
      <!-- Monitor & Chart Icon -->
      <g transform="translate(0, 5)">
        <rect x="0" y="0" width="52" height="38" rx="4" fill="none" stroke="#ffffff" stroke-width="3.5"/>
        <line x1="18" y1="38" x2="18" y2="48" stroke="#ffffff" stroke-width="3"/>
        <line x1="34" y1="38" x2="34" y2="48" stroke="#ffffff" stroke-width="3"/>
        <line x1="10" y1="48" x2="42" y2="48" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Chart Bars inside screen -->
        <rect x="8" y="22" width="6" height="10" fill="#38bdf8" rx="1"/>
        <rect x="18" y="16" width="6" height="16" fill="#38bdf8" rx="1"/>
        <rect x="28" y="10" width="6" height="22" fill="#38bdf8" rx="1"/>
        <rect x="38" y="6" width="6" height="26" fill="#0066cc" rx="1"/>
      </g>
      <text x="68" y="26" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="21" font-weight="700" fill="#ffffff" letter-spacing="-0.02em">
        실무에 필요한
      </text>
      <text x="68" y="56" font-family="'Pretendard', 'Apple SD Gothic Neo', sans-serif" font-size="21" font-weight="700" fill="#ffffff" letter-spacing="-0.02em">
        모든 정보
      </text>
    </g>
  </g>
</svg>
  `.trim();

  console.log('Rendering 1200x630 PNG with Resvg...');
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
    font: {
      fontBuffers,
      defaultFontFamily: 'Pretendard'
    } as any
  });

  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const targetPath = path.join(publicDir, 'og-image.png');
  fs.writeFileSync(targetPath, pngBuffer);
  console.log(`✅ og-image.png successfully created at ${targetPath} (${pngBuffer.length} bytes)`);
}

generateOgImage().catch(err => {
  console.error('Failed to generate og-image.png:', err);
  process.exit(1);
});

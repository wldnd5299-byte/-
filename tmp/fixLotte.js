import fs from 'fs';

let content = fs.readFileSync('src/components/TermsMaster.tsx', 'utf8');

const start = content.indexOf('const expandLotteItems =');
const end = content.indexOf('const filteredSections = LOTTE_SURGERY_64_SECTIONS');

if (start !== -1 && end !== -1) {
  const cleanFunc = `const expandLotteItems = (items: any[]) => {
      const result: { disease: string; code: string }[] = [];
      if (!items) return result;
      items.forEach((item: any) => {
        const diseaseStr = (item.disease || item.name || '').trim();
        const codeStr = (item.code || '').trim();
        if (diseaseStr.includes('(-')) {
          const pStart = diseaseStr.indexOf('(-');
          const pEnd = diseaseStr.lastIndexOf(')');
          const inside = diseaseStr.slice(pStart + 2, pEnd >= 0 ? pEnd : undefined).trim();
          const subDiseases = inside.split(/,\\s*-\\s*|\\s*-\\s*/).map(s => s.trim()).filter(Boolean);
          const subCodes = codeStr.split(/,\\s*/).map(s => s.trim()).filter(Boolean);
          subDiseases.forEach((d, i) => {
            const cleanD = d.startsWith('-') ? d.slice(1).trim() : d;
            const cleanC = (subCodes[i] || subCodes[0] || '').replace(/~/g, ' ~ ');
            result.push({ disease: cleanD, code: cleanC });
          });
          return;
        }
        if (diseaseStr.includes('⌎(')) {
          const parts = diseaseStr.split('⌎(');
          const mainD = parts[0].replace(/,\\s*$/, '').trim();
          const subDs = parts.slice(1).map(p => p.replace(/\\),?\\s*$/, '').trim());
          let mainC = '';
          let subCs: string[] = [];
          if (codeStr.includes('⌎(')) {
            const cParts = codeStr.split('⌎(');
            mainC = cParts[0].replace(/,\\s*$/, '').trim().replace(/~/g, ' ~ ');
            subCs = cParts.slice(1).map(p => p.replace(/\\),?\\s*$/, '').replace(/^\\(/, '').trim().replace(/~/g, ' ~ '));
          } else {
            const cParts = codeStr.split(/,\\s*/);
            mainC = (cParts[0] || '').replace(/~/g, ' ~ ');
            subCs = cParts.slice(1).map(c => c.replace(/~/g, ' ~ '));
          }
          result.push({ disease: mainD, code: mainC });
          subDs.forEach((d, i) => {
            const cleanD = d.replace(/\\s+[A-Z]\\d{2}\\.\\d+$/, '').trim();
            let cleanC = subCs[i] || '';
            cleanC = cleanC.replace(/^\\(/, '').replace(/\\)$/, '').trim();
            result.push({ disease: cleanD, code: cleanC });
          });
          return;
        }
        result.push({
          disease: diseaseStr,
          code: codeStr.replace(/~/g, ' ~ ')
        });
      });
      return result;
    };\n\n    `;

  content = content.slice(0, start) + cleanFunc + content.slice(end);
  fs.writeFileSync('src/components/TermsMaster.tsx', content, 'utf8');
  console.log('Fixed expandLotteItems correctly!');
}

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';
import { PRECEDENTS_DATA } from './src/data/disputeData';
import { INSURER_TERMS_LIST, INSURER_SUBTABS } from './src/data/terms/index.ts';

export default defineConfig(() => {
  const disputeInputs: Record<string, string> = {};
  PRECEDENTS_DATA.forEach(item => {
    const filePath = path.resolve(__dirname, `dispute/${item.id}/index.html`);
    if (fs.existsSync(filePath)) {
      disputeInputs[`dispute_${item.id.replace(/[^a-zA-Z0-9]/g, '_')}`] = filePath;
    }
  });

  const termsInputs: Record<string, string> = {};
  INSURER_TERMS_LIST.forEach(insurer => {
    const subtabs = INSURER_SUBTABS[insurer.id] || [];
    const insurerLandingPath = path.resolve(__dirname, `terms/${insurer.id}/index.html`);
    if (fs.existsSync(insurerLandingPath)) {
      termsInputs[`terms_${insurer.id.replace(/[^a-zA-Z0-9]/g, '_')}`] = insurerLandingPath;
    }
    subtabs.forEach(st => {
      const subtabPath = path.resolve(__dirname, `terms/${insurer.id}/${st.id}/index.html`);
      if (fs.existsSync(subtabPath)) {
        termsInputs[`terms_${insurer.id.replace(/[^a-zA-Z0-9]/g, '_')}_${st.id.replace(/[^a-zA-Z0-9]/g, '_')}`] = subtabPath;
      }
    });
  });

  const infoInputs: Record<string, string> = {};
  const infoRootDir = path.resolve(__dirname, 'info');
  if (fs.existsSync(infoRootDir)) {
    const infoEntries = fs.readdirSync(infoRootDir, { withFileTypes: true });
    for (const entry of infoEntries) {
      if (entry.isDirectory()) {
        const articleHtmlPath = path.join(infoRootDir, entry.name, 'index.html');
        if (fs.existsSync(articleHtmlPath)) {
          infoInputs[`info_${entry.name.replace(/[^a-zA-Z0-9]/g, '_')}`] = articleHtmlPath;
        }
      } else if (entry.isFile() && entry.name === 'index.html') {
        infoInputs['info'] = path.join(infoRootDir, 'index.html');
      }
    }
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'xlsx-download-server',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const decodedUrl = decodeURIComponent(req.url || '');
            if (
              decodedUrl === '/download/surgery-excel' ||
              decodedUrl === '/insurancebridge_surgery_all.xlsx' ||
              decodedUrl.includes('보험브릿지_수술명검색_전체수술분류_원본.xlsx')
            ) {
              const filePath = path.resolve(__dirname, 'public/보험브릿지_수술명검색_전체수술분류_원본.xlsx');
              if (fs.existsSync(filePath)) {
                const stat = fs.statSync(filePath);
                const fileBuf = fs.readFileSync(filePath);
                res.writeHead(200, {
                  'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                  'Content-Disposition': 'attachment; filename="insurancebridge_surgery_all.xlsx"; filename*=UTF-8\'\'%EB%B3%B4%ED%97%98%EB%B8%8C%EB%A6%BF%EC%A7%80_%EC%88%98%EC%88%A0%EB%AA%85%EA%B2%80%EC%83%89_%EC%A0%84%EC%B2%B4%EC%88%98%EC%88%A0%EB%B6%84%EB%A5%98_%EC%9B%90%EB%B3%B8.xlsx',
                  'Content-Length': stat.size,
                  'Cache-Control': 'no-cache',
                });
                res.end(fileBuf);
                return;
              }
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          age: path.resolve(__dirname, 'age/index.html'),
          surgery: path.resolve(__dirname, 'surgery/index.html'),
          surgery_1to5: path.resolve(__dirname, 'surgery/1to5/index.html'),
          surgery_1to5_type1: path.resolve(__dirname, 'surgery/1to5/type-1/index.html'),
          surgery_1to5_type2: path.resolve(__dirname, 'surgery/1to5/type-2/index.html'),
          surgery_1to5_type3: path.resolve(__dirname, 'surgery/1to5/type-3/index.html'),
          surgery_1to5_type4: path.resolve(__dirname, 'surgery/1to5/type-4/index.html'),
          surgery_1to5_type5: path.resolve(__dirname, 'surgery/1to5/type-5/index.html'),
          indemnity: path.resolve(__dirname, 'indemnity/index.html'),
          terms: path.resolve(__dirname, 'terms/index.html'),
          claim: path.resolve(__dirname, 'claim/index.html'),
          plannerGoods: path.resolve(__dirname, 'planner-goods/index.html'),
          dispute: path.resolve(__dirname, 'dispute/index.html'),
          ...disputeInputs,
          ...termsInputs,
          ...infoInputs,
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify - file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import { PRECEDENTS_DATA } from './src/data/disputeData';

export default defineConfig(() => {
  const disputeInputs: Record<string, string> = {};
  PRECEDENTS_DATA.forEach(item => {
    disputeInputs[`dispute_${item.id.replace(/[^a-zA-Z0-9]/g, '_')}`] = path.resolve(__dirname, `dispute/${item.id}/index.html`);
  });

  return {
    plugins: [react(), tailwindcss()],
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
          indemnity: path.resolve(__dirname, 'indemnity/index.html'),
          terms: path.resolve(__dirname, 'terms/index.html'),
          claim: path.resolve(__dirname, 'claim/index.html'),
          plannerGoods: path.resolve(__dirname, 'planner-goods/index.html'),
          dispute: path.resolve(__dirname, 'dispute/index.html'),
          ...disputeInputs,
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

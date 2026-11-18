import { defineConfig } from 'vite';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
const ROOT=fileURLToPath(new URL('.',import.meta.url));
export default defineConfig({
  base: '/3D-worlds/',
  build: {
    target: 'es2022', outDir: 'dist',
    rollupOptions: {input: {
      main: resolve(ROOT,'index.html'),
      assembly: resolve(ROOT,'assembly.html')
    }}
  },
  server: { host: '127.0.0.1' }
});

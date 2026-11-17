import { defineConfig } from 'vite';
export default defineConfig({
  base: '/3D-worlds/',
  build: { target: 'es2022', outDir: 'dist' },
  server: { host: '127.0.0.1' }
});

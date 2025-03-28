import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('./certificates/server.key'),
      cert: fs.readFileSync('./certificates/server.crt'),
    },
    proxy: {
      '/api': 'https://localhost:5000', // Ensuring secure API connection
    },
    port: 5173,
    host: 'localhost',
  },
  plugins: [react()],
});

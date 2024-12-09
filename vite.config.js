// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/arslanr369/Modern-UI-UX-SaaS-Website', // Optional: use this if hosting on GitHub Pages
});

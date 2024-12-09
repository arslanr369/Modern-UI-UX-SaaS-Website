export default defineConfig({
  plugins: [react()],
  base: "https://github.com/arslanr369/Modern-UI-UX-SaaS-Website",
  build: {
    rollupOptions: {
      input: "/index.html",
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
});

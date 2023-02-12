import { defineConfig } from 'vite';

export default defineConfig({
  base: '/antonjanzon95/Quiz/', // TODO - ändra till ditt repo-namn
  define: {
    'process.env': {},
  },
  build: {
    target: 'esnext',
  },
});

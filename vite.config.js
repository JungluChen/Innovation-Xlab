import { resolve } from 'path';

export default {
  base: './',
  build: {
    target: 'es2019',
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        documents: resolve(__dirname, 'documents.html'),
        poster: resolve(__dirname, 'poster-document.html'),
        report: resolve(__dirname, 'report-document.html'),
        slides: resolve(__dirname, 'slides-document.html'),
        video: resolve(__dirname, 'video-document.html'),
      },
    },
  },
};

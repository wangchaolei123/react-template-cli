import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import react from '@vitejs/plugin-react';
// @ts-ignore
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
  const env = loadEnv(mode.mode, process.cwd());
  const isProduction = mode.mode === 'production';

  return {
    plugins: [
      react(),
      isProduction &&
        viteCompression({
          verbose: true,
          disable: false,
          threshold: 10240,
          algorithm: 'gzip',
          ext: '.gz',
        }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      // @ts-ignore
      isProduction && visualizer(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        hashPrefix: 'prefix',
      },
    },
    server: {
      port: 8080,
      strictPort: false,
      open: true,
      proxy: {
        '/api': {
          target: '', // 后端接口
        },
      },
    },
    build: {
      outDir: 'dist',
      minify: 'esbuild',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  };
});

// FILE: vite.config.js

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import AutoImport from "unplugin-auto-import/vite";
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from "path";
import { fileURLToPath, URL } from "url";
import Components from 'unplugin-vue-components/vite'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    AutoImport({
      imports: ["vue", "@vueuse/head", "@vueuse/core"],
      dts: "src/auto-imports.d.ts",
      dirs: [],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: true, // enabled by default if `typescript` is installed
    }),
    quasar({
      sassVariables: "./quasar-variables.sass",
    }),
       // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
      name: 'Travel Book',
      short_name: 'Travel Book',
      description: 'My awesome Travel Book With Azulo',
      theme_color: '#ffffff',
      icons: [
        {
          src: './src/assets/images/logo.svg',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: './src/assets/images/logo.svg',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    watch: {
      usePolling: true
    }
  }
});

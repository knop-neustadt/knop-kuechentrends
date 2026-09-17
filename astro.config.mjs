import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Switzer",
      cssVariable: "--font-switzer",
      options: {
        variants: [
          {
            // Die normale variable TTF-Schrift
            src: ['./src/assets/fonts/Switzer-Variable.ttf'],
            weight: '100 900',
            style: 'normal'
          },
          {
            // Die variable Italic TTF-Schrift
            src: ['./src/assets/fonts/Switzer-VariableItalic.ttf'],
            weight: '100 900',
            style: 'italic'
          }
        ]
      }
    },

  ],


  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://knop-kuechentrends.de",
  integrations: [sitemap()],
});
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  fonts: [

    {
      provider: fontProviders.local(),
      name: "Alumni Sans",
      cssVariable: "--font-alumni",
      options: {
        variants: [
          {
            // Die normale variable TTF-Schrift
            src: ['./src/assets/fonts/AlumniSans-VariableFont_wght.ttf'],
            weight: '100 900',
            style: 'normal'
          },
          {
            // Die variable Italic TTF-Schrift
            src: ['./src/assets/fonts/AlumniSans-Italic-VariableFont_wght.ttf'],
            weight: '100 900',
            style: 'italic'
          }
        ]
      }
    },

    {
      provider: fontProviders.local(),
      name: "Manrope",
      cssVariable: "--font-manrope",
      options: {
        variants: [
          {
            // Die normale variable TTF-Schrift
            src: ['./src/assets/fonts/Manrope-VariableFont_wght.ttf'],
            weight: '200 800',
            style: 'normal'
          },
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
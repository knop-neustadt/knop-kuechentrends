import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  fonts: [
    // 1. Cousine (Static TTF: Regular, Italic, Bold, BoldItalic)
    {
      provider: fontProviders.local(),
      name: "Cousine",
      cssVariable: "--font-cousine",
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/Cousine-Regular.ttf'],
            weight: '400',
            style: 'normal'
          },
          {
            src: ['./src/assets/fonts/Cousine-Italic.ttf'],
            weight: '400',
            style: 'italic'
          },
          {
            src: ['./src/assets/fonts/Cousine-Bold.ttf'],
            weight: '700',
            style: 'normal'
          },
          {
            src: ['./src/assets/fonts/Cousine-BoldItalic.ttf'],
            weight: '700',
            style: 'italic'
          }
        ]
      }
    },
    // 2. Alumni Sans (Variable TTF mit Italic)
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
    }
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  site:"https://knop-kuechentrends.de",
  integrations: [sitemap()],
});
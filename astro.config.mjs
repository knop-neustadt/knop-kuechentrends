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
      name: "IBM Plex Mono",
      cssVariable: "--font-IBM",
      options: {
        variants: [
          { src: ['./src/assets/fonts/IBMPlexMono-Thin.ttf'], weight: 100, style: 'normal' },
          { src: ['./src/assets/fonts/IBMPlexMono-ExtraLight.ttf'], weight: 200, style: 'normal' },
          { src: ['./src/assets/fonts/IBMPlexMono-Light.ttf'], weight: 300, style: 'normal' },
          { src: ['./src/assets/fonts/IBMPlexMono-Regular.ttf'], weight: 400, style: 'normal' },
          { src: ['./src/assets/fonts/IBMPlexMono-Medium.ttf'], weight: 500, style: 'normal' },
          { src: ['./src/assets/fonts/IBMPlexMono-SemiBold.ttf'], weight: 600, style: 'normal' },
          { src: ['./src/assets/fonts/IBMPlexMono-Bold.ttf'], weight: 700, style: 'normal' },
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
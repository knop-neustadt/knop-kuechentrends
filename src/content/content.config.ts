import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const kueche = defineCollection({
  loader: glob({
    pattern: "*.{jpeg,jpg,png,webp}",
    base: "./src/assets/images/kueche/galerie",
  }),
});

const bad = defineCollection({
  loader: glob({
    pattern: "*.{jpeg,jpg,png,webp}",
    base: "./src/assets/images/bad/galerie",
  }),
});

export const collections = { kueche, bad };
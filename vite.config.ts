import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from "path";
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [svelte(),tailwindcss()],
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib")
    }
  }
})

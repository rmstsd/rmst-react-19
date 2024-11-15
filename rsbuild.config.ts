import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginLess } from '@rsbuild/plugin-less'

export default defineConfig({
  plugins: [pluginReact(), pluginLess()],
  html: {
    template: './public/index.html'
  },
  server: {
    port: 6788
  },
  dev: {
    hmr: false
  }
})

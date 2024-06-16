// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
  } from 'unocss'
  
  export default defineConfig({
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
        collections:{
          simple:()=>
            import('@iconify-json/simple-line-icons').then((i) => i.icons as any)
        }
      }),
      presetTypography(),
      presetWebFonts({
        fonts: {
          // ...
        },
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  })
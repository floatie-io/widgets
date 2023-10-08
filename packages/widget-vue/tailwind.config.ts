import type { Config } from 'tailwindcss'
import pluginTailwindForms from '@tailwindcss/forms'

export default {
  content: ['./src/noop.ts'],
  theme: {
    extend: {},
  },
  plugins: [pluginTailwindForms],
} satisfies Config

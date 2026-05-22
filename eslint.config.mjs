import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: ['.next/**', 'out/**', 'dist/**', 'node_modules/**'],
  },
]

export default eslintConfig

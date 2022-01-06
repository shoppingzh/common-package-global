import json from '@rollup/plugin-json'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    name: 'CommonPackageGlobal',
    format: 'umd'
  },
  plugins: [
    json()
  ]
}

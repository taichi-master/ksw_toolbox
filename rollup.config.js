import typescript from '@rollup/plugin-typescript' // needs tslib
import terser from '@rollup/plugin-terser'
// import { dts } from 'rollup-plugin-dts'

export default [
  {
    input: {
      'index': 'src/index.ts',
      'utils/index': 'src/utils/index.ts'
    },
    output: [
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].js',
        exports: 'auto',
        plugins: [ terser() ],
        sourcemap: true
      }
    ],
    plugins: [
      typescript( {
        exclude: [
        ],
        tsconfig: 'tsconfig.json'
      } )
    ],
    external: [
    ]
  }
]
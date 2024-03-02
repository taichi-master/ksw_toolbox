import typescript from "@rollup/plugin-typescript"  // needs tslib
import terser from '@rollup/plugin-terser'

export default [
  {
    input: {
        'index': 'src/index.ts',
        'utils/index': 'src/utils/index.ts',
        'utils/delay': 'src/utils/delay.ts',
        'utils/hello': 'src/utils/hello.ts'
    },
    output: [
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].js',
        exports: 'auto',
        plugins: [terser()],
        sourcemap: true
      }
    ],
    plugins: [
            typescript({
                tsconfig: 'tsconfig.json',
            })
        ],
        external: [
            'react',
            'react-dom'
        ]
    }
]
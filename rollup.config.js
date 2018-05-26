import babel from 'rollup-plugin-babel';
import pkg from './package.json';

// TODO fix dependencies
const external = ['react', 'react-native'];

export default [
  {
    input: 'src/main.js',
    plugins: [
      babel({
        exclude: 'node_modules/**', // only transpile our source code
        presets: [
          'flow',
          [
            'env',
            {
              modules: false,
            },
          ],
          'react',
        ],
        plugins: ['external-helpers', 'syntax-object-rest-spread'],
        babelrc: false,
      }),
    ],
    external: external.concat(Object.keys(pkg.dependencies)),
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
  },
];

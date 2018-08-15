import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

// TODO fix dependencies
const external = ['react', 'react-native'];

export default [
  {
    input: 'src/main.tsx',
    plugins: [
      typescript({
        // cacheRoot: `${os.tmpdir}/.rpt2_cache`,
        tsconfig: 'tsconfig.package.json',
      }),
    ],
    external: external.concat(Object.keys(pkg.dependencies)),
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
  },
];

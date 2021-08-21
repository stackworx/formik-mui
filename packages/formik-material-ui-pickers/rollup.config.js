import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const external = ['react', 'react-native', 'formik', '@material-ui/pickers'];

export default [
  {
    input: 'src/main.ts',
    plugins: [
      typescript({
        // cacheRoot: `${os.tmpdir}/.rpt2_cache`,
        tsconfig: 'tsconfig.package.json',
      }),
    ],
    external: external.concat(Object.keys(pkg.dependencies || [])),
    output: [
      { dir: './dist', format: 'cjs', sourcemap: true },
      { dir: './dist/esm', format: 'es', sourcemap: true, preserveModules: true, },
    ],
  },
];

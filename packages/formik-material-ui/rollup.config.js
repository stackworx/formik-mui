import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const external = [
  'react',
  'react-native',
  'formik',
  'tiny-warning',
  '@material-ui/core/TextField',
  '@material-ui/core/Switch',
  '@material-ui/core/Checkbox',
  '@material-ui/core/FormControlLabel',
  '@material-ui/core/Select',
  '@material-ui/core/FormControl',
  '@material-ui/core/InputLabel',
  '@material-ui/core/Input',
  '@material-ui/core/FormHelperText',
  '@material-ui/core/RadioGroup',
  '@material-ui/core/InputBase',
];

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
      { dir: './', format: 'cjs', sourcemap: true, preserveModules: true },
      { dir: './esm', format: 'es', sourcemap: true, preserveModules: true, },
    ],
  },
];

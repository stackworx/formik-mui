import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const external = [
  'react',
  'react-native',
  'formik',
  'tiny-warning',
  '@mui/material/Autocomplete',
  '@mui/material/Checkbox',
  '@mui/material/FormControl',
  '@mui/material/FormControlLabel',
  '@mui/material/FormHelperText',
  '@mui/material/Input',
  '@mui/material/InputBase',
  '@mui/material/InputLabel',
  '@mui/material/RadioGroup',
  '@mui/material/Select',
  '@mui/material/Switch',
  '@mui/material/TextField',
  '@mui/material/ToggleButtonGroup',
];

const config = [
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
      {
        dir: './dist/esm',
        format: 'es',
        sourcemap: true,
        preserveModules: true,
      },
    ],
  },
];

export default config;

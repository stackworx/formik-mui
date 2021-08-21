import typescript from 'rollup-plugin-typescript2';
import pkg from '../formik-material-ui-lab/package.json';

const external = [
  'react',
  'react-native',
  'formik',
  '@mui/lab/DatePicker',
  '@mui/lab/DateTimePicker',
  '@mui/lab/DesktopDatePicker',
  '@mui/lab/DesktopDateTimePicker',
  '@mui/lab/DesktopTimePicker',
  '@mui/lab/MobileDatePicker',
  '@mui/lab/MobileDateTimePicker',
  '@mui/lab/MobileTimePicker',
  '@mui/lab/StaticDatePicker',
  '@mui/lab/StaticDateTimePicker',
  '@mui/lab/StaticTimePicker',
  '@mui/lab/TimePicker',
  '@mui/material/TextField',
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
      { dir: './dist/esm', format: 'es', sourcemap: true, preserveModules: true, },
    ],
  },
];

export default config;

import typescript from 'rollup-plugin-typescript2';
import pkg from '../formik-mui-x-date-pickers/package.json';

const external = [
  'react',
  'react-native',
  'formik',
  '@mui/x-date-pickers/DatePicker',
  '@mui/x-date-pickers/DateTimePicker',
  '@mui/x-date-pickers/DesktopDatePicker',
  '@mui/x-date-pickers/DesktopDateTimePicker',
  '@mui/x-date-pickers/DesktopTimePicker',
  '@mui/x-date-pickers/MobileDatePicker',
  '@mui/x-date-pickers/MobileDateTimePicker',
  '@mui/x-date-pickers/MobileTimePicker',
  '@mui/x-date-pickers/StaticDatePicker',
  '@mui/x-date-pickers/StaticDateTimePicker',
  '@mui/x-date-pickers/StaticTimePicker',
  '@mui/x-date-pickers/TimePicker',
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

## Testing builds locally

```bash
# from the root of this workspace
yarn workspace @mercantile/formik-mui package
yarn workspace @mercantile/formik-mui-lab package
npm pack --workspace ./packages

# in your project's folder
npm i ../formik-mui/formik-mui-4.0.0.tgz
npm i ../formik-mui/formik-mui-lab-1.0.0.tgz
```

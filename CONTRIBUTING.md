## Testing builds locally

```bash
# from the root of this workspace
yarn workspace @mercantile/formik-material-ui package
yarn workspace @mercantile/formik-material-ui-lab package
npm pack --workspace ./packages

# in your project's folder
npm i ../formik-material-ui/formik-material-ui-4.0.0.tgz
npm i ../formik-material-ui/formik-material-ui-lab-1.0.0.tgz
```

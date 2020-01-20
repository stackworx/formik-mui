/**
 * https://github.com/mui-org/material-ui-pickers/issues/1074
 * Workaround for package failure
 */
declare module '@date-io/type' {
  export type DateType = Date;
}

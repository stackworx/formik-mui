import React from 'react';
import { WithStyles } from '@material-ui/core/styles';
declare const styles: () => Record<"root", import("@material-ui/core/styles/withStyles").CSSProperties>;
interface Props extends WithStyles<typeof styles> {
    values: any;
}
declare const _default: React.ComponentType<Pick<Props, "values"> & import("@material-ui/core/styles/withStyles").StyledComponentProps<"root">>;
export default _default;

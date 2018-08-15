import React from 'react';
import { WithStyles } from '@material-ui/core/styles';
declare const styles: () => {
    root: {
        padding: number;
        marginTop: number;
    };
};
interface Props extends WithStyles<typeof styles> {
    values: any;
}
declare const _default: React.ComponentType<import("@material-ui/core").Overwrite<Props, import("@material-ui/core/styles/withStyles").StyledComponentProps<"root">>>;
export default _default;

import React, { ReactNode } from 'react';
import { Theme, WithStyles } from '@material-ui/core/styles';
declare const styles: (theme: Theme) => {
    container: {
        display: string;
        flexWrap: "wrap";
    };
    textField: {
        marginLeft: number;
        marginRight: number;
        width: number;
    };
    menu: {
        width: number;
    };
};
interface Props extends WithStyles<typeof styles> {
    title: string;
    children: ReactNode;
}
declare const _default: React.ComponentType<import("@material-ui/core").Overwrite<Props, import("@material-ui/core/styles/withStyles").StyledComponentProps<"menu" | "container" | "textField">>>;
export default _default;

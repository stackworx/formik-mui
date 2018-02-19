/* @flow */
import { Component, createElement, type ComponentType } from 'react';
import type { FieldProps } from 'formik';
import { isStateLess } from './utils';

/**
 * Creates a component class that renders the given Material UI component
 *
 * @param MaterialUIComponent The material ui component to render
 * @param mapProps A mapping of props provided by formik to the props the Material UI
 * component needs
 */
export default function createComponent<P, T: ComponentType<P>>(
  MaterialUIComponent: T,
  mapProps: (props: FieldProps & P) => P
) {
  class InputComponent extends Component<FieldProps & P> {
    // eslint-disable-next-line react/sort-comp
    component: ?Component<P>;

    getRenderedComponent() {
      return this.component;
    }

    render() {
      return createElement(MaterialUIComponent, {
        ...mapProps(this.props),
        ref: !isStateLess(MaterialUIComponent)
          ? el => {
              this.component = el;
            }
          : null,
      });
    }
  }
  InputComponent.displayName = `FormikMaterialUI${MaterialUIComponent.name}`;
  return InputComponent;
}

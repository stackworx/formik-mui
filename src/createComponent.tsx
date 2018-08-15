import {
  Component,
  createElement,
  ComponentType,
  ReactElement,
  ReactNode,
} from 'react';
import { FieldProps } from 'formik';
import { isStateLess } from './utils';

/**
 * Creates a component class that renders the given Material UI component
 *
 * @param MaterialUIComponent The material ui component to render
 * @param mapProps A mapping of props provided by formik to the props the Material UI
 * component needs
 */
export default function createComponent<P>(
  MaterialUIComponent: ComponentType<P>,
  mapProps: (
    props: Readonly<{ children?: ReactNode }> & Readonly<P> & FieldProps
  ) => P
): ComponentType<P & FieldProps> {
  const result = class InputComponent extends Component<P & FieldProps> {
    static displayName = `FormikMaterialUI${MaterialUIComponent.name}`;
    component: ReactElement<P> | null = null;

    getRenderedComponent() {
      return this.component;
    }

    render() {
      return createElement<P>(
        MaterialUIComponent,
        Object.assign(
          {
            ref: !isStateLess(MaterialUIComponent)
              ? (el: ReactElement<any>) => {
                  this.component = el;
                }
              : null,
          },
          mapProps(this.props)
        )
      );
    }
  };

  return result;
}

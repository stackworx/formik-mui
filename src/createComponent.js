import { Component, createElement } from 'react';
import { isStateLess } from './utils';

/**
 * Creates a component class that renders the given Material UI component
 *
 * @param MaterialUIComponent The material ui component to render
 * @param mapProps A mapping of props provided by formik to the props the Material UI
 * component needs
 */
export default function createComponent(MaterialUIComponent, mapProps) {
  class InputComponent extends Component {
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

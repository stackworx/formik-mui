/* @flow */
import type { ComponentType } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const isStateLess = (Component: ComponentType<*>) =>
  // $FlowFixMe
  !Component.prototype.render;

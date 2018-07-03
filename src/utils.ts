import { ComponentType } from 'react';

export const isStateLess = (Component: ComponentType<any>) =>
  !Component.prototype.render;

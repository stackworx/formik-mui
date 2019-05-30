declare module '@storybook/addon-actions' {
  export function action(name: string): (...args: any[]) => any;
}

declare module '@storybook/react-native' {
  export function storiesOf(name: string, module: any): any;
}

declare module '@storybook/addon-knobs/react' {
  export function text(name: string, value: string): string;
  export function boolean(name: string, value: boolean): boolean;
  export function select(name: string, options: any, value: any): any;
  export function number(name: string, value: number, opts?: any): number;
  export function date(name: string, value?: Date): Date;
  export function withKnobs(): any;
}

declare module '@storybook/addon-storyshots' {
  export default function initStoryshots(): any;
}

declare module '@storybook/addon-actions' {
  export function action(name: string): (...args: any[]) => any;
}

import { ReactNode } from 'react';

export function createErrorHandler(
  fieldError: unknown,
  fieldName: string,
  setFieldError: (field: string, message: string) => void
) {
  return (error: ReactNode) => {
    if (error !== fieldError && error !== '') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore - https://github.com/jaredpalmer/formik/pull/2286
      setFieldError(fieldName, error ? String(error) : undefined);
    }
  };
}

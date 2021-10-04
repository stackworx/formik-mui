import { ReactNode } from 'react';

export function createErrorHandler(
  fieldError: unknown,
  fieldName: string,
  setFieldError: (field: string, message?: string) => void
) {
  return (error?: ReactNode) => {
    if (error !== fieldError && error !== '') {
      setFieldError(fieldName, error ? String(error) : undefined);
    }
  };
}

import * as React from 'react';
import { test } from '@jest/globals';
import { render, RenderOptions } from '@testing-library/react';
import { Formik, Form, FormikConfig } from 'formik';
import '@testing-library/jest-dom/extend-expect';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
interface Props extends Omit<FormikConfig<any>, 'render' | 'children'> {
  children?: React.ReactNode;
}

// Your test suite must contain at least one test.
/* eslint-disable-next-line no-undef */
test.skip('skip', () => {}); // eslint-disable-line @typescript-eslint/no-empty-function

function FormikWrapper({ children, ...config }: Props): React.ReactElement {
  return (
    <Formik {...config}>
      {({ submitForm, submitCount }) => {
        return (
          <Form data-testid="form">
            {children}
            {submitCount > 0 && <span>submitted</span>}
            <button data-testid="submit" onClick={submitForm}>
              submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

const customRender = (
  ui: React.ReactElement,
  formikOpts: Omit<Props, 'children'>,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, {
    wrapper: function CustomRendererWrapper(props) {
      return <FormikWrapper {...formikOpts} {...props} />;
    },
    ...options,
  });
};

export * from '@testing-library/react';

export { customRender as render };

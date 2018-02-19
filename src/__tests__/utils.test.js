/* @flow */
import React from 'react';

import { isStateLess } from '../utils';

const StatelessComponent = () => null;

// eslint-disable-next-line react/prefer-stateless-function
class StatefulComponent extends React.Component<{}> {
  render() {
    return null;
  }
}

test('stateless', () => {
  expect(isStateLess(StatelessComponent)).toBe(true);
});

test('statefull', () => {
  expect(isStateLess(StatefulComponent)).toBe(false);
});

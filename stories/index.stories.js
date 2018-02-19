import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import TextFieldStory from './TextFieldStory';
import KitchenSinkStory from './KitchenSinkStory';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Formik', module)
  .add('Text Field', () => <TextFieldStory />)
  .add('Kitchen Sink', () => <KitchenSinkStory />);

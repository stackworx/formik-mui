import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import TextFieldStory from './TextField.story';
import KitchenSinkStory from './KitchenSink.story';
import SelectorStory from './Selector.story';
import SelectStory from './Select.story';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Formik', module)
  .add('Text Field', () => <TextFieldStory />)
  .add('Selectors', () => <SelectorStory />)
  .add('Select', () => <SelectStory />)
  .add('Kitchen Sink', () => <KitchenSinkStory />);

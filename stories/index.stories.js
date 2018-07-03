import React from 'react';

import { storiesOf } from '@storybook/react';

import TextFieldStory from './TextField.story';
import KitchenSinkStory from './KitchenSink.story';
import SelectorStory from './Selector.story';
import SelectStory from './Select.story';
import SimpleFileUploadStory from './SimpleFileUpload.story';

storiesOf('Formik', module)
  .add('Text Field', () => <TextFieldStory />)
  .add('Selectors', () => <SelectorStory />)
  .add('Select', () => <SelectStory />)
  .add('Simple File Upload', () => <SimpleFileUploadStory />)
  .add('Kitchen Sink', () => <KitchenSinkStory />);

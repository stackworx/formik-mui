import React from 'react';

import { storiesOf } from '@storybook/react';

import TextFieldStory from './TextField.story';
import CheckboxStory from './Checkbox.story';
import InputBaseStory from './InputBase.story';
import KitchenSinkStory from './KitchenSink.story';
import SelectStory from './Select.story';
import SwitchesStory from './Switches.story';
import SimpleFileUploadStory from './SimpleFileUpload.story';
import RadioGroupStory from './RadioGroup.story.tsx';
import DatePickerStory from './DatePicker.story.tsx';
import TimePickerStory from './TimePicker.story.tsx';
import DateTimePickerStory from './DateTimePicker.story.tsx';
import ToggleButtonGroupStory from './lab/ToggleButtonGroup.story';
import AutocompleteStory from './lab/Autocomplete.story';

storiesOf('Formik', module)
  .add('Text Field', () => <TextFieldStory />)
  .add('Input Base', () => <InputBaseStory />)
  .add('Radio Group', () => <RadioGroupStory />)
  .add('Select', () => <SelectStory />)
  .add('Checkbox', () => <CheckboxStory />)
  .add('Switches', () => <SwitchesStory />)
  .add('Simple File Upload', () => <SimpleFileUploadStory />)
  .add('Toggle Button Group', () => <ToggleButtonGroupStory />)
  .add('Autocomplete', () => <AutocompleteStory />)
  .add('Kitchen Sink', () => <KitchenSinkStory />)
  .add('Date Picker', () => <DatePickerStory />)
  .add('Time Picker', () => <TimePickerStory />)
  .add('Date and Time Picker', () => <DateTimePickerStory />);

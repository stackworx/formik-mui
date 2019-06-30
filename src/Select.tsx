import * as React from 'react';
import MuiSelect, {
  SelectProps as MuiSelectProps,
} from '@material-ui/core/Select';
import { FieldProps } from 'formik';
import { Omit } from './types';

export interface SelectProps
  extends FieldProps,
    Omit<MuiSelectProps, 'value'> {}

export const fieldToSelect = ({
  field,
  form: { isSubmitting, setFieldValue },
  disabled = false,
  ...props
}: SelectProps): MuiSelectProps => {
  const onChange = React.useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      // Special case for multiple and native
      if (props.multiple && props.native) {
        const { options } = event.target as HTMLSelectElement;
        const value: string[] = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }

        setFieldValue(field.name, value);
      } else {
        field.onChange(event);
      }
    },
    [field.name, props.multiple, props.native]
  );

  return {
    disabled: isSubmitting || disabled,
    ...props,
    ...field,
    onChange,
  };
};

export const Select: React.ComponentType<SelectProps> = (
  props: SelectProps
) => <MuiSelect {...fieldToSelect(props)} />;

Select.displayName = 'FormikMaterialUISelect';

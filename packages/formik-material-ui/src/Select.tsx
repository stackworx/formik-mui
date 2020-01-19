import * as React from 'react';
import MuiSelect, {
  SelectProps as MuiSelectProps,
} from '@material-ui/core/Select';
import { useField, useFormikContext } from 'formik';

export interface SelectProps extends Omit<MuiSelectProps, 'value'> {
  name: string;
}

export const useFieldToSelect = ({
  disabled,
  name,
  ...props
}: SelectProps): MuiSelectProps => {
  const { isSubmitting } = useFormikContext();
  const [field, , helpers] = useField(name);

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

        helpers.setValue(value);
      } else {
        field.onChange(event);
      }
    },
    [field.name, props.multiple, props.native]
  );

  return {
    disabled: disabled ?? isSubmitting,
    ...props,
    ...field,
    onChange,
  };
};

export const Select: React.ComponentType<SelectProps> = (
  props: SelectProps
) => <MuiSelect {...useFieldToSelect(props)} />;

Select.displayName = 'FormikMaterialUISelect';

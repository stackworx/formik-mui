import * as React from 'react';
import MuiSelect, {
  SelectProps as MuiSelectProps,
} from '@material-ui/core/Select';
import {
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
  useField,
  useFormikContext,
} from 'formik';

export interface SelectProps extends Omit<MuiSelectProps, 'name' | 'value'> {
  name: string;
}

export function useFieldToSelect<Val = unknown>(
  { disabled, name, ...props }: SelectProps,
  customize?: (
    props: [FieldInputProps<Val>, FieldMetaProps<Val>, FieldHelperProps<Val>]
  ) => Partial<Omit<SelectProps, 'name'>>
): MuiSelectProps {
  const { isSubmitting } = useFormikContext();
  const fieldProps = useField(name);

  const [field, , helpers] = fieldProps;

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
    ...customize?.(fieldProps),
  };
}

export function Select(props: SelectProps) {
  return <MuiSelect {...useFieldToSelect(props)} />;
}

Select.displayName = 'FormikMaterialUISelect';

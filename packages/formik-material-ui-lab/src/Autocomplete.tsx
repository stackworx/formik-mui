import * as React from 'react';
import MuiAutocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
  AutocompleteChangeReason,
  AutocompleteChangeDetails,
} from '@material-ui/lab/Autocomplete';
import { FieldProps } from 'formik';
import invariant from 'tiny-warning';
import type { Value } from '@material-ui/lab/useAutocomplete';

export { AutocompleteRenderInputParams } from '@material-ui/lab/Autocomplete';

export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>
  extends FieldProps,
    Omit<
      MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
      'name' | 'value' | 'defaultValue'
    > {
  type?: string;
}

export function fieldToAutocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>({
  disabled,
  field,
  form: { isSubmitting, setFieldValue },
  type,
  onChange,
  onBlur,
  ...props
}: AutocompleteProps<
  T,
  Multiple,
  DisableClearable,
  FreeSolo
>): MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  if (process.env.NODE_ENV !== 'production') {
    if (props.multiple) {
      invariant(
        Array.isArray(field.value),
        `value for ${field.name} is not an array, this can caused unexpected behaviour`
      );
    }
  }

  const {
    onChange: _onChange,
    onBlur: _onBlur,
    multiple: _multiple,
    ...fieldSubselection
  } = field;

  return {
    onBlur: onBlur
      ? onBlur
      : (event: React.FocusEvent<unknown>) => {
          field.onBlur(event ?? field.name);
        },
    onChange: onChange
      ? onChange
      : (
          _event: React.ChangeEvent<{}>,
          value: Value<T, Multiple, DisableClearable, FreeSolo>,
          _reason: AutocompleteChangeReason,
          _details?: AutocompleteChangeDetails<T>
        ) => {
          setFieldValue(field.name, value);
        },
    disabled: disabled ?? isSubmitting,
    loading: isSubmitting,
    ...fieldSubselection,
    ...props,
  };
}

export function Autocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>(props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  return <MuiAutocomplete {...fieldToAutocomplete(props)} />;
}

Autocomplete.displayName = 'FormikMaterialUIAutocomplete';

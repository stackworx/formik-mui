---
id: faq
title: FAQ
---

## Why can't I pass in `name`, `value`, `error` etc into my component?

This is to prevent there being 2 sources of truth for value

For Example

```jsx
function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null');

  return (
    <TextField
      name="email"
      type="email"
      label="Email"
      value={email}
      error={error}
      disabled={isSubmitting}
    />
  );
}
```

From this code is not at all obvious who is in control of the state. Therefore we purposefully hand over all control (`name, value, onChange, onBlur`) to formik. This ensures that there is no confusion.

But you can do this a custom field

```jsx
import MuiTextField from '@material-ui/core/TextField';
import {useFieldToTextField, TextField, TextFieldProps} from 'formik-material-ui';

const UppercasingTextField = (props: TextFieldProps) => {
  const customize = React.useCallback(([,,helpers]) => {
    return {
      onChange: event => {
          const {value} = event.target;
          helpers.setValue(value ? value.toUpperCase() : '')
        }
    }
  }, []);

  const fieldProps = useFieldToTextField(props, customize);
  return <MuiTextField {...fieldProps}/>;
```

## Why does this library not work with `Field`?

After using formik with Material-UI in several projects I felt the `Field` wrapper was just extra noise.
Also in some cases it interfered with typescript autocompletion especially with the TextField union types.

## Why does a wrapper for component x not exist?

Some components require many decisions to be made which would make then only work for some situations.
A good example is the slider. Should the onChange event be fired while dragging or only when the thumb is dropped? This will depend on your use-case.

## Why does the field auto disable during submission?

This is a convenience meant for the standard form. If this was omitted the isSubmitting property would have to be manually passed into every single field

For Example:

```jsx {8}
<Formik>
  {({ isSubmitting }) => (
    <Form>
      <TextField
        name="email"
        type="email"
        label="Email"
        disabled={isSubmitting}
      />
    </Form>
  )}
</Formik>
```

A common scenario where this is problematic is where using Formik for search. Here we never want the field to be disabled. This can be accomplished by setting disabled to always be false

```jsx {8}
<Formik>
  {({ isSubmitting }) => (
    <Form>
      <TextField name="email" type="email" label="Email" disabled={false} />
    </Form>
  )}
</Formik>
```

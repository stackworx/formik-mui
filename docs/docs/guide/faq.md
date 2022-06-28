---
id: faq
title: FAQ
---

## Why can't I pass in `name`, `value`, `error` etc. into my component?

To prevent 2 sources of truth for values. For example:

```jsx
function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  return (
    <Field
      component={TextField}
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

From this code it is not obvious at all who is in control of the state. Therefore, we purposefully hand over all control (`name`, `value`, `onChange`, `onBlur`) to Formik. This ensures there is no confusion. You can do this to a custom field:

```jsx
import TextField from '@mui/material/TextField';
import { Field } from 'formik';
import { fieldToTextField, TextFieldProps } from 'formik-mui';

function UpperCasingTextField(props: TextFieldProps) {
  const {
    form: { setFieldValue },
    field: { name },
  } = props;
  const onChange = React.useCallback(
    (event) => {
      const { value } = event.target;
      setFieldValue(name, value ? value.toUpperCase() : '');
    },
    [setFieldValue, name]
  );
  return <TextField {...fieldToTextField(props)} onChange={onChange} />;
}
```

## Why does a wrapper for a certain component not exist?

Some components require many decisions to be made which would only make it work in some situations.
A good example is the `slider`. Should the `onChange` event be fired while dragging or only when it's dropped? It depends on your use-case.

## Why do the fields become disabled during submission?

This is a convenience meant for the standard form. If this was omitted the `isSubmitting` property would have to be manually passed into every single field like this:

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

A common scenario where this is problematic is when we use Formik for search. Here we never want the field to be disabled. This can be accomplished by setting disabled to `false`.

```jsx {4}
<Formik>
  {({ isSubmitting }) => (
    <Form>
      <TextField name="email" type="email" label="Email" disabled={false} />
    </Form>
  )}
</Formik>
```

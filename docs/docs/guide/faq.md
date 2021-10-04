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

From this code is not at all obvious who is in control of the state. Therefore we purposefully hand over all control (`name, value, onChange, onBlur`) to formik. This ensures that there is no confusion.

But you can do this a custom field

```jsx
import MuiTextField from '@material-ui/core/TextField';
import { Field } from 'formik';
import { fieldToTextField, TextFieldProps } from 'formik-material-ui';

function UpperCasingTextField(props: TextFieldProps) {
  const {
    form: { setFieldValue },
    field: { name },
  } = props;
  const onChange = React.useCallback(
    event => {
      const { value } = event.target;
      setFieldValue(name, value ? value.toUpperCase() : '');
    },
    [setFieldValue, name]
  );
  return <MuiTextField {...fieldToTextField(props)} onChange={onChange} />;
}
```

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

## Validation Errors Missing from Select

The following code will not render any validation errors

```jsx
<Field component={Select} type="text" name="tags" multiple={true}>
  <MenuItem value="dogs">Dogs</MenuItem>
  <MenuItem value="cats">Cats</MenuItem>
  <MenuItem value="rats">Rats</MenuItem>
  <MenuItem value="snakes">Snakes</MenuItem>
</Field>
```

This is because the [Select](https://material-ui.com/api/select/) does not actually have a `error` prop.

There are 2 ways to fix this

### Use a Text field of type Select

```jsx
<Field
  component={Text}
  type="text"
  name="tags"
  select={true}
  SelectProps={{
    multiple: true,
  }}
>
  <MenuItem value="dogs">Dogs</MenuItem>
  <MenuItem value="cats">Cats</MenuItem>
  <MenuItem value="rats">Rats</MenuItem>
  <MenuItem value="snakes">Snakes</MenuItem>
</Field>
```

### Manually bind the error

```jsx
import { ErrorMessage } from 'formik';

<Field component={Select} type="text" name="tags" multiple={true}>
  <MenuItem value="dogs">Dogs</MenuItem>
  <MenuItem value="cats">Cats</MenuItem>
  <MenuItem value="rats">Rats</MenuItem>
  <MenuItem value="snakes">Snakes</MenuItem>
</Field>
<ErrorMessage name="tags" />
```

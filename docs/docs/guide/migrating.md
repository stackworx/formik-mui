---
id: migrating
title: Migrating
---

## Migrating from formik-mui 1.0.0

### Standard Components

### Changes

- `type=checkbox` recommended for Switches and Checkboxes - See [here](https://jaredpalmer.com/formik/docs/migrating-v2#checkboxes-and-select-multiple)

#### Before

```jsx
import { Field } from 'formik';
import { Checkbox, Switch } from 'formik-mui';

<Field name="checkbox" component={Checkbox} />;
<Field name="switch" component={Switch} />;
```

- Rename fieldToTextField to useFieldToTextField

#### After

```jsx
import { Field } from 'formik';
import { Checkbox, Switch } from 'formik-mui';

import {
  // Field Helpers
  useField,
  // Form Helpers
  useFormik,
} from 'formik';

<Field name="checkbox" type="checkbox" component={Checkbox} />;
<Field name="switch" type="checkbox" component={Switch} />;
```

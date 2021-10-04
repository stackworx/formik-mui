import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import { action } from '@storybook/addon-actions';
import { createStyles, withStyles, Theme, WithStyles } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import Wrapper from './Wrapper';
import FormValues from './FormValues';
import { Select } from '../packages/formik-material-ui/src/main';

const styles = ({ spacing }: Theme) =>
  createStyles({
    formControl: {
      margin: spacing(1),
      minWidth: 120,
    },
  });

interface Values {
  age: string;
  pets: string[];
}

export default withStyles(styles)(({ classes }: WithStyles<typeof styles>) => {
  return (
    <Wrapper title="Select">
      <Formik<Values>
        initialValues={{ age: '', pets: [] }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            action('submit')(values);
          }, 2000);
        }}
      >
        {({ submitForm, values }) => (
          <Form>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Age</InputLabel>
              <Field
                component={Select}
                name="age"
                inputProps={{
                  id: 'age-simple',
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Field>
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple-empty" shrink>
                Age (Empty)
              </InputLabel>
              <Field
                component={Select}
                name="age"
                displayEmpty
                inputProps={{
                  id: 'age-simple-empty',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Field>
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-native">
                Native Age
              </InputLabel>
              <Field
                component={Select}
                name="age"
                native
                inputProps={{
                  id: 'age-native',
                }}
              >
                <option value="">None</option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Field>
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="pets">Pets</InputLabel>
              <Field
                component={Select}
                name="pets"
                multiple={true}
                inputProps={{
                  name: 'pets',
                  id: 'pets',
                }}
              >
                <MenuItem value="dogs">Dogs</MenuItem>
                <MenuItem value="cats">Cats</MenuItem>
                <MenuItem value="rats">Rats</MenuItem>
                <MenuItem value="snakes">Snakes</MenuItem>
              </Field>
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="pets-native">
                Native Pets
              </InputLabel>
              <Field
                component={Select}
                name="pets"
                native={true}
                multiple={true}
                inputProps={{
                  id: 'pets-native',
                }}
              >
                <option value="dogs">Dogs</option>
                <option value="cats">Cats</option>
                <option value="rats">Rats</option>
                <option value="snakes">Snakes</option>
              </Field>
            </FormControl>
            <br />
            <Button variant="contained" color="primary" onClick={submitForm}>
              Submit
            </Button>
            <br />
            <FormValues values={values} />
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
});

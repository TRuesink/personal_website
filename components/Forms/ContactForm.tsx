import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Stack, TextField } from '@mui/material';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup.string().required('Name is required'),
  message: yup.string().required('Message is required'),
});

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      name: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack gap={3}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          maxRows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Contact
        </Button>
      </Stack>
    </form>
  );
};

export default ContactForm;

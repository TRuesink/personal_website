import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Link, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { CheckCircleOutline } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup.string().required('Name is required'),
  message: yup.string().required('Message is required'),
});

const ContactForm = () => {
  const [showForm, setShowForm] = React.useState(true);
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post('/api/form', values);
        setShowForm(false);
        resetForm();
        // eslint-disable-next-line no-empty
      } catch (error) {}
    },
  });

  if (showForm) {
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
            disabled={formik.isSubmitting}
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
            disabled={formik.isSubmitting}
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
            disabled={formik.isSubmitting}
          />
          <LoadingButton
            disabled={formik.isSubmitting}
            loading={formik.isSubmitting}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Contact
          </LoadingButton>
        </Stack>
      </form>
    );
  } else {
    return (
      <Box>
        <Box sx={{ display: 'flex', fontSize: '2rem', alignItems: 'center' }}>
          <CheckCircleOutline fontSize="inherit" />
          <Typography fontSize="inherit">Thanks!</Typography>
        </Box>
        <Typography sx={{ marginTop: '1rem', marginBottom: '2rem' }}>
          Your message has been sent.
        </Typography>
        <Link component="button" onClick={() => setShowForm(true)}>
          Submit another message
        </Link>
      </Box>
    );
  }
};
  

export default ContactForm;

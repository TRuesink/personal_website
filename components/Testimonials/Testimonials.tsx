import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { TESTIMONIALS } from '../../constants';
import TestimonialCard from './TestimonialCard';

type TestimonialsProps = {
  title?: string;
};

const Testimonials = ({ title }: TestimonialsProps) => {
  return (
    <Box
      minHeight="inherit"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {title !== undefined && (
        <Box sx={{ marginBottom: '1rem' }}>
          <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
            {title}
          </Typography>
          <Divider variant="middle" />
        </Box>
      )}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        columnGap={4}
        paddingTop="3rem"
        paddingBottom="3rem"
      >
        {TESTIMONIALS.map((testimonial) => (
          <Grid item xs={3}>
            <TestimonialCard testimonial={testimonial} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;

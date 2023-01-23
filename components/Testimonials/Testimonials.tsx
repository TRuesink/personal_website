import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import TestimonialCard from './TestimonialCard';

type TestimonialsProps = {
  title?: string;
  testimonials: {
    name: string;
    quote: string;
    date: string;
    rating: number;
  }[];
};

const Testimonials = ({ title, testimonials }: TestimonialsProps) => {
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
        gap={4}
        paddingTop="3rem"
        paddingBottom="3rem"
      >
        {testimonials.map((testimonial) => (
          <Grid item xs={10} md={3} key={testimonial.name}>
            <TestimonialCard testimonial={testimonial} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;

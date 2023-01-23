import { Star } from '@mui/icons-material';
import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';

type TestimonialCardProps = {
  testimonial: {
    name?: string;
    quote?: string;
    date?: string;
    rating: number;
  };
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const renderRatingIcons = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < testimonial.rating) {
        stars.push(<Star sx={{ color: 'secondary.main' }} />);
      } else {
        stars.push(<Star sx={{ color: 'lightgrey' }} />);
      }
    }
    return stars;
  };

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h6">{testimonial.name}</Typography>
        <Typography variant="body2">{testimonial.date}</Typography>
        <Box>{renderRatingIcons()}</Box>
        <Typography variant="caption">"{testimonial.quote}"</Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

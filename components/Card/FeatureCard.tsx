import { Card, CardContent, SvgIcon, Typography } from '@mui/material';
import React from 'react';

type FeatureCardType = {
  icon: React.ReactElement;
  title: string;
  content: string;
  key: string;
};

const FeatureCard = ({ icon, title, content, key }: FeatureCardType) => {
  return (
    <Card
      sx={{ height: 'fit-content', minWidth: 275, maxWidth: 400 }}
      key={key}
    >
      <CardContent>
        <SvgIcon sx={{ fontSize: '3rem', color: 'primary.light' }}>
          {icon}
        </SvgIcon>
        <Typography fontWeight="bold" variant="h6" sx={{ margin: '1rem 0' }}>
          {title}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;

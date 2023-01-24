import { Box, Divider, Grid, SvgIcon, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import CustomLink from '../Links/CustomLink';

type Feature = {
  icon: React.ReactElement;
  title: string;
  href: string;
  content: string;
};

type Features1Props = {
  features: Feature[];
  title: string | undefined;
  iconSize: number;
  iconColor: string;
  textAlign: 'right' | 'left' | 'center';
  clickable: boolean | undefined;
};

import styles from './Features.module.css';

const Features1 = ({
  features,
  title,
  iconSize,
  iconColor,
  textAlign,
  clickable,
}: Features1Props) => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const bgBoxStyle = {
    textAlign: textAlign,
    top: 0,
    left: textAlign === 'left' ? 0 : textAlign === 'center' ? '50%' : 'unset',
    right: textAlign === 'right' ? 0 : 'unset',
    transform: textAlign === 'center' ? 'translate(-50%, 0)' : 'unset',
  };

  const handleExpand = (feature: string) => {
    setHoveredFeature(feature);
  };

  const handleCollapse = () => {
    setHoveredFeature(null);
  };

  const renderFeature = (feature: Feature) => {
    return (
      <Box
        sx={{ position: 'relative', zIndex: 10 }}
        onMouseLeave={() => handleCollapse()}
      >
        <SvgIcon
          sx={{
            fontSize: `${iconSize}rem`,
            color: 'inherit',
          }}
          onMouseEnter={() => handleExpand(feature.title)}
        >
          {feature.icon}
        </SvgIcon>
        <Typography variant="h6" fontWeight="bold">
          {feature.title}
        </Typography>
        <Typography>{feature.content}</Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        minHeight: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '3rem',
        paddingBottom: '3rem',
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
        alignItems="center"
        rowSpacing={5}
        columnSpacing={2}
        paddingTop="3rem"
        paddingBottom="3rem"
      >
        {features.map((feature) => (
          <Grid item xs={11} sm={9} md={4} key={feature.title}>
            <Box
              sx={{
                position: 'relative',
                padding: '0.5rem',
                textAlign: textAlign,
              }}
            >
              <Box
                className={`${styles.BackgroundBox} ${
                  hoveredFeature === feature.title
                    ? styles.BackgroundBoxHover
                    : ''
                }`}
                sx={{
                  backgroundColor: 'primary.light',
                  opacity: 1,
                  height: `${iconSize + 1}rem`,
                  width: `${iconSize + 1}rem`,
                  ...bgBoxStyle,
                }}
              />
              {clickable ? (
                <CustomLink
                  href={feature.href}
                  textDecoration="none"
                  color={iconColor}
                >
                  {renderFeature(feature)}
                </CustomLink>
              ) : (
                renderFeature(feature)
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features1;

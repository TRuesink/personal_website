import { Box, Divider, Grid, SvgIcon, Typography } from '@mui/material';
import Link from 'next/link';

type Features1Props = {
  features: {
    icon: React.ReactElement;
    title: string;
    href: string;
    content: string;
  }[];
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
  const bgBoxStyle = {
    textAlign: textAlign,
    top: 0,
    left: textAlign === 'left' ? 0 : textAlign === 'center' ? '50%' : 'unset',
    right: textAlign === 'right' ? 0 : 'unset',
    transform: textAlign === 'center' ? 'translate(-50%, 0)' : 'unset',
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
              {clickable ? (
                <Link href={feature.href} passHref>
                  <Box
                    className={`${styles.BackgroundBox} ${styles.BackgroundBoxClickable}`}
                    sx={{
                      backgroundColor: 'primary.light',
                      height: `${iconSize + 1}rem`,
                      width: `${iconSize + 1}rem`,
                      ...bgBoxStyle,
                    }}
                  />
                </Link>
              ) : (
                <Box
                  className={styles.BackgroundBox}
                  sx={{
                    backgroundColor: 'primary.light',
                    height: `${iconSize + 1}rem`,
                    width: `${iconSize + 1}rem`,
                    ...bgBoxStyle,
                  }}
                />
              )}
              <SvgIcon
                sx={{
                  fontSize: `${iconSize}rem`,
                  color: iconColor,
                }}
              >
                {feature.icon}
              </SvgIcon>
              <Typography variant="h6" fontWeight="bold">
                {feature.title}
              </Typography>
              <Typography>{feature.content}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features1;

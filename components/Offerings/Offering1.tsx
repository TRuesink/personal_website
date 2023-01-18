import { Box, Divider, Grid, Typography } from '@mui/material';
import Background1, { Background1Props } from '../Backgrounds/Background1';

type Offering1Props = Omit<Background1Props, 'children'> & {
  features: { icon: React.ReactElement; title: string; content: string }[];
  title: string | undefined;
};

import styles from './Features.module.css';

const Offering1 = ({
  backgroundColor,
  textColor,
  height,
  features,
  title,
}: Offering1Props) => {
  return (
    <Background1
      backgroundColor={backgroundColor}
      textColor={textColor}
      height={height}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        minHeight="inherit"
        rowSpacing={5}
        columnSpacing={2}
        paddingTop="3rem"
        paddingBottom="3rem"
      >
        {title !== undefined && (
          <Grid item xs={12} display="flex" justifyContent="center">
            <Box sx={{ width: 'fit-content', textAlign: 'center' }}>
              <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
                {title}
              </Typography>
              <Divider variant="middle" />
            </Box>
          </Grid>
        )}
        {features.map((feature) => (
          <Grid item xs={11} sm={9} md={4}>
            <Box sx={{ position: 'relative', padding: '1rem' }}>
              <Box
                className={styles.BackgroundBox}
                sx={{
                  backgroundColor: 'primary.light',
                }}
              />
              <Box
                sx={{
                  color: 'primary.text',
                }}
              >
                {feature.icon}
              </Box>
              <Typography variant="h6" fontWeight="bold">
                {feature.title}
              </Typography>
              <Typography>{feature.content}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Background1>
  );
};

export default Offering1;

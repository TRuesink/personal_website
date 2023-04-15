import { createTheme } from '@mui/material/styles';
import { blueGrey, deepOrange } from '@mui/material/colors';
import { Source_Sans_Pro } from '@next/font/google';
import ButtonLink from '../components/Links/ButtonLink';

const mainFont = Source_Sans_Pro({ weight: '400', subsets: ['latin'] });

const mainColor = blueGrey;
const secondaryColor = deepOrange;
const textColor = blueGrey;

export const theme = createTheme({
  palette: {
    primary: {
      main: mainColor[800],
      light: mainColor[600],
      contrastText: '#ffffff',
    },
    secondary: {
      main: secondaryColor[200],
      contrastText: textColor[900],
    },
  },
  typography: {
    fontFamily: mainFont.style.fontFamily,
    button: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: ButtonLink,
      },
    },
  },
});

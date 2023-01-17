import { createTheme } from '@mui/material/styles';
import { yellow, blueGrey, pink } from '@mui/material/colors';
import { Montserrat } from '@next/font/google';
import ButtonLink from '../components/Links/ButtonLink';

const mainFont = Montserrat({ subsets: ['latin'] });

const mainColor = pink;
const secondaryColor = yellow;
const textColor = blueGrey;

export const theme = createTheme({
  palette: {
    primary: {
      main: mainColor[900],
      contrastText: '#ffffff',
    },
    secondary: {
      main: secondaryColor[600],
      contrastText: textColor[900],
    },
  },
  typography: {
    fontFamily: mainFont.style.fontFamily,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: ButtonLink,
      },
    },
  },
});

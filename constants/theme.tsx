import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { Montserrat } from '@next/font/google';
import ButtonLink from '../components/Links/ButtonLink';

const mainFont = Montserrat({ subsets: ['latin'] });

const mainColor = blue[800];

export const theme = createTheme({
  palette: {
    primary: {
      main: mainColor,
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: mainColor,
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

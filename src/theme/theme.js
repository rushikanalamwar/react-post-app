import { createTheme } from '@material-ui/core/styles';

export default createTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      light: '#F79A9A',
      main: '#f43d4b;',
      dark: '#F73838',
      A100: '#000',
      contrastText: '#fff',
    }
  }
});

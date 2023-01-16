import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#4C1D94',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    purple: {900: '#4C1D94'},
  },
});

console.log(theme);

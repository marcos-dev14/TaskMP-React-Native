import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      700: '#DC1637',
      500: '#F05C75',
    },
    secondary: {
      700: '#E3E3E3',
    },
    green: {
      700: '#00875F',
      500: '#00B37E',
      300: '#04D361',
    },
    title: {
      700: '#5F5F5F',
      500: '#2F2E41',
    },
    textGray: {
      700:'#7A7A80',
      500: '#898A8D'
    },
    textSecondary: {
      700: '#5F5F5F'
    },
    textPlaceholder: {
      500: '#AEAEB3'
    },
    white: '#FFFFFF'
  },
  fontConfig: {
    Archivo: {
      400: {
        normal: 'Archivo_400Regular',
      },
      500: {
        normal: 'Archivo_500Medium',
      },
      700: {
        normal: 'Archivo_700Bold',
      },
    },
    DancingScript: {
      400: {
        normal: 'DancingScript_400Regular',
      },
      700: {
        normal: 'DancingScript_700Bold',
      },
    },
  },

  fonts: {
    heading: 'DancingScript',
    body: 'Archivo'
  },
  // fontSizes: {
  //   xs: 12,
  //   sm: 14,
  //   md: 16,
  //   lg: 20,
  // },
  // sizes: {
  //   14: 56
  // }
});
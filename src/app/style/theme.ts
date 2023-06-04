import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { Styles } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles: Styles = {
  global: {
    html: {
      height: 'full',
    },
    '#root': {
      minHeight: 'full',
    },
    body: {
      height: 'full',
      width: 'full',
      bg: 'bg',
      WebkitTapHighlightColor: 'transparent',
      fontFamily: `'Montserrat', sans-serif`,
    },
    '::selection': {
      bg: 'green.100',
    },
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&::-webkit-scrollbar-track': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'gray.200',
      borderRadius: '24px',
    },
  },
};

const shadows = {
  outline: '0 0 0 3px rgba(232,52,69,0.4)',
};

export const theme = extendTheme({
  config,
  styles,
  shadows,
});

'use client';

import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'public/styles/globalStyles';
import theme from 'public/styles/theme';

export const ThemeContext: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

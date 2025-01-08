'use client';

import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'components/contexts/ThemeContext/globalStyles';
import theme from 'components/contexts/ThemeContext/theme';

export const ThemeContext: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

'use client';

import { FC, PropsWithChildren, useState } from 'react';
import { ThemeContext } from 'components/contexts/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { StyledComponentsRegistry } from 'components/shared/molecules/StyledComponentsRegistry';

export const ClientLogicLayout: FC<PropsWithChildren> = ({ children }) => {
  const [client] = useState(() => new QueryClient());

  return (
    <StyledComponentsRegistry>
      <ThemeContext>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </ThemeContext>
    </StyledComponentsRegistry>
  );
};

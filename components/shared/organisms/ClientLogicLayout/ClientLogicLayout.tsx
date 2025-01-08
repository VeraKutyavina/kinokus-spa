'use client';

import { FC, PropsWithChildren, useState } from 'react';
import { ThemeContext } from 'components/contexts/ThemeContext/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const ClientLogicLayout: FC<PropsWithChildren> = ({ children }) => {
  const [client] = useState(() => new QueryClient());

  return (
    <ThemeContext>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </ThemeContext>
  );
};

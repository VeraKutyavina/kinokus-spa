import { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { ClientLogicLayout } from 'components/shared/organisms/ClientLogicLayout/ClientLogicLayout';

export const metadata: Metadata = {
  title: 'Кинокусь',
  description: 'Кинокусь - Добро пожаловать!',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <ClientLogicLayout>{children}</ClientLogicLayout>
      </body>
    </html>
  );
};

export default RootLayout;

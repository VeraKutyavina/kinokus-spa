import { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { ThemeContext } from 'components/shared/contexts/ThemeContext/ThemeContext';

export const metadata: Metadata = {
  title: 'Кинокусь',
  description: 'Кинокусь - Добро пожаловать!',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <ThemeContext>{children}</ThemeContext>;
      </body>
    </html>
  );
};

export default RootLayout;

import { FC, PropsWithChildren } from 'react';

import { MainTemplateWrapper } from './styled';

export const MainTemplate: FC<PropsWithChildren> = ({ children }) => {
  return <MainTemplateWrapper>{children}</MainTemplateWrapper>;
};

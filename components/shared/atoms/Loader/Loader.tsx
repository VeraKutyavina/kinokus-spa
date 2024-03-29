import { FC } from 'react';

import { LoaderWrapper, Spinner } from './styled';
import { TLoader } from './types';
import { sizeConfig } from './config';

const Loader: FC<TLoader> = ({
  variant = 'default',
  testId,
  wrapperSize = sizeConfig[variant],
  size = sizeConfig[variant].spinner,
  color,
  ...props
}) => {
  return (
    <LoaderWrapper data-testid={testId} size={wrapperSize}>
      <Spinner $size={size} $color={color} {...props}>
        <div />
        <div />
        <div />
        <div />
      </Spinner>
    </LoaderWrapper>
  );
};

export default Loader;

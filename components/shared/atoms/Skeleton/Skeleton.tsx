import React from 'react';
import { Property } from 'csstype';

import { TMargin } from 'config/styles';

import { SkeletonContainer } from './styled';

export const Skeleton = ({
  width = '100%',
  height = '0.875rem',
  ...props
}: TMargin & {
  width?: Property.Width;
  height?: Property.Height;
}) => <SkeletonContainer $width={width} $height={height} {...props} />;

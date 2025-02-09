import styled, { css, keyframes } from 'styled-components';
import { Property } from 'csstype';

import { getMarginStyles, TMargin } from 'config/styles';

const SkeletonKeyframe = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

type SkeletonProps = TMargin & { $width: Property.Width; $height: Property.Height };
export const SkeletonContainer = styled.div<SkeletonProps>(
  ({ $width, $height, ...props }) => css`
    position: relative;

    ${getMarginStyles(props)};

    width: ${$width};
    height: ${$height};

    background-color: #4b4747;

    animation: ${SkeletonKeyframe} 1.5s ease-in-out 0.5s infinite;
  `,
);

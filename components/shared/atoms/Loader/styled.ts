import styled, { css, keyframes } from 'styled-components';
import { getMarginStyles } from 'config/styles';

import theme from 'public/styles/theme';

import { TLoaderWrapper, TSpinner } from './types';

export const LoaderWrapper = styled.div<TLoaderWrapper>(
  ({ size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${size.width};
    height: ${size.height};
    min-height: ${size.minHeight};
  `,
);

const spinnerFade = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<TSpinner>(
  ({ $size, $color, ...props }) => css`
    position: relative;

    display: inline-block;

    width: ${$size}px;
    height: ${$size}px;

    ${getMarginStyles(props)}

    div {
      position: absolute;

      box-sizing: border-box;

      display: block;

      width: ${$size}px;
      height: ${$size}px;

      border-color: ${$color?.default || theme.colors.primary} ${theme.colors.transparent}
        ${theme.colors.transparent} ${theme.colors.transparent};

      border-style: solid;

      border-width: 0.3rem;
      border-radius: 50%;

      animation: ${spinnerFade} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

      &:hover {
        border-top-color: ${$color?.hover || theme.colors.primary};
      }

      [disabled] & {
        border-top-color: ${$color?.disabled || theme.colors.primary};
      }
    }

    div:nth-child(1) {
      animation-delay: -0.45s;
    }

    div:nth-child(2) {
      animation-delay: -0.3s;
    }

    div:nth-child(3) {
      animation-delay: -0.15s;
    }
  `,
);

import { css } from 'styled-components';
import { configColors } from 'config/styles';

import { TIconBase } from './types';

export const getSizeStyles = ({ $size }: TIconBase) => {
  if ($size === 'fit') {
    return css`
      height: 100%;
    `;
  }
  if ($size) {
    return css`
      &&& {
        width: ${$size}px;
        min-width: ${$size}px;
        height: ${$size}px;
        min-height: ${$size}px;
      }
    `;
  }
  return css``;
};

export const getFillStyles = ({ $color = 'white', $fillType = 'fill' }: TIconBase) => {
  return css`
    & path {
      fill: ${$fillType === 'fill' && configColors[$color]};
      stroke: ${$fillType === 'stroke' && configColors[$color]};

      transition: fill 0.5s;
    }
  `;
};

export const getRotateStyles = ({ $rotate = '0' }: TIconBase) => {
  return css`
    transition: transform 0.2s;
    transform: rotate(${$rotate});
  `;
};

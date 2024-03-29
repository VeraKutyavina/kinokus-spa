import { FC } from 'react';
import styled, { css } from 'styled-components';
import { getMarginStyles } from 'config/styles';

import { TIcon, TIconBase } from './types';
import { configIcons, IconKeys } from './config';
import { getFillStyles, getRotateStyles, getSizeStyles } from './helpers';

const IconBase = styled.svg<TIconBase>(
  props => css`
    ${getSizeStyles(props)}
    ${getMarginStyles(props)}
    ${getFillStyles(props)}
    ${getRotateStyles(props)}
  `,
);

const Icon: FC<TIcon> = ({ name, ...props }) => {
  return <IconBase {...props} as={configIcons[name as IconKeys]} />;
};

export default Icon;

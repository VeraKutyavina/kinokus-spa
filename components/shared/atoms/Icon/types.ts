import { ColorKeys, TMargin } from 'config/types';

import { IconKeys } from './config';

export enum FillTypeEnum {
  FILL = 'fill',
  STROKE = 'stroke',
}

export type TIconBase = TMargin & {
  $size?: number | 'fit';
  $color?: ColorKeys;
  $rotate?: string;
  $fillType?: `${FillTypeEnum}`;
};

export type TIcon = TIconBase & {
  name: IconKeys;
};

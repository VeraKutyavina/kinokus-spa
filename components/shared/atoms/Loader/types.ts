import { TButtonStates } from 'components/shared/atoms/Button/types';
import { TMargin } from 'config/styles';

export enum EVariant {
  DEFAULT = 'default',
  SIMPLE = 'simple',
}

export type TVariantStates = {
  width: string;
  minHeight: string;
  height: string;
  spinner: number;
};

export type TLoader = TMargin & {
  variant?: `${EVariant}`;
  testId?: string;
  size?: number;
  wrapperSize?: TVariantStates;
  color?: TButtonStates;
};

export type TVariantConfig = { [innerKey in EVariant]: TVariantStates };

export type TSpinner = {
  $size?: number;
  $color?: TButtonStates;
} & TMargin;

export type TLoaderWrapper = {
  size: TVariantStates;
};

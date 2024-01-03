import theme from 'public/styles/theme';

import { TIconConfig, TShapeConfig, TSizeConfig, TVariantConfig } from './types';

export const backgroundConfig: TVariantConfig = {
  primary: {
    default: theme.colors.primary,
    hover: theme.colors.primaryDark,
    focused: theme.colors.primary,
    disabled: theme.colors.primaryDark,
  },
  secondary: {
    default: theme.colors.black,
    hover: theme.colors.black,
    focused: theme.colors.white,
    disabled: theme.colors.black,
  },
};

export const colorConfig: TVariantConfig = {
  primary: {
    default: theme.colors.white,
    hover: theme.colors.white,
    focused: theme.colors.white,
    disabled: theme.colors.black,
  },
  secondary: {
    default: theme.colors.primary,
    hover: theme.colors.primary,
    focused: theme.colors.primary,
    disabled: theme.colors.black,
  },
};

const defaultTextDecoration = 'none';
export const textDecorationConfig: TVariantConfig = {
  primary: {
    default: defaultTextDecoration,
    hover: defaultTextDecoration,
    focused: defaultTextDecoration,
  },
  secondary: {
    default: defaultTextDecoration,
    hover: defaultTextDecoration,
    focused: defaultTextDecoration,
  },
};

const defaultBorder = '0';
export const borderConfig: TVariantConfig = {
  primary: {
    default: defaultBorder,
    hover: defaultBorder,
    focused: defaultBorder,
  },
  secondary: {
    default: defaultBorder,
    hover: defaultBorder,
    focused: defaultBorder,
  },
};

const defaultShadow = 'none';
export const shadowConfig: TVariantConfig = {
  primary: {
    default: defaultShadow,
    hover: defaultShadow,
    focused: defaultShadow,
  },
  secondary: {
    default: `inset 0px 0px 0px 1px ${theme.colors.black}`,
    hover: `inset 0px 0px 0px 1px ${theme.colors.black}`,
    focused: `inset 0px 0px 0px 3px ${theme.colors.primary}20`,
  },
};

export const borderRadiusConfig: TShapeConfig = {
  none: '0',
  rounded: '0.625rem',
  'extra-rounded': '1.5rem',
  circle: '50%',
};

export const sizeConfig: TSizeConfig = {
  'extra-small': {
    height: '1.25rem',
    padding: '0 0.75rem',
    iconSize: '8px',
    loaderSize: 14,
    iconOnly: {
      width: '1.25rem',
      height: '1.25rem',
      iconSize: '8px',
    },
  },
  small: {
    height: '2.125rem',
    padding: '0 1rem',
    iconSize: '14px',
    loaderSize: 20,
    iconOnly: {
      width: '2.125rem',
      height: '2.125rem',
      iconSize: '16px',
    },
  },
  medium: {
    height: '2.625rem',
    padding: '0 1rem',
    iconSize: '16px',
    loaderSize: 26,
    iconOnly: {
      width: '2.625rem',
      height: '2.625rem',
      iconSize: '22px',
    },
  },
  large: {
    height: '3rem',
    padding: '0 1.25rem',
    iconSize: '18px',
    loaderSize: 26,
    iconOnly: {
      width: '2.75rem',
      height: '2.75rem',
      iconSize: '28px',
    },
  },
  'extra-large': {
    height: '3.125rem',
    padding: '0 1.5rem',
    iconSize: '28px',
    loaderSize: 32,
    iconOnly: {
      width: '4.5rem',
      height: '4.5rem',
      iconSize: '28px',
    },
  },
};

export const iconConfig: TIconConfig = {
  none: {
    margin: '',
  },
  leading: {
    margin: 'margin-right: 0.75rem',
  },
  trailing: {
    margin: 'margin-left: 0.75rem',
  },
  only: {
    margin: '',
  },
};

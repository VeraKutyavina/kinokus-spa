import { Property } from 'csstype';

import theme from 'public/styles/theme';

export type ColorKeys = keyof typeof theme.colors;

type Colors = { [key in ColorKeys]: Property.Color };

export const configColors: Colors = theme.colors;

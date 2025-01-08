import theme from 'components/contexts/ThemeContext/theme';
import { Property } from 'csstype';

export type ColorKeys = keyof typeof theme.colors;

type Colors = { [key in ColorKeys]: Property.Color };

export const configColors: Colors = theme.colors;

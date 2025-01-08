import { TTheme } from 'components/contexts/ThemeContext/theme';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}

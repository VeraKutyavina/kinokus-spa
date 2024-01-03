import * as icons from './assets';

export const configIcons = {
  'arrow-chevron-bottom': icons.ArrowChevronBottom,
  'arrow-chevron-left': icons.ArrowChevronLeft,
  'arrow-chevron-right': icons.ArrowChevronRight,
  'arrow-chevron-top': icons.ArrowChevronTop,
  close: icons.Close,
  cursor: icons.Cursor,
  plus: icons.Plus,
  minus: icons.Minus,
  search: icons.Search,
  eye: icons.Eye,
  'trash-bin': icons.TrashBin,
  language: icons.Language,
  menu: icons.Menu,
  dots: icons.Dots,
  logout: icons.Logout,
  check: icons.Check,
};

export type IconKeys = keyof typeof configIcons;

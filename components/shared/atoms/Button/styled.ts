import styled, { css } from 'styled-components';
import { getMarginStyles } from 'config/styles';

import theme from 'public/styles/theme';

import { TButtonProps, TLabelProps } from './types';

export const StyledButton = styled.button<TButtonProps>(
  ({
    $backgroundColor,
    $textColor,
    $width,
    $iconType,
    $textDecoration,
    $size,
    $icon,
    $borderRadius,
    $border,
    $boxShadow,
    $isLoading,
    ...props
  }) => css`
    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: ${$width};
    height: ${$size.height};
    padding: ${$size.padding};
    overflow: hidden;

    font-size: 1rem;
    font-weight: 500;
    color: ${$isLoading ? theme.colors.transparent : $textColor.default};
    text-align: center;
    text-decoration: ${$textDecoration.default};

    cursor: pointer;

    background-color: ${$backgroundColor.default};
    border: ${$border.default};
    border-radius: ${$borderRadius};
    box-shadow: ${$boxShadow.default};

    transition: 0.2s all;

    &:disabled {
      color: ${$textColor.disabled};

      cursor: not-allowed;

      background-color: ${$backgroundColor.disabled};
    }

    ${getMarginStyles(props)}

    &:focus {
      color: ${$textColor.focused};
      text-decoration: ${$textDecoration.focused};

      background-color: ${$backgroundColor.focused};
      border: ${$border.focused};
      box-shadow: ${$boxShadow.focused};
    }

    &:hover:not(:disabled) {
      color: ${$textColor.hover};
      text-decoration: ${$textDecoration.hover};

      background-color: ${$backgroundColor.hover};
      border: ${$border.hover};
      box-shadow: ${$boxShadow.hover};
    }

    ${$iconType !== 'none' &&
    css`
      & svg {
        width: ${$size.iconSize};
        min-width: ${$size.iconSize};
        height: ${$size.iconSize};
        min-height: ${$size.iconSize};
        ${$icon.margin};
      }
    `}
    ${$iconType === 'only' &&
    css`
      width: ${$size.iconOnly.width};
      min-width: ${$size.iconOnly.width};
      height: ${$size.iconOnly.height};
      min-height: ${$size.iconOnly.height};

      & svg {
        width: ${$size.iconOnly.iconSize};
        min-width: ${$size.iconOnly.iconSize};
        height: ${$size.iconOnly.iconSize};
        min-height: ${$size.iconOnly.iconSize};
      }
    `}
  `,
);

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const Label = styled.span<TLabelProps>(
  ({ isLoading }) => css`
    display: inline-flex;

    opacity: ${isLoading ? 0 : 1};
  `,
);

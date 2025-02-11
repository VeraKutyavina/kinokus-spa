import React, { forwardRef } from 'react';
import Link from 'next/link';

import { Loader } from 'components/shared/atoms/Loader';

import { Label, SpinnerWrapper, StyledButton } from './styled';
import { TButton } from './types';
import {
  backgroundConfig,
  borderConfig,
  borderRadiusConfig,
  colorConfig,
  iconConfig,
  shadowConfig,
  sizeConfig,
  textDecorationConfig,
} from './config';

type TButtonType = TButton & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, TButtonType>(
  (
    {
      variant = 'primary',
      type = 'button',
      $width = 'auto',
      iconType = 'none',
      icon,
      size = 'medium',
      shape = 'rounded',
      label,
      testId,
      isDisabled = false,
      children,
      isLoading = false,
      href,
      ...props
    },
    ref,
  ) => (
    <StyledButton
      type={type}
      data-testid={testId}
      ref={ref}
      $isLoading={isLoading}
      disabled={isDisabled}
      $width={$width}
      $backgroundColor={backgroundConfig[variant]}
      $textColor={colorConfig[variant]}
      $textDecoration={textDecorationConfig[variant]}
      $borderRadius={borderRadiusConfig[shape]}
      $border={borderConfig[variant]}
      $boxShadow={shadowConfig[variant]}
      $size={sizeConfig[size]}
      $iconType={iconType}
      $icon={iconConfig[iconType]}
      as={href ? Link : 'button'}
      href={href}
      {...props}
    >
      <Label $isLoading={isLoading}>
        {iconType === 'leading' && icon}
        {iconType === 'only' ? icon : label}
        {iconType === 'trailing' && icon}
        {children}
      </Label>
      {isLoading && (
        <SpinnerWrapper>
          <Loader
            variant="simple"
            size={sizeConfig[size].loaderSize}
            color={colorConfig[variant]}
          />
        </SpinnerWrapper>
      )}
    </StyledButton>
  ),
);
export default Button;

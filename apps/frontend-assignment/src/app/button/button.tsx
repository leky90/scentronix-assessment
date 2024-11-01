import {
  ButtonProps as BaseButtonProps,
  Button as BaseButton,
  ButtonOwnerState,
} from '@mui/base/Button';
import { ButtonVariantProps, buttonVariant } from './button.cva';
import { cx } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { forwardRef } from 'react';

export type ButtonProps = BaseButtonProps & ButtonVariantProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (
  props,
  ref
) {
  const slotProps: BaseButtonProps['slotProps'] = {
    root: (btnOwnerState: ButtonOwnerState & ButtonVariantProps) => ({
      className: twMerge(
        buttonVariant({
          intent: btnOwnerState.intent,
          size: btnOwnerState.size,
          shape: btnOwnerState.shape,
          className: btnOwnerState.className,
        })
      ),
    }),
  };
  return <BaseButton {...props} ref={ref} slotProps={slotProps} />;
});

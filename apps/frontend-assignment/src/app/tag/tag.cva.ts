import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';

export type TagVariantProps = VariantProps<typeof tagVariant>;
export const tagVariant = cva(
  ['inline-flex', 'items-center', 'justify-center', 'gap-1', 'rounded'],
  {
    variants: {
      intent: {
        primary: ['bg-gray-100', 'text-gray-800'],
        secondary: ['bg-black', 'text-white'],
      },
      size: {
        medium: ['text-xs', 'py-1', 'px-2', 'h-6'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
);

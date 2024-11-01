import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';

export type ButtonVariantProps = VariantProps<typeof buttonVariant>;
export const buttonVariant = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-1',
    'border',
    'rounded-md',
    'hover:opacity-75',
    'cursor-pointer',
    'disabled:pointer-events-none',
    'disabled:opacity-30',
    'shadow-lg',
  ],
  {
    variants: {
      size: {
        small: ['text-sm', 'py-1', 'px-2', 'h-8', 'gap-1'],
        medium: ['text-base', 'py-2', 'px-4', 'h-10', 'gap-2'],
      },
      intent: {
        primary: ['bg-black', 'text-white', 'border-black'],
        secondary: ['bg-white', 'text-gray-800', 'border-white'],
        ghost: ['border-transparent', 'shadow-none', 'p-0', 'h-auto'],
      },
      shape: {
        rectangle: [''],
        circle: ['rounded-full', 'aspect-square', 'p-1'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
      shape: 'rectangle',
    },
  }
);

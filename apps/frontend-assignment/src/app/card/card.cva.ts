import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';

export type CardVariantProps = VariantProps<typeof cardVariant>;
export const cardVariant = cva([
  'shadow-md',
  'rounded-sm',
  'px-8',
  'py-4',
  'space-y-2',
  'bg-white',
]);

import { CardVariantProps, cardVariant } from './card.cva';
import { forwardRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type CardProps = PropsWithChildren<
  CardVariantProps & { className?: string }
>;

export const Card = forwardRef<HTMLDivElement, CardProps>(function (
  props,
  ref
) {
  return (
    <div
      {...props}
      ref={ref}
      className={twMerge(
        cardVariant({
          className: props.className,
        })
      )}
    />
  );
});

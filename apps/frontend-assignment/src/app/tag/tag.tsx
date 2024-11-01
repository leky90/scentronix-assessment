import { TagVariantProps, tagVariant } from './tag.cva';
import { forwardRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type TagProps = PropsWithChildren<
  TagVariantProps & { className?: string }
>;

export const Tag = forwardRef<HTMLSpanElement, TagProps>(function (props, ref) {
  return (
    <span
      {...props}
      ref={ref}
      className={twMerge(
        tagVariant({
          intent: props.intent,
          size: props.size,
          className: props.className,
        })
      )}
    />
  );
});

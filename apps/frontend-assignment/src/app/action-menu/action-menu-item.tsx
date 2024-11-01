import { MenuItem, MenuItemProps } from '@mui/base';
import { forwardRef, ReactNode } from 'react';
import { Card } from '../card';
import { cx } from 'class-variance-authority';
import { Tag } from '../tag';

export type ActionMenuItem = {
  option: ReactNode;
  price: string;
  desc?: string;
  tags?: string[];
  onClick?: VoidFunction;
};

type ActionMenuItemProps = ActionMenuItem & MenuItemProps;

export const ActionMenuItem = forwardRef<
  HTMLLIElement,
  Omit<ActionMenuItemProps, 'children'>
>(function (
  { option, price, desc, tags = [], onClick, className, ...props },
  ref
) {
  return (
    <MenuItem
      {...props}
      ref={ref}
      onClick={onClick}
      className={cx(
        onClick && 'cursor-pointer',
        'min-h-12',
        'max-w-[70vw]',
        'md:max-w-80',
        'w-80',
        'md:min-h-14',
        'transition-[margin]',
        className
      )}
    >
      <Card>
        <div className={cx('flex', 'items-center', 'justify-between', 'gap-2')}>
          {option}
          <span>{price}</span>
        </div>
        {desc && <p className={cx('text-gray-400', 'text-sm')}>{desc}</p>}
        {tags.length > 0 && (
          <div className={cx('pt-2')}>
            {tags?.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        )}
      </Card>
    </MenuItem>
  );
});

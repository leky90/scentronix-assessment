import { Menu, MenuProps } from '@mui/base';
import { ActionMenuItem } from './action-menu-item';

type ActionMenuProps = {
  items: ActionMenuItem[];
} & MenuProps;

export function ActionMenu({ items = [], ...props }: ActionMenuProps) {
  return (
    <Menu
      {...props}
      slotProps={{
        listbox: {
          className: 'space-y-2',
        },
      }}
    >
      {items.map((item, index) => (
        <ActionMenuItem
          key={index}
          option={item.option}
          price={item.price}
          desc={item.desc}
          tags={item.tags}
          onClick={item.onClick}
        />
      ))}
    </Menu>
  );
}

import type { Meta, StoryObj } from '@storybook/react';
import { ActionMenu, ActionMenuItem } from '../action-menu';
import { Button } from '../button';
import { AddShoppingCartOutlined } from '@mui/icons-material';

const meta: Meta<typeof ActionMenu> = {
  component: ActionMenu,
  title: 'Component/ActionMenu',
};
export default meta;

type Story = StoryObj<typeof ActionMenu>;

const ACTION_MENU_ITEMS: ActionMenuItem[] = [
  {
    option: (
      <Button intent={'ghost'}>
        <AddShoppingCartOutlined style={{ width: 16, height: 16 }} />
        50ml
      </Button>
    ),
    price: '€80.00',
    onClick: () => alert('clicked'),
  },
  {
    option: (
      <Button intent={'ghost'}>
        <AddShoppingCartOutlined style={{ width: 16, height: 16 }} />
        30ml
      </Button>
    ),
    price: '€60.00',
    onClick: () => alert('clicked'),
  },
  {
    option: (
      <Button intent={'ghost'}>
        <AddShoppingCartOutlined style={{ width: 16, height: 16 }} />
        5ml
      </Button>
    ),
    price: '€15.00',
    tags: ['3 x 5ml for € 40.00'],
    onClick: () => alert('clicked'),
  },
];

export const Default: Story = {
  args: {},
  render: () => <ActionMenu items={ACTION_MENU_ITEMS} />,
};

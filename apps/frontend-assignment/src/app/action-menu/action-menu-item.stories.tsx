import type { Meta, StoryObj } from '@storybook/react';
import { ActionMenuItem } from '.';
import { Button } from '../button';
import { AddShoppingCartOutlined } from '@mui/icons-material';
import { Menu } from '@mui/base';

const meta: Meta<typeof ActionMenuItem> = {
  component: ActionMenuItem,
  title: 'Component/ActionMenuItem',
  args: {
    option: (
      <Button intent={'ghost'}>
        <AddShoppingCartOutlined style={{ width: 16, height: 16 }} />
        Button text
      </Button>
    ),
    price: 'Price',
  },
};
export default meta;

type Story = StoryObj<typeof ActionMenuItem>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Menu>
      <ActionMenuItem {...args} />
    </Menu>
  ),
};

export const DescriptionOnly: Story = {
  args: {
    desc: 'Description only.',
  },
  render: (args) => (
    <Menu>
      <ActionMenuItem {...args} />
    </Menu>
  ),
};

export const TagOnly: Story = {
  args: {
    tags: ['Tag only'],
  },
  render: (args) => (
    <Menu>
      <ActionMenuItem {...args} />
    </Menu>
  ),
};

export const DescriptionAndTag: Story = {
  args: {
    desc: 'An optional description.',
    tags: ['Optional tag'],
  },
  render: (args) => (
    <Menu>
      <ActionMenuItem {...args} />
    </Menu>
  ),
};

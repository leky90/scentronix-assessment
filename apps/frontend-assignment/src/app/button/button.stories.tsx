import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button';
import { Add, AddShoppingCartOutlined } from '@mui/icons-material';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Base/Button',
  args: {
    intent: 'primary',
    size: 'medium',
    disabled: false,
    children: 'Button text',
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    shape: {
      control: 'select',
      options: ['rectangle', 'circle'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Text: Story = {
  args: {},
};

export const TextAndIcon: Story = {
  args: {
    intent: 'ghost',
    size: 'small',
  },
  render: (args) => (
    <Button {...args}>
      <AddShoppingCartOutlined style={{ width: 16, height: 16 }} />
      {args.children}
    </Button>
  ),
};

export const IconOnly: Story = {
  args: {
    children: <Add className="rotate-45" />,
    shape: 'circle',
    intent: 'secondary',
  },
};

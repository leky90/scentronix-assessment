import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../card';
import { Button } from '../button';
import { AddShoppingCartOutlined } from '@mui/icons-material';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Base/Card',
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <Button intent={'ghost'}>
        <AddShoppingCartOutlined style={{ width: 16, height: 16 }} />
        Button text
      </Button>
    ),
  },
};

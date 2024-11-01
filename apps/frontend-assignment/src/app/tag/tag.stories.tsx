import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Base/Tag',
  args: {
    intent: 'primary',
    size: 'medium',
    children: 'Tag only',
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['medium'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {},
};

import type { Meta, StoryObj } from '@storybook/react';
import { ActionMenu, ActionMenuItem, FloatActionMenu } from './action-menu';
import { App } from './app';

const meta: Meta<typeof App> = {
  component: App,
  title: 'Screen',
};
export default meta;

type Story = StoryObj<typeof ActionMenu>;

export const Test: Story = {
  args: {},
};

import type { Meta, StoryObj } from '@storybook/react';
import { InputTransparent } from './index';

const meta = {
  title: 'Specific/InputTransparent',
  component: InputTransparent,
  tags: ['autodocs'],
} satisfies Meta<typeof InputTransparent>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    label: 'InputTransparent',
  },
};

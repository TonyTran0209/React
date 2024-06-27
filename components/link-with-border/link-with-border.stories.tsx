import type { Meta, StoryObj } from '@storybook/react';
import { LinkWithBorder } from './index';

const meta = {
  title: 'Specific/LinkWithBorder',
  component: LinkWithBorder,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinkWithBorder>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    label: "My link"
  },
};

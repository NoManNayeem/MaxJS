import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    useCss: { control: 'boolean' },
    animate: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Tailwind: Story = {
  args: { label: 'Click Me' }
};

export const CSS: Story = {
  args: { label: 'Click Me', useCss: true }
};

export const Animated: Story = {
  args: { label: 'Animated', animate: true }
};

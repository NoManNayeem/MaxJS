import type { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: { title: 'Welcome', subtitle: 'To MaxJS' }
};

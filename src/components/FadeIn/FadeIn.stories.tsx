import type { Meta, StoryObj } from '@storybook/react';
import FadeIn from './FadeIn';

const meta: Meta<typeof FadeIn> = {
  title: 'Animations/FadeIn',
  component: FadeIn,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof FadeIn>;

export const Default: Story = {
  args: { children: <div>Fade In Content</div> }
};

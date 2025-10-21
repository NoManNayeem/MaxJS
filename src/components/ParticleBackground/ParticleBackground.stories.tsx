import type { Meta, StoryObj } from '@storybook/react';
import ParticleBackground from './ParticleBackground';

const meta: Meta<typeof ParticleBackground> = {
  title: 'Backgrounds/ParticleBackground',
  component: ParticleBackground,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ParticleBackground>;

export const Default: Story = {};

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
    animate: { control: 'boolean' },
    variant: { 
      control: 'select', 
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'] 
    },
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg'] 
    },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
    iconPosition: { 
      control: 'select', 
      options: ['left', 'right'] 
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { label: 'Primary Button', variant: 'primary' }
};

export const Secondary: Story = {
  args: { label: 'Secondary Button', variant: 'secondary' }
};

export const Outline: Story = {
  args: { label: 'Outline Button', variant: 'outline' }
};

export const Ghost: Story = {
  args: { label: 'Ghost Button', variant: 'ghost' }
};

export const Danger: Story = {
  args: { label: 'Danger Button', variant: 'danger' }
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button label="Small" size="sm" />
      <Button label="Medium" size="md" />
      <Button label="Large" size="lg" />
    </div>
  )
};

export const WithIcon: Story = {
  args: { 
    label: 'With Icon', 
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    )
  }
};

export const Loading: Story = {
  args: { label: 'Loading Button', loading: true }
};

export const FullWidth: Story = {
  args: { label: 'Full Width Button', fullWidth: true }
};

export const Animated: Story = {
  args: { label: 'Animated Button', animate: true }
};

export const Disabled: Story = {
  args: { label: 'Disabled Button', disabled: true }
};

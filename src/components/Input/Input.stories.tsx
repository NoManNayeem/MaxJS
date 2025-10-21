import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: { 
      control: 'select', 
      options: ['text', 'email', 'password', 'number', 'tel', 'url'] 
    },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    helperText: { control: 'text' },
    required: { control: 'boolean' },
    useCss: { control: 'boolean' },
    animate: { control: 'boolean' },
    variant: { 
      control: 'select', 
      options: ['default', 'filled', 'outlined'] 
    },
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg'] 
    },
    fullWidth: { control: 'boolean' },
    iconPosition: { 
      control: 'select', 
      options: ['left', 'right'] 
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email'
  }
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helperText: 'Must be at least 8 characters long'
  }
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    error: 'Please enter a valid email address'
  }
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true
  }
};

export const WithIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  }
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Input label="Default" placeholder="Default variant" variant="default" />
      <Input label="Filled" placeholder="Filled variant" variant="filled" />
      <Input label="Outlined" placeholder="Outlined variant" variant="outlined" />
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Input label="Small" placeholder="Small size" size="sm" />
      <Input label="Medium" placeholder="Medium size" size="md" />
      <Input label="Large" placeholder="Large size" size="lg" />
    </div>
  )
};

export const Animated: Story = {
  args: {
    label: 'Animated Input',
    placeholder: 'Focus to see animation',
    animate: true
  }
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true
  }
};

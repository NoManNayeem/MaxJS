import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg', 'xl'] 
    },
    color: { 
      control: 'select', 
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'] 
    },
    animate: { control: 'boolean' },
    useCss: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {}
};

export const WithLabel: Story = {
  args: {
    label: 'Loading...'
  }
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small spinner'
  }
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large spinner'
  }
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    label: 'Extra large spinner'
  }
};

export const Success: Story = {
  args: {
    color: 'success',
    label: 'Success loading'
  }
};

export const Warning: Story = {
  args: {
    color: 'warning',
    label: 'Warning loading'
  }
};

export const Error: Story = {
  args: {
    color: 'error',
    label: 'Error loading'
  }
};

export const Info: Story = {
  args: {
    color: 'info',
    label: 'Info loading'
  }
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Secondary loading'
  }
};

export const Animated: Story = {
  args: {
    animate: true,
    label: 'Animated spinner'
  }
};

export const CSSStyled: Story = {
  args: {
    useCss: true,
    label: 'CSS styled spinner'
  }
};

export const Multiple: Story = {
  render: () => (
    <div className="flex space-x-4 items-center">
      <Spinner size="sm" color="primary" />
      <Spinner size="md" color="success" />
      <Spinner size="lg" color="warning" />
      <Spinner size="xl" color="error" />
    </div>
  )
};

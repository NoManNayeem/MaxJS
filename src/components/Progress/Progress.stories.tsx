import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    max: { control: { type: 'number' } },
    showValue: { control: 'boolean' },
    animated: { control: 'boolean' },
    striped: { control: 'boolean' },
    useCss: { control: 'boolean' },
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg'] 
    },
    variant: { 
      control: 'select', 
      options: ['default', 'success', 'warning', 'error', 'info'] 
    }
  }
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
    label: 'Progress'
  }
};

export const WithValue: Story = {
  args: {
    value: 75,
    showValue: true,
    label: 'Progress with value'
  }
};

export const Success: Story = {
  args: {
    value: 100,
    variant: 'success',
    label: 'Completed'
  }
};

export const Warning: Story = {
  args: {
    value: 60,
    variant: 'warning',
    label: 'Warning'
  }
};

export const Error: Story = {
  args: {
    value: 25,
    variant: 'error',
    label: 'Error'
  }
};

export const Info: Story = {
  args: {
    value: 40,
    variant: 'info',
    label: 'Information'
  }
};

export const Striped: Story = {
  args: {
    value: 65,
    striped: true,
    label: 'Striped progress'
  }
};

export const Animated: Story = {
  args: {
    value: 80,
    animated: true,
    label: 'Animated progress'
  }
};

export const Small: Story = {
  args: {
    value: 45,
    size: 'sm',
    label: 'Small progress'
  }
};

export const Large: Story = {
  args: {
    value: 70,
    size: 'lg',
    label: 'Large progress'
  }
};

export const CSSStyled: Story = {
  args: {
    value: 55,
    useCss: true,
    label: 'CSS styled progress'
  }
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-4">
      <Progress value={25} variant="error" label="Error Progress" />
      <Progress value={50} variant="warning" label="Warning Progress" />
      <Progress value={75} variant="info" label="Info Progress" />
      <Progress value={100} variant="success" label="Success Progress" />
    </div>
  )
};

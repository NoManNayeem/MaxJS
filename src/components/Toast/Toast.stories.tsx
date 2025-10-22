import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import { useState } from 'react';
import { Button } from '../Button';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    type: { 
      control: 'select', 
      options: ['success', 'error', 'warning', 'info'] 
    },
    duration: { control: { type: 'number', min: 0, max: 10000, step: 100 } },
    position: { 
      control: 'select', 
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'] 
    },
    useCss: { control: 'boolean' },
    animate: { control: 'boolean' },
    closable: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Toast>;

const ToastWrapper = (args: any) => {
  const [show, setShow] = useState(false);
  
  return (
    <div>
      <Button 
        label="Show Toast" 
        onClick={() => setShow(true)} 
      />
      {show && (
        <Toast
          {...args}
          onClose={() => setShow(false)}
        />
      )}
    </div>
  );
};

export const Success: Story = {
  render: ToastWrapper,
  args: {
    message: 'Operation completed successfully!',
    type: 'success'
  }
};

export const Error: Story = {
  render: ToastWrapper,
  args: {
    message: 'Something went wrong. Please try again.',
    type: 'error'
  }
};

export const Warning: Story = {
  render: ToastWrapper,
  args: {
    message: 'Please check your input before proceeding.',
    type: 'warning'
  }
};

export const Info: Story = {
  render: ToastWrapper,
  args: {
    message: 'Here is some useful information for you.',
    type: 'info'
  }
};

export const TopLeft: Story = {
  render: ToastWrapper,
  args: {
    message: 'Toast in top-left position',
    position: 'top-left'
  }
};

export const BottomRight: Story = {
  render: ToastWrapper,
  args: {
    message: 'Toast in bottom-right position',
    position: 'bottom-right'
  }
};

export const NotClosable: Story = {
  render: ToastWrapper,
  args: {
    message: 'This toast cannot be closed manually',
    closable: false,
    duration: 3000
  }
};

export const LongDuration: Story = {
  render: ToastWrapper,
  args: {
    message: 'This toast will stay for 10 seconds',
    duration: 10000
  }
};

export const Animated: Story = {
  render: ToastWrapper,
  args: {
    message: 'Animated toast notification',
    animate: true
  }
};

export const CSSStyled: Story = {
  render: ToastWrapper,
  args: {
    message: 'CSS styled toast',
    useCss: true
  }
};

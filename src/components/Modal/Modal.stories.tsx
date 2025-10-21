import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from './Modal';
import Button from '../Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg', 'xl', 'full'] 
    },
    useCss: { control: 'boolean' },
    animate: { control: 'boolean' },
    closeOnOverlayClick: { control: 'boolean' },
    closeOnEscape: { control: 'boolean' },
    showCloseButton: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalExample = ({ args }: { args: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <p className="text-gray-600 mb-4">
          This is a modal dialog. You can put any content here.
        </p>
        <div className="flex gap-2 justify-end">
          <Button label="Cancel" variant="outline" onClick={() => setIsOpen(false)} />
          <Button label="Confirm" onClick={() => setIsOpen(false)} />
        </div>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalExample args={args} />,
  args: {
    title: 'Modal Title'
  }
};

export const WithoutTitle: Story = {
  render: (args) => <ModalExample args={args} />,
  args: {}
};

export const Sizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);
    
    return (
      <div className="flex gap-2">
        {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <Button
            key={size}
            label={`Open ${size.toUpperCase()}`}
            onClick={() => setOpenSize(size)}
          />
        ))}
        
        {openSize && (
          <Modal
            isOpen={true}
            onClose={() => setOpenSize(null)}
            title={`${openSize.toUpperCase()} Modal`}
            size={openSize}
          >
            <p>This is a {openSize} modal.</p>
          </Modal>
        )}
      </div>
    );
  }
};

export const FormModal: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button label="Open Form Modal" onClick={() => setIsOpen(true)} />
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Contact Form"
          size="lg"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Enter your message"
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button label="Cancel" variant="outline" onClick={() => setIsOpen(false)} />
              <Button label="Send" onClick={() => setIsOpen(false)} />
            </div>
          </div>
        </Modal>
      </>
    );
  }
};

export const Animated: Story = {
  render: (args) => <ModalExample args={args} />,
  args: {
    title: 'Animated Modal',
    animate: true
  }
};

export const NoCloseOnOverlay: Story = {
  render: (args) => <ModalExample args={args} />,
  args: {
    title: 'Modal with Overlay Click Disabled',
    closeOnOverlayClick: false
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import Button from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    image: { control: 'text' },
    useCss: { control: 'boolean' },
    animate: { control: 'boolean' },
    variant: { 
      control: 'select', 
      options: ['default', 'elevated', 'outlined', 'filled'] 
    },
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg'] 
    },
    hover: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'This is a subtitle',
    children: 'This is the card content. It can contain any React elements.'
  }
};

export const WithImage: Story = {
  args: {
    title: 'Beautiful Landscape',
    subtitle: 'A stunning view',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    children: 'This card includes a beautiful landscape image.'
  }
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    subtitle: 'With shadow',
    variant: 'elevated',
    children: 'This card has an elevated appearance with shadow.'
  }
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    subtitle: 'With border',
    variant: 'outlined',
    children: 'This card has a prominent border.'
  }
};

export const Filled: Story = {
  args: {
    title: 'Filled Card',
    subtitle: 'With background',
    variant: 'filled',
    children: 'This card has a filled background.'
  }
};

export const WithActions: Story = {
  args: {
    title: 'Card with Actions',
    subtitle: 'Interactive card',
    children: (
      <div>
        <p className="mb-4">This card contains interactive elements.</p>
        <div className="flex gap-2">
          <Button label="Action" size="sm" />
          <Button label="Cancel" variant="outline" size="sm" />
        </div>
      </div>
    )
  }
};

export const Hover: Story = {
  args: {
    title: 'Hover Card',
    subtitle: 'Hover to see effect',
    hover: true,
    children: 'This card has hover effects enabled.'
  }
};

export const Animated: Story = {
  args: {
    title: 'Animated Card',
    subtitle: 'With animation',
    animate: true,
    children: 'This card animates when it appears.'
  }
};

export const Sizes: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Small Card" size="sm" children="Small size card content." />
      <Card title="Medium Card" size="md" children="Medium size card content." />
      <Card title="Large Card" size="lg" children="Large size card content." />
    </div>
  )
};

import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabItem } from './Tabs';
import { useState } from 'react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    type: { 
      control: 'select', 
      options: ['line', 'card', 'button'] 
    },
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg'] 
    },
    position: { 
      control: 'select', 
      options: ['top', 'bottom', 'left', 'right'] 
    },
    useCss: { control: 'boolean' },
    animate: { control: 'boolean' },
    centered: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabItems: TabItem[] = [
  {
    key: 'tab1',
    label: 'Tab 1',
    children: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Tab 1 Content</h3>
        <p className="text-gray-600">
          This is the content for Tab 1. You can put any React components here.
        </p>
      </div>
    )
  },
  {
    key: 'tab2',
    label: 'Tab 2',
    children: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Tab 2 Content</h3>
        <p className="text-gray-600">
          This is the content for Tab 2. It can contain forms, lists, or any other components.
        </p>
      </div>
    )
  },
  {
    key: 'tab3',
    label: 'Tab 3',
    children: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Tab 3 Content</h3>
        <p className="text-gray-600">
          This is the content for Tab 3. Each tab can have completely different content.
        </p>
      </div>
    )
  }
];

const tabItemsWithIcons: TabItem[] = [
  {
    key: 'home',
    label: 'Home',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>,
    children: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Home</h3>
        <p className="text-gray-600">Welcome to the home page!</p>
      </div>
    )
  },
  {
    key: 'profile',
    label: 'Profile',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>,
    children: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Profile</h3>
        <p className="text-gray-600">Manage your profile settings.</p>
      </div>
    )
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>,
    children: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Settings</h3>
        <p className="text-gray-600">Configure your application settings.</p>
      </div>
    )
  }
];

const TabsWrapper = (args: any) => {
  const [activeKey, setActiveKey] = useState(args.defaultActiveKey || 'tab1');
  
  return (
    <Tabs
      {...args}
      activeKey={activeKey}
      onChange={setActiveKey}
    />
  );
};

export const Default: Story = {
  render: TabsWrapper,
  args: {
    items: tabItems,
    defaultActiveKey: 'tab1'
  }
};

export const WithIcons: Story = {
  render: TabsWrapper,
  args: {
    items: tabItemsWithIcons,
    defaultActiveKey: 'home'
  }
};

export const Card: Story = {
  render: TabsWrapper,
  args: {
    items: tabItems,
    type: 'card',
    defaultActiveKey: 'tab1'
  }
};

export const Button: Story = {
  render: TabsWrapper,
  args: {
    items: tabItems,
    type: 'button',
    defaultActiveKey: 'tab1'
  }
};

export const Left: Story = {
  render: TabsWrapper,
  args: {
    items: tabItems,
    position: 'left',
    defaultActiveKey: 'tab1'
  }
};

export const Right: Story = {
  render: TabsWrapper,
  args: {
    items: tabItems,
    position: 'right',
    defaultActiveKey: 'tab1'
  }
};

export const Small: Story = {
  render: TabsWrapper,
  args: {
    items: tabItems,
    size: 'sm',
    defaultActiveKey: 'tab1'
  }
};

export const Large: Story = {
  render: TabsWrapper,
  args: {
    items: tabItems,
    size: 'lg',
    defaultActiveKey: 'tab1'
  }
};

export const Centered: Story = {
  render: TabsWrapper,
  args: {
    items: tabItems,
    centered: true,
    defaultActiveKey: 'tab1'
  }
};

export const Animated: Story = {
  render: TabsWrapper,
  args: {
    items: tabItems,
    animate: true,
    defaultActiveKey: 'tab1'
  }
};

export const CSSStyled: Story = {
  render: TabsWrapper,
  args: {
    items: tabItems,
    useCss: true,
    defaultActiveKey: 'tab1'
  }
};

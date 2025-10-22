import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownOption } from './Dropdown';
import { useState } from 'react';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    searchable: { control: 'boolean' },
    clearable: { control: 'boolean' },
    useCss: { control: 'boolean' },
    animate: { control: 'boolean' },
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg'] 
    },
    variant: { 
      control: 'select', 
      options: ['default', 'outlined', 'filled'] 
    }
  }
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const options: DropdownOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true },
  { value: 'option4', label: 'Option 4' }
];

const optionsWithIcons: DropdownOption[] = [
  { 
    value: 'home', 
    label: 'Home',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  },
  { 
    value: 'profile', 
    label: 'Profile',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  },
  { 
    value: 'settings', 
    label: 'Settings',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  }
];

const DropdownWrapper = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  
  return (
    <Dropdown
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default: Story = {
  render: DropdownWrapper,
  args: {
    options,
    placeholder: 'Select an option'
  }
};

export const WithIcons: Story = {
  render: DropdownWrapper,
  args: {
    options: optionsWithIcons,
    placeholder: 'Choose an option'
  }
};

export const Searchable: Story = {
  render: DropdownWrapper,
  args: {
    options,
    placeholder: 'Search and select',
    searchable: true
  }
};

export const Clearable: Story = {
  render: DropdownWrapper,
  args: {
    options,
    placeholder: 'Select an option',
    clearable: true,
    value: 'option1'
  }
};

export const Disabled: Story = {
  render: DropdownWrapper,
  args: {
    options,
    placeholder: 'Disabled dropdown',
    disabled: true
  }
};

export const Outlined: Story = {
  render: DropdownWrapper,
  args: {
    options,
    placeholder: 'Outlined style',
    variant: 'outlined'
  }
};

export const Filled: Story = {
  render: DropdownWrapper,
  args: {
    options,
    placeholder: 'Filled style',
    variant: 'filled'
  }
};

export const Small: Story = {
  render: DropdownWrapper,
  args: {
    options,
    placeholder: 'Small size',
    size: 'sm'
  }
};

export const Large: Story = {
  render: DropdownWrapper,
  args: {
    options,
    placeholder: 'Large size',
    size: 'lg'
  }
};

export const Animated: Story = {
  render: DropdownWrapper,
  args: {
    options,
    placeholder: 'Animated dropdown',
    animate: true
  }
};

export const CSSStyled: Story = {
  render: DropdownWrapper,
  args: {
    options,
    placeholder: 'CSS styled',
    useCss: true
  }
};

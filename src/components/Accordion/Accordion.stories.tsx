import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from './Accordion';
import { useState } from 'react';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    useCss: { control: 'boolean' },
    animate: { control: 'boolean' },
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg'] 
    },
    variant: { 
      control: 'select', 
      options: ['default', 'bordered', 'filled'] 
    }
  }
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const accordionItems: AccordionItem[] = [
  {
    key: 'item1',
    title: 'What is MaxJS?',
    content: (
      <div>
        <p className="mb-2">
          MaxJS is a comprehensive React UI library that provides a wide range of 
          customizable components for building modern web applications.
        </p>
        <p>
          It includes components for forms, navigation, data display, and more, 
          all built with TypeScript and styled with Tailwind CSS.
        </p>
      </div>
    )
  },
  {
    key: 'item2',
    title: 'How do I install MaxJS?',
    content: (
      <div>
        <p className="mb-2">You can install MaxJS using npm or yarn:</p>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">
          npm install maxjs
        </code>
        <p className="mt-2">
          Or with yarn:
        </p>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">
          yarn add maxjs
        </code>
      </div>
    )
  },
  {
    key: 'item3',
    title: 'Is MaxJS free to use?',
    content: (
      <div>
        <p>
          Yes! MaxJS is completely free and open source. You can use it in any 
          project, commercial or personal, without any restrictions.
        </p>
      </div>
    )
  },
  {
    key: 'item4',
    title: 'Can I customize the components?',
    content: (
      <div>
        <p className="mb-2">
          Absolutely! MaxJS components are highly customizable. You can:
        </p>
        <ul className="list-disc ml-4">
          <li>Override default styles with custom CSS</li>
          <li>Use the useCss prop for plain CSS styling</li>
          <li>Pass custom className props</li>
          <li>Modify component behavior through props</li>
        </ul>
      </div>
    ),
    disabled: true
  }
];

const accordionItemsWithIcons: AccordionItem[] = [
  {
    key: 'home',
    title: 'Home',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>,
    content: (
      <div>
        <p>Welcome to the home section. This is where you can find general information.</p>
      </div>
    )
  },
  {
    key: 'about',
    title: 'About',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>,
    content: (
      <div>
        <p>Learn more about our company and mission.</p>
      </div>
    )
  },
  {
    key: 'contact',
    title: 'Contact',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>,
    content: (
      <div>
        <p>Get in touch with us through various channels.</p>
      </div>
    )
  }
];

const AccordionWrapper = (args: any) => {
  const [activeKeys, setActiveKeys] = useState<string[]>(args.defaultActiveKeys || []);
  
  return (
    <Accordion
      {...args}
      activeKeys={activeKeys}
      onChange={setActiveKeys}
    />
  );
};

export const Default: Story = {
  render: AccordionWrapper,
  args: {
    items: accordionItems
  }
};

export const WithIcons: Story = {
  render: AccordionWrapper,
  args: {
    items: accordionItemsWithIcons
  }
};

export const Multiple: Story = {
  render: AccordionWrapper,
  args: {
    items: accordionItems,
    multiple: true,
    defaultActiveKeys: ['item1']
  }
};

export const Bordered: Story = {
  render: AccordionWrapper,
  args: {
    items: accordionItems,
    variant: 'bordered'
  }
};

export const Filled: Story = {
  render: AccordionWrapper,
  args: {
    items: accordionItems,
    variant: 'filled'
  }
};

export const Small: Story = {
  render: AccordionWrapper,
  args: {
    items: accordionItems,
    size: 'sm'
  }
};

export const Large: Story = {
  render: AccordionWrapper,
  args: {
    items: accordionItems,
    size: 'lg'
  }
};

export const Animated: Story = {
  render: AccordionWrapper,
  args: {
    items: accordionItems,
    animate: true
  }
};

export const CSSStyled: Story = {
  render: AccordionWrapper,
  args: {
    items: accordionItems,
    useCss: true
  }
};

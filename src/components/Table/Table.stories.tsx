import type { Meta, StoryObj } from '@storybook/react';
import { Table, Column } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean' },
    striped: { control: 'boolean' },
    hoverable: { control: 'boolean' },
    bordered: { control: 'boolean' },
    useCss: { control: 'boolean' },
    animate: { control: 'boolean' },
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg'] 
    }
  }
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25, status: 'Inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35, status: 'Active' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 28, status: 'Pending' }
];

const columns: Column[] = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    width: '30%'
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    width: '40%'
  },
  {
    key: 'age',
    title: 'Age',
    dataIndex: 'age',
    width: '15%',
    align: 'center'
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    width: '15%',
    render: (value) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        value === 'Active' ? 'bg-green-100 text-green-800' :
        value === 'Inactive' ? 'bg-red-100 text-red-800' :
        'bg-yellow-100 text-yellow-800'
      }`}>
        {value}
      </span>
    )
  }
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns
  }
};

export const Striped: Story = {
  args: {
    data: sampleData,
    columns,
    striped: true
  }
};

export const Bordered: Story = {
  args: {
    data: sampleData,
    columns,
    bordered: true
  }
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true
  }
};

export const WithPagination: Story = {
  args: {
    data: sampleData,
    columns,
    pagination: {
      current: 1,
      pageSize: 2,
      total: 4,
      onChange: (page, pageSize) => console.log('Page:', page, 'PageSize:', pageSize)
    }
  }
};

export const Small: Story = {
  args: {
    data: sampleData,
    columns,
    size: 'sm'
  }
};

export const Large: Story = {
  args: {
    data: sampleData,
    columns,
    size: 'lg'
  }
};

export const Animated: Story = {
  args: {
    data: sampleData,
    columns,
    animate: true
  }
};

export const CSSStyled: Story = {
  args: {
    data: sampleData,
    columns,
    useCss: true
  }
};

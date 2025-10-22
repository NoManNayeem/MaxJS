import React from 'react';
import { motion } from 'framer-motion';

export interface Column<T = any> {
  key: string;
  title: string;
  dataIndex: string;
  render?: (value: any, record: T, index: number) => React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
}

export interface TableProps<T = any> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
  };
  rowKey?: string | ((record: T) => string);
  onRow?: (record: T, index: number) => {
    onClick?: () => void;
    onDoubleClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  };
  useCss?: boolean;
  animate?: boolean;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Table = <T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  pagination,
  rowKey = 'id',
  onRow,
  useCss = false,
  animate = true,
  striped = false,
  hoverable = true,
  bordered = false,
  size = 'md'
}: TableProps<T>) => {
  const getRowKey = (record: T, index: number): string => {
    if (typeof rowKey === 'function') {
      return rowKey(record);
    }
    return record[rowKey] || index.toString();
  };

  const getSizeClasses = () => {
    if (useCss) return '';
    
    const sizeMap = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };
    
    return sizeMap[size];
  };

  const getTableClasses = () => {
    if (useCss) return 'table';
    
    const baseClasses = 'w-full border-collapse';
    const sizeClasses = getSizeClasses();
    const borderClasses = bordered ? 'border border-gray-300' : '';
    
    return `${baseClasses} ${sizeClasses} ${borderClasses}`;
  };

  const getHeaderClasses = () => {
    if (useCss) return 'table-header';
    
    return 'bg-gray-50 text-gray-700 font-medium';
  };

  const getCellClasses = (align?: 'left' | 'center' | 'right') => {
    if (useCss) return 'table-cell';
    
    const alignMap = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    };
    
    return `px-4 py-3 ${alignMap[align || 'left']}`;
  };

  const getRowClasses = (index: number) => {
    if (useCss) return 'table-row';
    
    const baseClasses = 'border-b border-gray-200';
    const stripedClasses = striped && index % 2 === 0 ? 'bg-gray-50' : '';
    const hoverClasses = hoverable ? 'hover:bg-gray-100' : '';
    
    return `${baseClasses} ${stripedClasses} ${hoverClasses}`;
  };

  const TableComponent = animate ? motion.table : 'table';
  const TbodyComponent = animate ? motion.tbody : 'tbody';
  const TrComponent = animate ? motion.tr : 'tr';

  const motionProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  } : {};

  const rowMotionProps = animate ? {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.2 }
  } : {};

  if (loading) {
    return (
      <div className={useCss ? 'table-loading' : 'flex items-center justify-center py-8'}>
        <div className={useCss ? 'spinner' : 'animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'}></div>
        <span className={useCss ? 'loading-text' : 'ml-2 text-gray-600'}>Loading...</span>
      </div>
    );
  }

  return (
    <div className={useCss ? 'table-container' : 'overflow-x-auto'}>
      <TableComponent className={getTableClasses()} {...motionProps}>
        <thead>
          <tr className={getHeaderClasses()}>
            {columns.map((column) => (
              <th
                key={column.key}
                className={getCellClasses(column.align)}
                style={{ width: column.width }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <TbodyComponent {...motionProps}>
          {data.map((record, index) => {
            const key = getRowKey(record, index);
            const rowProps = onRow ? onRow(record, index) : {};
            
            return (
              <TrComponent
                key={key}
                className={getRowClasses(index)}
                {...rowMotionProps}
                {...rowProps}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={getCellClasses(column.align)}
                  >
                    {column.render
                      ? column.render(record[column.dataIndex], record, index)
                      : record[column.dataIndex]
                    }
                  </td>
                ))}
              </TrComponent>
            );
          })}
        </TbodyComponent>
      </TableComponent>
      
      {pagination && (
        <div className={useCss ? 'pagination' : 'flex justify-between items-center mt-4'}>
          <div className={useCss ? 'pagination-info' : 'text-sm text-gray-600'}>
            Showing {((pagination.current - 1) * pagination.pageSize) + 1} to{' '}
            {Math.min(pagination.current * pagination.pageSize, pagination.total)} of{' '}
            {pagination.total} entries
          </div>
          <div className={useCss ? 'pagination-controls' : 'flex space-x-2'}>
            <button
              onClick={() => pagination.onChange(pagination.current - 1, pagination.pageSize)}
              disabled={pagination.current <= 1}
              className={useCss ? 'pagination-button' : 'px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}
            >
              Previous
            </button>
            <span className={useCss ? 'pagination-current' : 'px-3 py-1 bg-blue-600 text-white rounded'}>
              {pagination.current}
            </span>
            <button
              onClick={() => pagination.onChange(pagination.current + 1, pagination.pageSize)}
              disabled={pagination.current * pagination.pageSize >= pagination.total}
              className={useCss ? 'pagination-button' : 'px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;

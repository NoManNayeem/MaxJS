import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface TabItem {
  key: string;
  label: string;
  children: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveKey?: string;
  activeKey?: string;
  onChange?: (key: string) => void;
  type?: 'line' | 'card' | 'button';
  size?: 'sm' | 'md' | 'lg';
  position?: 'top' | 'bottom' | 'left' | 'right';
  useCss?: boolean;
  animate?: boolean;
  centered?: boolean;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveKey,
  activeKey,
  onChange,
  type = 'line',
  size = 'md',
  position = 'top',
  useCss = false,
  animate = true,
  centered = false
}) => {
  const [internalActiveKey, setInternalActiveKey] = useState(
    activeKey || defaultActiveKey || items[0]?.key || ''
  );

  const currentActiveKey = activeKey || internalActiveKey;
  const activeIndex = items.findIndex(item => item.key === currentActiveKey);

  const handleTabClick = (key: string, disabled?: boolean) => {
    if (!disabled) {
      if (onChange) {
        onChange(key);
      } else {
        setInternalActiveKey(key);
      }
    }
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

  const getTabClasses = (item: TabItem, isActive: boolean) => {
    if (useCss) return 'tab-item';
    
    const baseClasses = 'flex items-center px-4 py-2 font-medium transition-all duration-200 cursor-pointer';
    const sizeClasses = getSizeClasses();
    const disabledClasses = item.disabled ? 'opacity-50 cursor-not-allowed' : '';
    const activeClasses = isActive ? 'text-blue-600 border-blue-600' : 'text-gray-600 hover:text-gray-800';
    
    return `${baseClasses} ${sizeClasses} ${disabledClasses} ${activeClasses}`;
  };

  const getTabListClasses = () => {
    if (useCss) return 'tab-list';
    
    const baseClasses = 'flex';
    const positionClasses = {
      top: 'flex-row',
      bottom: 'flex-row',
      left: 'flex-col',
      right: 'flex-col'
    };
    const typeClasses = {
      line: 'border-b border-gray-200',
      card: 'bg-gray-100 rounded-lg p-1',
      button: 'space-x-1'
    };
    const centeredClasses = centered ? 'justify-center' : '';
    
    return `${baseClasses} ${positionClasses[position]} ${typeClasses[type]} ${centeredClasses}`;
  };

  const getTabContentClasses = () => {
    if (useCss) return 'tab-content';
    
    const positionClasses = {
      top: 'mt-4',
      bottom: 'mb-4',
      left: 'ml-4',
      right: 'mr-4'
    };
    
    return positionClasses[position];
  };

  const getTabItemClasses = (item: TabItem, isActive: boolean) => {
    if (useCss) return 'tab-item';
    
    const baseClasses = 'flex items-center px-4 py-2 font-medium transition-all duration-200 cursor-pointer';
    const sizeClasses = getSizeClasses();
    const disabledClasses = item.disabled ? 'opacity-50 cursor-not-allowed' : '';
    
    let typeClasses = '';
    if (type === 'line') {
      typeClasses = isActive 
        ? 'text-blue-600 border-b-2 border-blue-600' 
        : 'text-gray-600 hover:text-gray-800 border-b-2 border-transparent';
    } else if (type === 'card') {
      typeClasses = isActive 
        ? 'bg-white text-blue-600 shadow-sm' 
        : 'text-gray-600 hover:text-gray-800';
    } else if (type === 'button') {
      typeClasses = isActive 
        ? 'bg-blue-600 text-white' 
        : 'bg-gray-200 text-gray-600 hover:bg-gray-300';
    }
    
    return `${baseClasses} ${sizeClasses} ${disabledClasses} ${typeClasses}`;
  };

  const TabComponent = animate ? motion.div : 'div';
  const TabListComponent = animate ? motion.div : 'div';
  const TabItemComponent = animate ? motion.div : 'div';

  const motionProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  } : {};

  const tabMotionProps = animate ? {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.2 }
  } : {};

  const contentMotionProps = animate ? {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  } : {};

  const renderTabList = () => (
    <TabListComponent className={getTabListClasses()} {...motionProps}>
      {items.map((item, index) => {
        const isActive = item.key === currentActiveKey;
        return (
          <TabItemComponent
            key={item.key}
            className={getTabItemClasses(item, isActive)}
            onClick={() => handleTabClick(item.key, item.disabled)}
            {...tabMotionProps}
          >
            {item.icon && (
              <span className={useCss ? 'tab-icon' : 'mr-2'}>
                {item.icon}
              </span>
            )}
            <span>{item.label}</span>
          </TabItemComponent>
        );
      })}
    </TabListComponent>
  );

  const renderTabContent = () => {
    const activeItem = items.find(item => item.key === currentActiveKey);
    if (!activeItem) return null;

    return (
      <TabComponent className={getTabContentClasses()} {...contentMotionProps}>
        {activeItem.children}
      </TabComponent>
    );
  };

  const renderTabs = () => {
    if (position === 'top') {
      return (
        <>
          {renderTabList()}
          {renderTabContent()}
        </>
      );
    } else if (position === 'bottom') {
      return (
        <>
          {renderTabContent()}
          {renderTabList()}
        </>
      );
    } else if (position === 'left') {
      return (
        <div className={useCss ? 'tabs-horizontal' : 'flex'}>
          {renderTabList()}
          {renderTabContent()}
        </div>
      );
    } else if (position === 'right') {
      return (
        <div className={useCss ? 'tabs-horizontal' : 'flex'}>
          {renderTabContent()}
          {renderTabList()}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={useCss ? 'tabs-container' : 'w-full'}>
      {renderTabs()}
    </div>
  );
};

export default Tabs;

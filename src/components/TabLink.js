import React from 'react';
import useTabContext from '../hooks/useTabContext';

function TabLink({ tab, className, children }) {
  const tabs = useTabContext();

  if (!tab) {
    return null;
  }

  const isExternal = typeof tab === 'string' && (tab.startsWith('http://') || tab.startsWith('https://'));

  if (isExternal) {
    return (
      <a href={tab} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  const handleClick = () => {
    tabs.addTab({ name: tab.name, extension: tab.extension, component: tab.component });
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

export default TabLink;

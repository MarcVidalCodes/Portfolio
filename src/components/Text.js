import classNames from 'classnames';
import React from 'react';

function Text({ as, className, children, style }) {
  const TextTag = as || 'p';

  const defaultClasses = "break-words";
  const mergedClasses = classNames(defaultClasses, className);

  // Merge inline styles
  const mergedStyles = {
    marginBottom: '2rem', // Adjust the value as needed
    ...style,
  };

  return (
    <TextTag className={mergedClasses} style={mergedStyles}>
      {children}
    </TextTag>
  );
}

export default Text;

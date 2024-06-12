import React from 'react';

function Project({ children }) {
  return (
    <div className="project-container flex flex-col gap-4 p-4">
      {children}
    </div>
  );
}

export default Project;

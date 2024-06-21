import React from 'react';

function ProjectPreview({ src, alt, width }) {
  return (
    <img
    style={{ width: width || '100%' }}
      className="h-auto rounded shadow-project mb-4"
      src={src}
      alt={alt}
    />
  );
}

export default ProjectPreview;

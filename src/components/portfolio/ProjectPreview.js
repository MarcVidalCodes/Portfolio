import React from 'react';

function ProjectPreview({ src, alt }) {
  return (
    <img
      className="w-full h-auto rounded shadow-project mb-4"
      src={src}
      alt={alt}
    />
  );
}

export default ProjectPreview;

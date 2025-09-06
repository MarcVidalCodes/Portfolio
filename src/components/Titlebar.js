// src/components/Titlebar.js
import React, { useState, useEffect } from 'react';
import vscodeIcon from '../assets/images/vscode_icon.svg';

function Titlebar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showMenuItems = windowWidth >= 921;
  const isMobile = windowWidth < 768; 

  return (
    <>
      {/* Desktop Header */}
      {!isMobile && (
        <div className="bg-dark-600 text-white flex items-center justify-between px-4 py-2 h-8 relative">
          <div className="flex items-center space-x-4">
            <img src={vscodeIcon} alt="VS Code Icon" className="w-4 h-4" />
            {showMenuItems && (
              <>
                <p className="text-sm">File</p>
                <p className="text-sm">Edit</p>
                <p className="text-sm">View</p>
                <p className="text-sm">Go</p>
                <p className="text-sm">Run</p>
                <p className="text-sm">Terminal</p>
                <p className="text-sm">Help</p>
              </>
            )}
          </div>

          {/* Center title */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="text-sm">Marc Vidal - Visual Studio Code</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-4 h-4" style={{ backgroundColor: '#FFD700', borderRadius: '50%', border: '1px solid var(--dark-700)' }}></span>
            <span className="w-4 h-4" style={{ backgroundColor: '#008000', borderRadius: '50%', border: '1px solid var(--dark-700)' }}></span>
            <span className="w-4 h-4" style={{ backgroundColor: '#FF0000', borderRadius: '50%', border: '1px solid var(--dark-700)' }}></span>
          </div>
        </div>
      )}
      {!isMobile && <div className="h-0.5 bg-gray-600"></div>}
    </>
  );
}

export default Titlebar;
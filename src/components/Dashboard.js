import React, { useEffect, useRef } from 'react';
import Sidebar from './sidebar/Sidebar';
import NoTabs from './NoTabs';
import useTabContext from '../hooks/useTabContext';
import Drawer from './sidebar/Drawer';
import { useToggle } from '../hooks/useToggle';
import { Bars3Icon } from '@heroicons/react/20/solid';
import Navbar from './Navbar';
import DirectoryList from './sidebar/DirectoryList';
import { directory } from '../utils/directory';
import TitleBar from './Titlebar'; 
import Footer from './Footer'; 

function Dashboard() {
  const tabs = useTabContext();
  const tabRef = useRef(null);
  const [drawerOpen, toggleDrawer] = useToggle(false);
  const [sidebarOpen, toggleSidebar] = useToggle(true);

  // Reset Tab Component scroll when tab changes
  useEffect(() => {
    if (tabRef.current) {
      tabRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [tabs]);

  // Keyboard shortcut listeners
  useEffect(() => {
    const keyboardShortcuts = (e) => {
      if (e.key === 'b' && e.metaKey) {
        window.innerWidth < 768 ? toggleDrawer() : toggleSidebar();
      }
    };

    window.addEventListener('keydown', keyboardShortcuts);

    return () => window.removeEventListener('keydown', keyboardShortcuts);
  }, [toggleSidebar, toggleDrawer]);

  return (
    <div className="font-sans min-h-screen h-full md:h-screen flex flex-col overflow-hidden">
      {/* Title Bar */}
      <TitleBar />

      {/* Main content with Sidebar and Drawer */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="md:block hidden bg-dark-600 border-r-2 border-dark-400">
          <button onClick={toggleSidebar} className="min-h-[50px] min-w-[50px] bg-dark-600 flex items-center px-3 outline-none group">
            <Bars3Icon className="text-white-50a w-6 h-6 group-focus:text-white-75a" />
          </button>
          <Sidebar open={sidebarOpen}>
            <DirectoryList directory={directory} />
          </Sidebar>
        </div>

        {/* Mobile Drawer */}
        <Drawer isOpen={drawerOpen} toggle={toggleDrawer}>
          <DirectoryList directory={directory} callback={toggleDrawer} />
        </Drawer>

        {/* Main content and navbar */}
        <div className="flex-1 flex flex-col w-full overflow-hidden mt-[90px] md:mt-0">
          <Navbar toggleDrawer={toggleDrawer} />

          {tabs.current ?
            <div ref={tabRef} className="font-mono pt-[32px] pb-[100px] px-4 md:px-9 overflow-y-auto flex-1">
              <div className="max-w-[1200px]">
                {tabs.current.component}
              </div>
            </div> :
            <NoTabs />
          }
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;


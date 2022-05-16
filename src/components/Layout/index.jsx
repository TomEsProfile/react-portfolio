import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Profile from '../../components/Profile';
import useBreakpoints from '../../custom/useBreakpoint';
import './index.scss';

export default function Layout() {
  // hook to get the current breakpoint of screen size
  const point = useBreakpoints();

  function getPageIntent(mlSm = 0, mlLg = 16) {
    console.log(point);
    if (point === 'xs' || point === 'sm') {
      return `ml-${mlSm}`;
    } else return `ml-${mlLg}`;
  }

  return (
    <>
      {/* ! needed so tailwind loads the used styles */}
      <span className="hidden ml-4 ml-8 ml-16"></span>

      <div className="flex">
        <Sidebar />
        <main
          className={`ml-0 md:ml-32 min-h-screen flex flex-col justify-center`}
        >
          <span className="text-6xl pl-8 color-secondary font-secondary font-light py-8">
            &lt;body&gt;
          </span>
          <div className="page flex">
            <Outlet />
          </div>
          <span className="text-6xl pl-8 color-secondary font-secondary font-light pt-8">
            &lt;/body&gt;
          </span>
          <span className="text-6xl color-secondary font-secondary font-light pb-4">
            &lt;/html&gt;
          </span>
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
}

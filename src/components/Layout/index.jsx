import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Profile from '../../components/Profile';
import './index.scss';

export default function Layout() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="ml-28">
          <span className="text-6xl px-16 text-indigo-400 font-secondary font-light py-8">
            &lt;body&gt;
          </span>
          <div className="page flex">
            <Outlet />
          </div>
          <span className="text-6xl px-16 text-indigo-400 font-secondary font-light pt-8">
            &lt;/body&gt;
          </span>
          <span className="text-6xl px-5 text-indigo-400 font-secondary font-light pb-4">
            &lt;/html&gt;
          </span>
        </main>
      </div>
      <Footer />
    </>
  );
}

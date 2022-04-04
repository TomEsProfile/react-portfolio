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
        <main className="ml-16">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

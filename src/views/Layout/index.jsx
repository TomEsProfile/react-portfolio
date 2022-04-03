import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Profile from '../Profile';
import './index.scss';

export default function Layout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FaIdCard } from 'react-icons/fa';
import './index.scss';

export default function Sidebar() {
  return (
    <nav className="h-full">
      <Link className="logo" to="/">
        <FaIdCard />
      </Link>
    </nav>
  );
}

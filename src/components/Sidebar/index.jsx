import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaIdCard,
  FaHome,
  FaUserTie,
  FaLinkedin,
  FaGithub,
  FaSkype,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import './index.scss';

export default function Sidebar() {
  return (
    <nav className="h-full p-3 fixed top-0 flex flex-col justify-between gap-2 bg-zinc-900">
      <FaIdCard className="logo text-gray-500 text-xl" />

      <div className="flex flex-col gap-4">
        <NavLink
          className={({ isActive }) =>
            `text-${isActive ? 'yellow' : 'gray'}-500`
          }
          to="/"
        >
          <FaHome className="text-xl" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-${isActive ? 'yellow' : 'gray'}-500`
          }
          to="/profile"
        >
          <FaUserTie className="text-xl" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-${isActive ? 'yellow' : 'gray'}-500`
          }
          to="/contact"
        >
          <MdEmail className="text-xl" />
        </NavLink>
      </div>

      <div className="nav-socials flex flex-col gap-4 mx-auto">
        <Link to="/">
          <FaLinkedin className="text-gray-500 text-xs" />
        </Link>
        <Link to="/">
          <FaGithub className="text-gray-500 text-xs" />
        </Link>
        <Link to="/">
          <FaSkype className="text-gray-500 text-xs" />
        </Link>
      </div>
    </nav>
  );
}

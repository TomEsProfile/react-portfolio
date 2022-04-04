import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';

import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faEnvelope,
  faIdCard,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';

const navLinks = [
  { path: '/', name: 'Home', icon: faHome },
  { path: '/profile', name: 'About', icon: faUser },
  { path: '/contact', name: 'Contact', icon: faEnvelope },
];

export default function Sidebar() {
  return (
    <nav className="h-full w-14 fixed top-0 pt-3 flex flex-col justify-between items-center gap-2 bg-zinc-900 text-center">
      <FontAwesomeIcon
        icon={faIdCard}
        className="logo text-yellow-500 text-xl"
      />

      <div className="flex flex-col items-center gap-4 w-full">
        {navLinks.map(({ path, name, icon }) => (
          <NavLink
            data-hover={name}
            className={({ isActive }) =>
              `text-${isActive ? 'yellow' : 'gray'}-500 relative w-full`
            }
            to={path}
          >
            <FontAwesomeIcon icon={icon} className="text-xl" />
          </NavLink>
        ))}
      </div>

      <div className="nav-socials flex flex-col items-center gap-2 pb-3 w-full text-xs text-center text-gray-500">
        <Link data-hover="linkedIn" to="/" className="relative w-full">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
        <Link data-hover="GitHub" to="/" className="relative w-full">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link data-hover="Skype" to="/" className="relative w-full">
          <FontAwesomeIcon icon={faSkype} />
        </Link>

        <div className="text-xs pt-2 font-bold ">
          <sub>&copy; 2022</sub>
        </div>
      </div>
    </nav>
  );
}

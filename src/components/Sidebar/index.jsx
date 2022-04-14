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
    <nav className="h-full w-16 md:w-24 fixed top-0 pt-3 flex flex-col justify-between items-center gap-2 bg-zinc-900 text-center">
      <FontAwesomeIcon
        icon={faIdCard}
        className="logo color-primary text-2xl"
      />

      <div className="nav-links flex flex-col items-center gap-8 px-0 w-full">
        {navLinks.map(({ path, name, icon }) => (
          <NavLink
            key={path}
            data-hover={name}
            className={({ isActive }) =>
              `${
                isActive ? 'color-primary' : 'text-gray-500'
              } relative w-full after:content-[attr(data-hover)] after:color-primary after:text-3xl after:md:text-4xl`
            }
            to={path}
          >
            <FontAwesomeIcon icon={icon} className="text-3xl md:text-5xl" />
          </NavLink>
        ))}
      </div>

      <div className="nav-socials flex flex-col items-center gap-8 pb-3 w-full text-xs text-center text-gray-500">
        <a
          data-hover="linkedIn"
          href="https://www.linkedin.com/in/tms-schmidt/"
          className="relative w-full after:content-[attr(data-hover)] after:color-primary after:text-xl after:md:text-2xl"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="text-xl md:text-2xl"
          />
        </a>
        <Link
          data-hover="GitHub"
          to="/"
          className="relative w-full after:content-[attr(data-hover)] after:color-primary after:text-xl after:md:text-2xl"
        >
          <FontAwesomeIcon icon={faGithub} className="text-xl md:text-2xl" />
        </Link>
        <Link
          data-hover="Skype"
          to="/"
          className="relative w-full after:content-[attr(data-hover)] after:color-primary after:text-xl after:md:text-2xl"
        >
          <FontAwesomeIcon icon={faSkype} className="text-xl md:text-2xl" />
        </Link>

        <div className="md:text-lg pt-6 font-bold ">&copy; 2022</div>
      </div>
    </nav>
  );
}

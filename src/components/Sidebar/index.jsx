import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import useBreakpoints from '../../custom/useBreakpoint';
import ProfilePic from '../../assets/imgs/profile-pic-a.jpg';

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

import { RiGithubLine } from 'react-icons/ri';

const navLinks = [
  { path: '/', name: 'Home', icon: faHome },
  { path: '/profile', name: 'About', icon: faUser },
  { path: '/contact', name: 'Contact', icon: faEnvelope },
];

export default function Sidebar() {
  // hook to get the current breakpoint of screen size
  const point = useBreakpoints();

  function getPositioningStyle() {
    // console.log(point);
    if (point === 'xs' || point === 'sm') {
      return `fixed bottom-0 inset-x-0 flex w-full h-16 md:h-24`;
    } else return `fixed top-0 flex ${getFlexDirection()} h-full w-16 md:w-24`;
  }

  function getFlexDirection(gapSm = 2, gapLg = 4) {
    // console.log(point);
    if (point === 'xs' || point === 'sm') {
      return ` gap-${gapSm}`;
    } else return `flex-col gap-${gapLg}`;
  }

  return (
    <>
      <nav
        className={`${getPositioningStyle()} justify-between items-center gap-2 bg-zinc-900 text-center`}
      >
        {/* ! needed so tailwind loads the used styles */}
        <span className="hidden gap-4 gap-8 gap-10"></span>
        <img
          src={ProfilePic}
          alt=""
          className="w-12 md:w-16 ml-2 md:ml-0 md:mt-2 rounded-full"
        />
        {/* {point} */}

        <div
          className={`nav-links flex ${getFlexDirection(
            8,
            10
          )} items-center pl-8 md:pl-0 md:pt-28 w-48`}
        >
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
              <FontAwesomeIcon icon={icon} className={`text-3xl md:text-5xl`} />
            </NavLink>
          ))}
        </div>

        <div
          className={`nav-socials flex ${getFlexDirection(
            0,
            8
          )} items-center md:pb-3 w-28 text-xs text-center text-gray-500`}
        >
          <a
            data-hover={`linkedIn`}
            href={`https://www.linkedin.com/in/tms-schmidt/`}
            className={`relative w-full after:content-[attr(data-hover)] after:color-primary after:text-lg after:md:text-2xl`}
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className={`text-lg md:text-2xl`}
            />
          </a>
          <a
            data-hover={`GitHub`}
            href={`https://github.com/TomEsDE`}
            className={`relative w-full after:content-[attr(data-hover)] after:color-primary after:text-lg after:md:text-2xl`}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={`text-lg md:text-2xl`}
            />
          </a>
          <a
            data-hover={`Org`}
            href={`https://github.com/TomEsProfile`}
            className={`relative w-full after:content-[attr(data-hover)] after:color-primary after:text-lg after:md:text-2xl`}
          >
            <RiGithubLine className={`text-xl md:text-3xl inline-block`} />
          </a>

          {point !== 'xs' && point !== 'sm' && (
            <div className={`md:text-lg pt-6 font-bold `}>&copy; 2022</div>
          )}
        </div>
      </nav>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FaIdCard } from 'react-icons/fa';
import './index.scss';
import LogoTitle from '../../assets/imgs/trivium-art-history.svg';

export default function Home() {
  return (
    <div className="home flex items-center text-7xl md:text-7xl pl-6 md:pl-24">
      <div className="font-bold">
        Hi, <br />
        I'm
        <div className="inline-flex w-40 relative">
          <img src={LogoTitle} alt="" className="absolute" />
          <span className="opacity-1 ml-24">homas</span>
        </div>
        <br />
        web developer
        {/* full stack web developer */}
      </div>
    </div>
  );
}

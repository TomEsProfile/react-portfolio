import React from 'react';
import { Link } from 'react-router-dom';
import { FaIdCard } from 'react-icons/fa';
import './index.scss';
import LogoTitle from '../../assets/imgs/trivium-art-history.svg';

export default function Home() {
  return (
    <div className="home flex items-center px-28">
      <div className="font-bold relative">
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

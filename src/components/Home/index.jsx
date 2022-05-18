import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaIdCard } from 'react-icons/fa';
import './index.scss';
import LogoTitle from '../../assets/imgs/trivium-art-history.svg';
import AnimatedLetters from '../AnimatedLetters';

const textArray = ['Hi,', "I'm", 'homas', 'a web developer'];

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <div className="home self-center flex flex-col h-full justify-center text-5xl md:text-7xl pl-12 md:pl-32">
      <div className="font-bold relative">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={textArray[0].split('')}
          idx={1}
        />
        <div className="flex">
          <span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={textArray[1].split('')}
              idx={textArray[0].length}
            />
          </span>
          <div className="inline-flex w-28 md:w-40 relative -z-10">
            <img
              src={LogoTitle}
              alt=""
              className="absolute -top-9 md:-top-11"
            />
          </div>
          <span className="-ml-8 md:-ml-10">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={textArray[2].split('')}
              idx={textArray[1].length + 3}
            />
          </span>
        </div>

        <AnimatedLetters
          letterClass={letterClass}
          strArray={textArray[3].split('')}
          idx={textArray[2].length}
        />
        {/* Hi, <br />
        I'm
        <div className="inline-flex w-40 relative">
          <img src={LogoTitle} alt="" className="absolute -top-14 md:-top-5" />
          <span className="opacity-1 ml-24">homas</span>
        </div>
        <br />
        web developer
        full stack web developer */}
      </div>

      <h2 className="border-b border-dashed border-b-gray-400 text-xs md:text-base">
        Full Stack Web Developer / React / NodeJS
      </h2>
      <Link to="/contact" className="flat-button w-fit">
        CONTACT ME
      </Link>
    </div>
  );
}

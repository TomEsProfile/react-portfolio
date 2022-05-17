import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaIdCard } from 'react-icons/fa';
import './index.scss';
import LogoTitle from '../../assets/imgs/trivium-art-history.svg';
import AnimatedLetters from '../AnimatedLetters';

const textArray = ['Hi,', "I'm Thomas", 'a web developer'];

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <div className="home self-center flex flex-col h-full justify-center text-5xl md:text-7xl pl-12 md:pl-32">
      <div className="font-bold">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={textArray[0].split('')}
          idx={1}
        />
        <AnimatedLetters
          letterClass={letterClass}
          strArray={textArray[1].split('')}
          idx={textArray[0].length}
        />
        <AnimatedLetters
          letterClass={letterClass}
          strArray={textArray[2].split('')}
          idx={textArray[1].length}
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

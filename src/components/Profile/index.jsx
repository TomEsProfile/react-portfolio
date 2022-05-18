import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

export default function Profile() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);
  }, []);

  return (
    <div className="profile container w-full flex flex-col lg:flex-row gap-12 pl-12 md:pl-24 pr-8 overflow-hidden">
      {/* About me */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl mb-10 whitespace-nowrap">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'About me'.split('')}
            idx={5}
          />
        </h1>
        <p className="profile-text color-3 text-xl md:text-2xl hiddenn sm:block">
          Analytical and detail-oriented web developer with an affinity for
          designing and delivering elegant, user-friendly solutions. Strengths
          in the development of backend-oriented applications with persistent
          data management. Solid basic knowledge of cloud-based app deployments
          and database management. OOP experienced due to my Java/JEE background
          from some years ago.
        </p>
      </div>
      {/* Tech Stack */}
      <div className="techstack w-full lg:w-1/2 flex justify-center items-center -top-32 -left-52 lg:-top-16 lg:-left-72 lg:h-orbit">
        <div className="container scale-75 md:scale-100">
          <div className="logo"></div>

          <div className="inner"></div>

          <div className="middle dots">
            {techstackBack.map((item) => (
              <div key={item.icon} className={`dot icon-${item.icon}`}></div>
            ))}
          </div>

          <div className="middle tooltips">
            {techstackBack.map((item) => (
              <div key={item.icon} className="target">
                <div className="tooltip">{item.tooltip}</div>
              </div>
            ))}
          </div>

          <div className="outer dots">
            {techstackFront.map((item) => (
              <div key={item.icon} className={`dot icon-${item.icon}`}></div>
            ))}
          </div>

          <div className="outer tooltips">
            {techstackFront.map((item) => (
              <div key={item.icon} className="target">
                <div className="tooltip">{item.tooltip}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const techstackFront = [
  {
    icon: 'html5',
    tooltip: 'Html-5',
  },
  {
    icon: 'css3',
    tooltip: 'CSS3',
  },
  {
    icon: 'react',
    tooltip: 'React',
  },
  {
    icon: 'tailwind',
    tooltip: 'Tailwind',
  },
];

const techstackBack = [
  {
    icon: 'nodejs',
    tooltip: 'Node-JS',
  },
  {
    icon: 'express',
    tooltip: 'Express-JS',
  },
  {
    icon: 'mongodb',
    tooltip: 'MongoDB',
  },
  {
    icon: 'js',
    tooltip: 'JavaScript',
  },
];

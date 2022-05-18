import React from 'react';
import './index.scss';

export default function Profile() {
  return (
    <div className="profile flex justify-center">
      <div className="container scale-75 md:scale-100 -left-32 md:left-0">
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

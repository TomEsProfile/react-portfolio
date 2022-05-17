import React from 'react';
import './index.scss';

export default function Profile() {
  return (
    <div className="profile">
      <div className="container">
        <div className="logo">My tech stack</div>

        <div className="inner"></div>

        <div className="middle dots">
          <div className="dot icon-buch"></div>
          <div className="dot icon-film"></div>
        </div>

        <div className="outer dots">
          <div className="dot icon-kompass"></div>
          <div className="dot icon-screen"></div>
        </div>

        <div className="middle tooltips">
          <div className="target">
            <div className="tooltip">Klassische Medien</div>
          </div>
          <div className="target">
            <div className="tooltip">Filme & Videos</div>
          </div>
        </div>

        <div className="outer tooltips">
          <div className="target">
            <div className="tooltip">Strategie & Beratung</div>
          </div>
          <div className="target">
            <div className="tooltip">Digitale Medien</div>
          </div>
        </div>

        {/* <div className="menu">
          <div>
            <div>
              <div className="icon icon-screen"></div>
              <h2>Digitale Medien</h2>
              <ul>
                <li>Webkonzeption und -design</li>
                <li>Online-Shops</li>
                <li>Soical-Media-Marketing (SMM)</li>
                <li>Display Advertising / Werbebanner</li>
                <li>E-Mail-Marketing / Newsletter</li>
                <li>Suchmaschinenmarketing (SEM)</li>
                <li>Suchmaschinenoptimierung (SEO)</li>
                <li>Content Management Systeme</li>
                <li>Intranet- und Extranet-Lösungen</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

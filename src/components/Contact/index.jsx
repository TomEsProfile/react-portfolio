import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// ! bei leaflet unbeding diese css einbinden
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

// https://github.com/PaulLeCam/react-leaflet/issues/453
import L from 'leaflet';
import CustomMarker from '../Map/CustomMarker';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const posBT = [49.95747, 11.617827];

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();
  const markerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);

    setTimeout(() => {
      showMarkerPopup(markerRef.current);
    }, 2000);
  }, []);

  const showMarkerPopup = (marker) => {
    if (marker) {
      marker.openPopup();
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        'template_rvg4set',
        form.current,
        process.env.REACT_APP_EMAILJS_TOKEN
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <>
      <div className="container contact-page w-full flex flex-col md:flex-row gap-12 pl-12 md:pl-24 pr-8">
        {/* CONTACT */}
        <div className="text-zone w-full md:w-1/2">
          <h1 className="text-5xl md:text-7xl mb-10 whitespace-nowrap">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact me'.split('')}
              idx={5}
            />
          </h1>
          <p className="contact-text color-3 text-base hidden sm:block">
            I am interested in freelance opportunities - fullstack, frontend or
            backend. However, if you have other requests or questions, don't
            hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="ul flex flex-col gap-2">
                <div className="w-full flex flex-col lg:flex-row gap-2">
                  <div className="li w-full lg:w-1/2 half">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="li w-full lg:w-1/2 half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                </div>
                <div className="li">
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="li">
                  <textarea
                    className="sm:h-36 lg:h-60 xl:h-64"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div>
                  <input type="submit" className="flat-button" value="SEND" />
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* MAP */}
        <div className="map-wrap flex justify-center relative mt-0 md:mt-28 w-full md:w-1/2 h-72 md:h-3/4">
          {/* <div className="info-map hiddenn sm:block text-right shadow-lg text-md md:text-base lg:text-xl p-2 md:p-4 lg:p-8">
            Thomas Schmidt
            <br />
            95448 Bayreuth <br />
            Bavaria, Germany <br />
            <span className="mt-2 font-bold">ts75.business@gmail.com</span>
          </div> */}
          <div className="info-map flex flex-row hiddenn shadow-lg text-md md:text-base lg:text-xl bg-transparent">
            <div className="rounded-l-lg w-1/2 bg-amber-800 bg-opacity-80 color-41 flex flex-col py-1 px-3 md:p-3 lg:p-4">
              <div>Thomas Schmidt</div>
              <div className="mt-1 font-bold text-sm">
                <a href="mailto:ts75.business@gmail.com">mailto:gmail</a>
              </div>
            </div>
            <div className="rounded-r-lg w-1/2 bg-white bg-opacity-50 color-5 flex flex-col text-right py-1 px-3 md:p-3 lg:p-4">
              <div>95448 Bayreuth</div>
              <div className="mt-1">Bavaria, Germany</div>
            </div>
          </div>
          <MapContainer
            center={posBT}
            zoom={11}
            className="w-full relative"
            zoomControl={false}
            // whenReady={() => setMapReady(true)}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker ref={markerRef} position={posBT}>
              <Popup closeButton={false} closeOnClick={true} autoPan={true}>
                <span className="flex gap-1 items-center">
                  <span className="text-4xl">☕️</span>I live here! Come over
                  for a cup of coffee :)
                </span>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;

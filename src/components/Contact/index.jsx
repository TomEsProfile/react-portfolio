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
    }, 3000);

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
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
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
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={5}
            />
          </h1>
          <p className="color-3 text-base hidden sm:block">
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
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
        <div className="map-wrap relative mt-0 md:mt-28 w-full md:w-1/2 h-72 md:h-3/4">
          <div className="info-map hidden sm:block">
            Thomas Schmidt,
            <br />
            Germany,
            <br />
            95448 Bayreuth <br />
            Bavaria <br />
            <br />
            <span>schmiddla@gmail.com</span>
          </div>
          <MapContainer
            center={posBT}
            zoom={11}
            className="w-full"
            // whenReady={() => setMapReady(true)}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker ref={markerRef} position={posBT}>
              <Popup closeButton={false} closeOnClick={true} autoPan={true}>
                <span className="flex gap-1 items-center">
                  <span className="text-lg">☕️</span> Thomas lives here, come
                  over for a cup of coffee :)
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

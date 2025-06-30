import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Menu.css";
import MenuItems from "./MenuItems";
import music from "../audio/LEEONA_-_LEEONA_-_Do_I.mp3"; 

function Menu() {
  const [clicked, setClicked] = useState(false);
  const [partyMode, setPartyMode] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  useEffect(() => {
    if (clicked) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [clicked]);

  useEffect(() => {
    if (partyMode) {
      audioRef.current?.play();

      intervalRef.current = setInterval(() => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.background = randomColor;
      }, 500);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      audioRef.current?.pause();
      audioRef.current.currentTime = 0;
      document.body.style.background = ""; 
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [partyMode]);

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [lightMode]);

  return (
    <nav className="menu-items">
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'menu menu-active' : 'menu'}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.url}
              className={item.cName}
              activeClassName="active"
              onClick={closeMenu}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="party-button-ul">
        <li>
          <button
            onClick={() => setLightMode(prev => !prev)}
            className={`light-btn ${lightMode ? 'active' : ''}`}
            title={lightMode ? 'Light Off' : 'Light On'}
          >
           🔦
          </button>
        </li>
        <li>
          <button
            onClick={() => setPartyMode(prev => !prev)}
            className={`party-btn ${partyMode ? 'active' : ''}`}
            title={partyMode ? 'Stop Party' : 'Start Party'}
          >
            🎵
          </button>
        </li>
      </ul>

      <audio ref={audioRef} src={music} />
    </nav>
  );
}

export default Menu;

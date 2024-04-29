import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Menu.css";
import MenuItems from "./MenuItems";

function Menu() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="menu-items">
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'menu-active' : 'menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.url} activeClassName="active" className={item.cName}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  )
};

export default Menu;

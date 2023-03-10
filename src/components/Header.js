import React from 'react';
import './header.css';
import icon4 from '../assets/img/icon4.png';
 
const Header = () => {
  return ( 
    <header className="portada">
      <span className="logo"><img src={icon4} alt="icono" /></span>
      <h1 className="titulo">Hola, soy Alejandro!</h1>
    </header>
   );
}
 
export default Header;

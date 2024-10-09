import React from 'react';

function Header() {
  return (
    <header>
     <img src={process.env.PUBLIC_URL + 'icono.png'} alt="Icono de la panadería" className="header-icon" />
      <h1>Bienvenidos a nuestra Panadería Pancolombia</h1>
    </header>
  );
}

export default Header;

import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
         <li>
          <a href="/">Perfil</a>
        </li>
        <li>
          <a href="/">Mensagens</a>
        </li>
        <li>
          <a href="/">Serviços</a>
        </li>
        <li>
          <a href="/">Contactos</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;

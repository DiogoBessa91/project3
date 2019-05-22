import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
    			<div>
          <img className="profileLogo" src="/images/fox.jpeg"/>
				<h1>Diogo Bessa</h1>
			</div>

      <ul>
         <li>
          <a href="/Profile">Perfil</a>
        </li>
        <li>
          <a href="/Messages">Mensagens</a>
        </li>
        <li>
          <a href="/Services">Serviços</a>
        </li>
        <li>
          <a href="/Events">Eventos</a>
        </li>
        <li>
          <a href="/Contacts">Contactos</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;

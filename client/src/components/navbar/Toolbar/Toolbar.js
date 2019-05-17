import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">CA comunidade</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/">Perfil</a></li>
                <li><a href="/">Mensagens</a></li>
                <li><a href="/">Serviços</a></li>
                <li><a href="/">Contactos</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;

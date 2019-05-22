import React from 'react';
import { NavLink } from 'react-router-dom';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="../Home">CA comunidade</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><NavLink to="/Profile" exact>Perfil</NavLink></li>
                <li><NavLink to="/Messages" exact>Mensagens</NavLink></li>
                <li><NavLink to="/Services" exact>Serviços</NavLink></li>
                <li><NavLink to="/Events" exact>Eventos</NavLink></li>
                <li><NavLink to="/Contacts" exact>Contactos</NavLink></li>
                <li><img src="/images/fox.jpeg"/></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;

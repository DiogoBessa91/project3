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
        <div className="toolbar__logo"><a href="../Home"><img src="https://scontent.flis5-1.fna.fbcdn.net/v/t1.0-9/49372256_1842679899174505_5199104881570349056_n.png?_nc_cat=101&_nc_ht=scontent.flis5-1.fna&oh=bec70d6daddcd97a3fea2d05ab50d789&oe=5D9ECC44" width="15%" />comunidade</a></div>
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

import React from 'react';
import {Link} from "react-router-dom";

const MobileMenu = (props) => {

  let drawerClass = 'mobile_menu__nav' 
  
  if (props.show) {
      drawerClass = 'mobile_menu__nav open'
  }

  return (
    <nav className={drawerClass}>
      <li>
        <div className="menu__burger open" onClick={props.drawerHandleClose}><span></span></div>
      </li>
      <ul>
      <li className="medium--bold--uppercase">
        <Link to="/">Inicio</Link>
      </li>

      <li className="medium--bold--uppercase">
        <Link to="/categorias">Categorias</Link>
      </li>
      <li className="medium--bold--uppercase">
        <Link to="/">Salas</Link>
      </li>
      <li className="medium--bold--uppercase">
        <Link to="/agenda">Agenda</Link>
      </li>
      <li className="medium--bold--uppercase">
        <Link to="/">TL Magazine</Link>
      </li>
      <li className="medium--bold--uppercase mobile_menu__nav--language">
        <form>
          <select name="locale" id="locale" className="mobile_select--languages medium--bold--uppercase">
          <option className="text--black" value="en">en</option>
          <option className="text--black" value="pt">pt</option>
          <option className="text--black" value="es">es</option>
          </select>
          <span><i className="fa fa-angle-down"></i></span>
        </form>
      </li>
    </ul>
  </nav>
  );
}

export default MobileMenu;
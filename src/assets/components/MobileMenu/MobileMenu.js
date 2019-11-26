import React from 'react';
import logo from '../../../images/logo.png'

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
        <a href="/"><img alt="logo" src={logo} /></a>
      </li>

      <li className="medium--bold--uppercase">
        <a href="/">Categorias</a>
      </li>
      <li className="medium--bold--uppercase">
        <a href="/">Salas</a>
      </li>
      <li className="medium--bold--uppercase">
        <a href="/">Agenda</a>
      </li>
      <li className="medium--bold--uppercase">
        <a href="/">TL Magazine</a>
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
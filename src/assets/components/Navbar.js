import React from 'react';
import logo from '../../images/logo.png';
import 'font-awesome/css/font-awesome.min.css';
import DrawerButton from './DrawerButton/DrawerButton'

const Navbar = (props) => {

  return (
    <div className="website_nav--dark">
      <nav className="website_nav">
        <ul className="website_nav__list">
        <div className="website_nav__links">
          <li>
            <DrawerButton click={props.drawerClickHandler}/>
          </li>

          <li>
          <a href="/"><img alt="logo" src={logo} /></a>
          </li>

          <span className="website_nav__pages">
          <li className="website_nav__links--dark">
            <a href="/" className="small--bold--uppercase">Categorias</a>
          </li>

          <li className="website_nav__links--dark">
            <a href="/" className="small--bold--uppercase">Salas</a>
          </li>

          <li className="website_nav__links--dark">
            <a href="/" className="small--bold--uppercase">Agenda</a>
          </li>

          <li className="website_nav__links--dark website_nav__magazine">
            <a href="/" className="small--bold--uppercase">TL Magazine</a>

            <div className="dropdown__content">
            <a href="/" className="primary_button small_button">Ver todas as edições</a>
            </div>
          </li>
          </span>
        </div>

        <div className="mobile_icons">
          <li className="website_nav__search">
          <form id="search_bar" className="search__bar">
            <input readOnly type="text" name="search" id="search" value="" placeholder="Pesquise por eventos, artistas ou salas" className="input--light" />
            <a href="/">
              <i className="fa fa-search website_nav__icons website_nav__icons--search fa-fw" style={styles.iconWidth}></i>
            </a>
          </form>
          </li>

          <li className="search__bar--mobile">
          <a href="/"><i className="fa fa-search website_nav__icons fa-fw" style={styles.iconWidth}></i></a>
          </li>

          <li>
          <a href="/"><i className="fa fa-heart website_nav__icons fa-fw" style={styles.iconWidth}></i></a>
          </li>

          <li>
          <a href="/"><i className="fa fa-shopping-cart website_nav__icons fa-fw" style={styles.iconWidth}></i></a>
          </li>
          
          <li>
          <a href="/" className="active">
            <i className="fa fa-user website_nav__icons fa-fw" style={styles.iconWidth}></i>
          </a>
          </li>

          <li className="website_nav__language">
          <form readOnly>
            <select name="locale" id="locale" className="select--languages">
            <option value="en">en</option>
            <option value="en">pt</option>
            <option value="en">es</option>
            </select>

            <div className="select__arrow--language select__arrow--light"></div>
          </form>
          </li>
        </div>
        </ul>
      </nav>
    </div>
  );
}

var styles = {
  iconWidth: {
    width: 'auto'
  }
  }

export default Navbar
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Sidebar = () => {
  return (
    <div className="column sidebar">
      <div className="sidebar__container">
        <div className="sidebar__content">
        <ul className="sidebar__list">
          <li className="sidebar__links tiny--bold--uppercase sidebar-active"><a href="/"><span><i className="fa fa-ticket-alt fa-fw"></i></span>Bilhetes</a></li>
          <li className="sidebar__links tiny--bold--uppercase"><a href="/"><span><i className="fa fa-clock fa-fw"></i></span>Fila de espera</a></li>
          <li className="sidebar__links tiny--bold--uppercase"><a href="/"><span><i className="fa fa-file-invoice fa-fw"></i></span>Faturas</a></li>
          <li className="sidebar__links tiny--bold--uppercase"><a href="/"><span><i className="fa fa-envelope fa-fw"></i></span>Mensagens</a></li>
          <li className="sidebar__links tiny--bold--uppercase"><a href="/"><span><i className="fa fa-user fa-fw"></i></span>Dados de Perfil</a></li>
          <li className="sidebar__links tiny--bold--uppercase"><a href="/"><span><i className="fa fa-home fa-fw"></i></span>Dados de entrega</a></li>
          <li className="sidebar__links tiny--bold--uppercase"><a href="/"><span><i className="fa fa-cog fa-fw"></i></span>Preferencias</a></li>
          <li className="sidebar__links tiny--bold--uppercase"><a href="/"><span><i className="fa fa-envelope fa-fw"></i></span>Newsletter</a></li>
        </ul>

        <a href="/" className="sidebar__user sidebar__user--out">Terminar sessão</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
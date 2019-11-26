import React from 'react';

const MobileSidebar = (props) => {
    let sidebarClass = 'mobile_sidebar'
    let arrowClass = 'fa fa-angle-left' 
  
    if (props.showSidebar) {
        sidebarClass = 'mobile_sidebar open'
        arrowClass = 'fa fa-angle-right'
    }

  return (
    <div className={sidebarClass}>
      <div className="mobile_sidebar__button" onClick={props.handleSidebar}>
        <span className="button_up"><i className={arrowClass}></i></span>
      </div>
      <div className="mobile_sidebar__content">
        <ul>
        <li className="mobile_sidebar__nav--item small--bold--uppercase"><a href="/"><span><i className="fa fa-ticket-alt fa-fw"></i></span>Bilhetes</a></li>
        <li className="mobile_sidebar__nav--item small--bold--uppercase"><a href="/"><span><i className="fa fa-clock fa-fw"></i></span>Fila de espera</a></li>
        <li className="mobile_sidebar__nav--item small--bold--uppercase"><a href="/"><span><i className="fa fa-file-invoice fa-fw"></i></span>Faturas</a></li>
        <li className="mobile_sidebar__nav--item small--bold--uppercase"><a href="/"><span><i className="fa fa-envelope fa-fw"></i></span>Mensagens</a></li>
        <li className="mobile_sidebar__nav--item small--bold--uppercase"><a href="/"><span><i className="fa fa-user fa-fw"></i></span>Dados de Perfil</a></li>
        <li className="mobile_sidebar__nav--item small--bold--uppercase"><a href="/"><span><i className="fa fa-home fa-fw"></i></span>Dados de entrega</a></li>
        <li className="mobile_sidebar__nav--item small--bold--uppercase"><a href="/"><span><i className="fa fa-cog fa-fw"></i></span>Preferencias</a></li>
        <li className="mobile_sidebar__nav--item small--bold--uppercase"><a href="/"><span><i className="fa fa-envelope fa-fw"></i></span>Newsletter</a></li>
        <li className="mobile_sidebar__nav--item small--bold--uppercase"><a href="/">Terminar Sessão</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MobileSidebar
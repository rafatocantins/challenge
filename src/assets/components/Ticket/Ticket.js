import React from 'react';

const Ticket = (props) => {

    return (
        <div className="website_area__ticket">
            <div className="website_area__ticket--top">
                <div className="area_ticket__date">
                  <span className="tiny--bold--uppercase text--gray">Data de compra</span>
                  <p className="small--bold--uppercase text--dark--gray sm--mb--1">20 Ago 2018</p>
                </div>
                <a href="/" className="primary_button tinylong_button">Ver bilhetes</a>
              </div>
              <div className="website_area__ticket--content">
                <div className="ticket_area__column--six column with--border">
                  <div className="ticket_area__header">
                    <span className="text--gray tiny--bold--uppercase">Evento</span>
                  </div>
                  <div className="ticket_area__content--contain-img">
                    <div className="img_container">
                      <img alt="card" src={props.img} />
                      <div className="img_overlay"></div>
                    </div>
                    <div className="ticket_area__content--info">
                      <span className="datetime small--bold">{props.date}</span>
                      <p className="location tiny--bold--uppercase">{props.locale}</p>
                      <h4 className="event-name medium--bold">{props.show}</h4>
                    </div>
                  </div>
                </div>
                <div className="ticket_area__column--two column with--border">
                  <div className="ticket_area__header">
                    <span className="text--gray tiny--bold--uppercase">Zona</span>
                  </div>
                  <div className="ticket_area__content--no-img">
                    <span className="ticket_info small--bold">{props.zone}</span>
                  </div>
                </div>
                <div className="ticket_area__column--two column with--border">
                  <div className="ticket_area__header">
                    <span className="text--gray tiny--bold--uppercase">Lugares</span>
                  </div>
                  <div className="ticket_area__content--no-img">
                    <span className="ticket_info small--bold">{props.seat}</span>
                  </div>
                </div>
                <div className="ticket_area__column--zero column">
                  <div className="ticket_area__header">
                    <span className="text--gray tiny--bold--uppercase">Total</span>
                  </div>
                  <div className="ticket_area__content--no-img">
                    <span className="ticket_info small--bold">{props.total}</span>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Ticket;
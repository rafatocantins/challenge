import React from 'react';
import Ticket from '../Ticket/Ticket';
import './Content.css'

const Content = () => {

  // should catch some data

  const ticketData = [
    {
      date: '03 Jan 2019 | 18h00',
      locale: 'Altice Arena',
      img: 'https://wikiboard.wikinight.eu/site/upload/events/photo/b68044fa9ef1439debddbb8ab3caae838f1fb72583a19f9e84964772a930fb15.jpg',
      show: 'Cirque du Soleil - Ovo',
      zone: '1ª Plateia',
      seats: 'J6, J7',
      total: '158.00€'
    },
    {
      date: '03 Jan 2019 | 18h00',
      locale: 'Altice Arena',
      img: 'https://wikiboard.wikinight.eu/site/upload/events/photo/b68044fa9ef1439debddbb8ab3caae838f1fb72583a19f9e84964772a930fb15.jpg',
      show: 'Cirque du Soleil - Ovo',
      zone: '1ª Plateia',
      seats: 'J6, J7',
      total: '158.00€'
    },
    {
      date: '03 Jan 2019 | 18h00',
      locale: 'Altice Arena',
      img: 'https://wikiboard.wikinight.eu/site/upload/events/photo/b68044fa9ef1439debddbb8ab3caae838f1fb72583a19f9e84964772a930fb15.jpg',
      show: 'Cirque du Soleil - Ovo',
      zone: '1ª Plateia',
      seats: 'J6, J7',
      total: '158.00€'
    },
    {
      date: '03 Jan 2019 | 18h00',
      locale: 'Altice Arena',
      img: 'https://wikiboard.wikinight.eu/site/upload/events/photo/b68044fa9ef1439debddbb8ab3caae838f1fb72583a19f9e84964772a930fb15.jpg',
      show: 'Cirque du Soleil - Ovo',
      zone: '1ª Plateia',
      seats: 'J6, J7',
      total: '158.00€'
    },
    {
      date: '03 Jan 2019 | 18h00',
      locale: 'Altice Arena',
      img: 'https://wikiboard.wikinight.eu/site/upload/events/photo/b68044fa9ef1439debddbb8ab3caae838f1fb72583a19f9e84964772a930fb15.jpg',
      show: 'Cirque du Soleil - Ovo',
      zone: '1ª Plateia',
      seats: 'J6, J7',
      total: '158.00€'
    }
  ]


  return (
    <div className="column ticket_area">
      <div className="ticket_area__header">
        <h1 className="ticket_area__title text--dark--gray">Bilhetes</h1>
        <div className="ticket_area__table">
        <h4 className="ticket_area__price text--dark--gray">20,55€</h4>
        <p className="ticket_area__sales text--main--gray">Saldo ticketline</p>
        <a href="/" className="secondary_button tinylong_button">Resgatar Saldo</a>
        </div>
      </div>
      {
        // map it 
        ticketData.map((data, i) => (
          <Ticket key={i} img={data.img} date={data.date} locale={data.locale} show={data.show} zone={data.zone} seat={data.seats} total={data.total}/>
        ))
      }
    </div>
  );
}

export default Content;
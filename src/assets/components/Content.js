import React from 'react';
import Ticket from './Ticket/Ticket'

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
    <div className="column website_area">
      <div className="website_area__header">
        <h1 className="website_area__header--title text--dark--gray">Bilhetes</h1>
        <div className="website_area__header--price-table">
        <h4 className="area_header__price text--dark--gray">20,55€</h4>
        <p className="area_header__sales text--main--gray">Saldo ticketline</p>
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
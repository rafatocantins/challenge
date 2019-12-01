import React, {Component} from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../../components/Content/Content';
import './Home.css';

class Home extends Component {

  render() {

    return (
            <div className="Home page_row main_area">
              <Sidebar />
              <Content />
            </div>
    );
  }
}

export default Home;
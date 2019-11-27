import React, {Component} from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../../components/Content/Content';

class Home extends Component {

  render() {

    return (
        <div className="container">
          <div className="page_container">
            <div className="page_row client--area">
              <Sidebar />
              <Content />
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
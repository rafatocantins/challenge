import React, {Component} from 'react';
import './App.css';
import '../src/assets/utils.css'
import '../src/assets/styles.css'
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './assets/components/Navbar';
import Sidebar from './assets/components/Sidebar';
import Content from './assets/components/Content';
import MobileMenu from './assets/components/MobileMenu/MobileMenu'
import MobileSidebar from './assets/components/MobileSidebar/MobileSidebar'

class App extends Component {

  state = {
    mobileMenuOpen: false,
    sidebarMenuOpen: false
  }

  mobileToggleMenu = () => {
    this.setState((prevState) => {
      if (this.state.sidebarMenuOpen) {
        return {sidebarMenuOpen: !prevState.sidebarMenuOpen, mobileMenuOpen: !prevState.mobileMenuOpen} 
      } else {
        return {mobileMenuOpen: !prevState.mobileMenuOpen}
      }
    })
  };

  mobileToggleSidebar = () => {
    this.setState((prevState) => {
      if (this.state.mobileMenuOpen) {
        return {sidebarMenuOpen: !prevState.sidebarMenuOpen, mobileMenuOpen: !prevState.mobileMenuOpen}
      } else {
        return {sidebarMenuOpen: !prevState.sidebarMenuOpen}
      }
    })
  }

  render() {

    return (
      <div className="App">
        <Navbar drawerClickHandler={this.mobileToggleMenu}/>
        <MobileMenu show={this.state.mobileMenuOpen} showSidebar={this.state.sidebarMenuOpen} drawerHandleClose={this.mobileToggleMenu} />
        <MobileSidebar showMobile={this.state.mobileMenuOpen} showSidebar={this.state.sidebarMenuOpen} handleSidebar={this.mobileToggleSidebar}/>
        <div className="container">
          <div className="page_container">
            <div className="page_row client--area">
              <Sidebar />
              <Content />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

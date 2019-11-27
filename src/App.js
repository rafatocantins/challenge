import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import '../src/assets/utils.css'
import '../src/assets/styles.css'
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './assets/components/Navbar/Navbar';
import MobileMenu from './assets/components/MobileMenu/MobileMenu';
import MobileSidebar from './assets/components/MobileSidebar/MobileSidebar';
import Home from './assets/pages/Home/Home';
import Categorias from './assets/pages/Categorias/Categorias';
import Agenda from './assets/pages/Agenda/Agenda'


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
        <MobileMenu show={this.state.mobileMenuOpen} drawerHandleClose={this.mobileToggleMenu} />
        <MobileSidebar showSidebar={this.state.sidebarMenuOpen} handleSidebar={this.mobileToggleSidebar}/>
        <div className="container">
          <div className="page_container">
            <div className="page_row client--area">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/categorias" component={Categorias} />
                <Route path="/agenda" component={Agenda} />
                <Route component={Error} />
            </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

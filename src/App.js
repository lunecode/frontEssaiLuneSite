import React, { Component } from 'react';

// import React from 'react';

import Navbar from './components/navBar/NavBar';
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';

// import './App.css'

class App extends Component {
  render() {
    return (
  <>
      <Navbar />
      {/* <Switch>
        <Route path="/Inscription" exact component={Inscription}></Route>
        <Route path="/Connexion" exact component={Connexion}></Route>
        <Route path="/FAQ" exact component={FAQ}></Route>
      </Switch> */}
      <Carousel />
      <Footer />
  </>
    )
  };
}

export default App;


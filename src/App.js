
import React, { Component } from 'react'
import './App.scss';
import Banner from './components/banner'
import Conheca from './components/Conheca'
import Porque from './components/Porque'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
class App extends Component {

  render() {

    return (
      <div className="App">
        <BackToTop />
        <Banner />
        <Conheca />
        <Porque />
        <Footer />
      </div>
    );
  }
}

export default App;

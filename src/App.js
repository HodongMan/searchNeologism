import React, { Component } from 'react';
import {Header, Navbar, Footer, SearchRank} from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <SearchRank/>
        <Footer/>
      </div>
    );
  }
}

export default App;

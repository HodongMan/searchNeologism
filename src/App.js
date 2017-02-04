import React, { Component } from 'react';
import {Navbar, Footer, SearchRank} from "./components";
import {SearchContainer} from "./containers";

class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <SearchContainer/>
        <SearchRank/>
        <Footer/>
      </div>
    );
  }
}

export default App;

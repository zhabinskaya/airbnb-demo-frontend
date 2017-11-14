import React, { Component } from "react";
import Explore from "./Explore";
import Header from "./Header";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Explore />
        <Experiences />
        <Homes />
        <Reservations />
        <Destinations />
        <Footer />
      </div>
    );
  }
}

export default App;

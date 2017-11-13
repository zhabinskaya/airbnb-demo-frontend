import React from "react";
import styled from "styled-components";
import Card from "./Card";
<<<<<<< HEAD
import { Title } from "../Ui.js";
=======

const Title = styled.h2`
  font-size: 24px;
  line-height: 34px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;
>>>>>>> 863a59e3a073083f67d238749cd7a567e1d50bb5

export default props => (
  <div className="container">
    <Title>Explore Airbnb</Title>
    <div className="row row-nowrap">
      <div className="col-xs-2 col-sm-4 col-md-4 col-lg-4">
<<<<<<< HEAD
        <Card img={require("./homes.png")}>Homes</Card>
      </div>
      <div className="col-xs-2 col-sm-4 col-md-4 col-lg-4">
        <Card img={require("./experiences.png")}>Experiences</Card>
      </div>
      <div className="col-xs-2 col-sm-4 col-md-4 col-lg-4">
        <Card img={require("./restaurants.png")}>Restaurants</Card>
=======
        <Card img={require("./Homes.png")}>Homes</Card>
      </div>
      <div className="col-xs-2 col-sm-4 col-md-4 col-lg-4">
        <Card img={require("./Experiences.png")}>Experiences</Card>
      </div>
      <div className="col-xs-2 col-sm-4 col-md-4 col-lg-4">
        <Card img={require("./Restaurants.png")}>Restaurants</Card>
>>>>>>> 863a59e3a073083f67d238749cd7a567e1d50bb5
      </div>
    </div>
  </div>
);

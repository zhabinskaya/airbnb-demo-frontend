import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Title = styled.h2`
  font-size: 32px;
  line-height: 34px;
`;

export default props => (
  <div className="container">
    <Title>Explore Airbnb</Title>
    <div className="row">
      <div className="col-4">
        <Card img={require("./Homes.png")}>Homes</Card>
      </div>
      <div className="col-4">
        <Card img={require("./Experiences.png")}>Experiences</Card>
      </div>
      <div className="col-4">
        <Card img={require("./Restaurants.png")}>Restaurants</Card>
      </div>
    </div>
  </div>
);

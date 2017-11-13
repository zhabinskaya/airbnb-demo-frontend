import React from "react";
import styled from "styled-components";
import Card from "./Card";
import nextpage from "./next-page@2x.png";
import { Title } from "../Ui.js";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  align-items: center;;'
`;

const Arrow = styled.img`
  height: 10px;
  padding-left: 8px;
`;

const NextPage = styled.img`
  position: absolute;
  top: 90px;
  right: -15px;
  z-index: 1;
  height: 40px;
`;

const Slider = styled.div`position: relative;`;

export default props => (
  <div className="container">
    <Header>
      <Title>Featured destinations</Title>
    </Header>
<<<<<<< HEAD
    <div className="row row-nowrap">
      <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2">
=======
    <div className="row">
      <div className="col-sm-4 col-md-3 col-lg-2">
>>>>>>> 863a59e3a073083f67d238749cd7a567e1d50bb5
        <Card img={require("./paris.png")} city="Paris" />
      </div>
      <div className="col-sm-4 col-md-3 col-lg-2">
        <Card img={require("./miami.png")} city="Miami" />
      </div>
      <div className="col-sm-4 col-md-3 col-lg-2">
        <Card img={require("./tokyo.png")} city="Tokyo" />
      </div>
      <div className="col-sm-4 col-md-3 col-lg-2">
        <Card img={require("./cape-town.png")} city="Cape town" />
      </div>
      <div className="col-sm-4 col-md-3 col-lg-2">
        <Card img={require("./seoul.png")} city="Seoul" />
      </div>
      <div className="col-sm-4 col-md-3 col-lg-2">
        <Slider>
          <NextPage src={nextpage} />
        </Slider>
        <Card img={require("./los-angeles.png")} city="Los Angeles" />
      </div>
    </div>
  </div>
);

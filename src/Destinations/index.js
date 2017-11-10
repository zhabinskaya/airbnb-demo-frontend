import React from "react";
import styled from "styled-components";
import Card from "./Card";
import nextpage from "./next-page@2x.png";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  align-items: center;;'
`;

const Title = styled.h2`
  font-size: 32px;
  line-height: 34px;
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
    <div className="row">
      <div className="col-2">
        <Card img={require("./Paris.png")} city="Paris" />
      </div>
      <div className="col-2">
        <Card img={require("./Miami.png")} city="Miami" />
      </div>
      <div className="col-2">
        <Card img={require("./Tokyo.png")} city="Tokyo" />
      </div>
      <div className="col-2">
        <Card img={require("./Cape town.png")} city="Cape town" />
      </div>
      <div className="col-2">
        <Card img={require("./Seoul.png")} city="Seoul" />
      </div>
      <div className="col-2">
        <Slider>
          <NextPage src={nextpage} />
        </Slider>
        <Card img={require("./Los Angeles.png")} city="Los Angeles" />
      </div>
    </div>
  </div>
);

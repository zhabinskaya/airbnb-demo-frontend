import React from "react";
import styled from "styled-components";
import Card from "./Card";
import arrow from "./arrow.svg";
import nextpage from "./next-page@2x.png";
import { Title } from "../Ui.js";

const ExpHeader = styled.div`
  display: flex;
  justify-content: space-between;
<<<<<<< HEAD
  align-items: center;
=======
  padding-top: 24px;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 34px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
>>>>>>> 863a59e3a073083f67d238749cd7a567e1d50bb5
`;

const SeeAll = styled.a`
  color: #383838;
  text-decoration: none;
  font-size: 14px;
  font-style: 100;
`;

const Arrow = styled.img`
  height: 10px;
  padding-left: 8px;
`;

const NextPage = styled.img`
  position: absolute;
  top: 164px;
  right: -15px;
  z-index: 1;
  height: 40px;
`;

const Slider = styled.div`position: relative;`;

export default props => (
  <div className="container">
    <ExpHeader>
      <Title>Experiences</Title>
      <SeeAll href="/see-all">
        See all
        <Arrow src={arrow} />
      </SeeAll>
    </ExpHeader>
    <div className="row row-nowrap">
<<<<<<< HEAD
      <div className="col-xs-3 col-sm-3 col-md-4 col-lg-3">
        <Card img={require("./forest-therapy.png")} price="29" reviews="44">
          Forest therapy
        </Card>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-4 col-lg-3">
        <Card img={require("./whale-watching.png")} price="69" reviews="34">
          Whale watching
        </Card>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-4 col-lg-3">
        <Card img={require("./tms.png")} price="$69" reviews="44">
          Table Mountain Summit, Cable Car Down
        </Card>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-4 col-lg-3">
=======
      <div className="col-xs-2 col-sm-4 col-md-4 col-lg-3">
        <Card img={require("./Forest therapy.png")} price="29" reviews="44">
          Forest therapy
        </Card>
      </div>
      <div className="col-xs-2 col-sm-4 col-md-4 col-lg-3">
        <Card img={require("./Whale watching.png")} price="69" reviews="34">
          Whale watching
        </Card>
      </div>
      <div className="col-xs-2 col-sm-4 col-md-4 col-lg-3">
        <Card img={require("./TMS.png")} price="$69" reviews="44">
          Table Mountain Summit, Cable Car Down
        </Card>
      </div>
      <div className="col-xs-2 col-sm-4 col-md-4 col-lg-3">
>>>>>>> 863a59e3a073083f67d238749cd7a567e1d50bb5
        <Slider>
          <NextPage src={nextpage} />
        </Slider>
        <Card img={require("./salsa-night.png")} price="50" reviews="34">
          Salsa Night
        </Card>
      </div>
    </div>
  </div>
);

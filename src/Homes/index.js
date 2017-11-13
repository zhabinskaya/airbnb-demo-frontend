import React from "react";
import styled from "styled-components";
import Card from "./Card";
import arrow from "./arrow.svg";
import nextpage from "./next-page@2x.png";
import { Title } from "../Ui.js";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  align-items: center;
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
  top: 82px;
  right: -15px;
  z-index: 1;
  height: 40px;
`;

const Slider = styled.div`position: relative;`;

export default props => (
  <div className="container">
    <Header>
      <Title>Homes</Title>
      <SeeAll href="/see-all">
        See all
        <Arrow src={arrow} />
      </SeeAll>
    </Header>
<<<<<<< HEAD
    <div className="row row-nowrap">
      <div className="col-xs-2 col-sm-4 col-md-4 col-lg-4">
=======
    <div className="row">
      <div className="col sm-8 col-md-5 col-lg-4">
>>>>>>> 863a59e3a073083f67d238749cd7a567e1d50bb5
        <Card
          img={require("./la-salentina.png")}
          price="82"
          reviews="97"
          text="La Salentina, see, nature & relax"
        >
          Entire house · 9 beds
        </Card>
      </div>
<<<<<<< HEAD
      <div className="col-xs-2 col-sm-4 col-md-4 col-lg-4">
=======
      <div className="col sm-8 col-md-5 col-lg-4">
>>>>>>> 863a59e3a073083f67d238749cd7a567e1d50bb5
        <Card
          img={require("./your-private.png")}
          price="82"
          reviews="161"
          text="Your private 3 bedr. riad and exclusi…"
        >
          Entire house · 5 beds
        </Card>
      </div>
<<<<<<< HEAD
      <div className="col-xs-2 col-sm-4 col-md-4 col-lg-4">
=======
      <div className="col sm-8 col-md-5 col-lg-4">
>>>>>>> 863a59e3a073083f67d238749cd7a567e1d50bb5
        <Slider>
          <NextPage src={nextpage} />
        </Slider>
        <Card
          img={require("./dreamy.png")}
          price="200"
          reviews="364"
          text="Dreamy Tropical Tree House"
        >
          Entire treehouse · 1 bed
        </Card>
      </div>
    </div>
  </div>
);

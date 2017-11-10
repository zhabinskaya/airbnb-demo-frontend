import React from "react";
import styled from "styled-components";
import Card from "./Card";
import arrow from "./arrow.svg";
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
    <div className="row">
      <div className="col-4">
        <Card
          img={require("./LaSalentina.png")}
          price="82"
          reviews="97"
          text="La Salentina, see, nature & relax"
        >
          Entire house · 9 beds
        </Card>
      </div>
      <div className="col-4">
        <Card
          img={require("./YourPrivate.png")}
          price="82"
          reviews="161"
          text="Your private 3 bedr. riad and exclusi…"
        >
          Entire house · 5 beds
        </Card>
      </div>
      <div className="col-4">
        <Slider>
          <NextPage src={nextpage} />
        </Slider>
        <Card
          img={require("./Dreamy.png")}
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

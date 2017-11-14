import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import Search from "./Search";
import Navigation from "./Navigation";
import dropdown from "./dropdown.png";

const Header = styled.header`
  padding: 16px 0;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  display: flex;
`;

const Img = styled.img`
  height: 32px;
  margin-top: 9px;
`;

const Dropdown = styled.img`
  position: relative;
  width: 10px;
  height: 5px;
  bottom: 12px;
  left: 8px;

  @media screen and (min-width: 576px) {
    padding-left: 4px;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 0;
    padding-left: 6px;
    top: 4px;
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export default () => (
  <Header>
    <div className="container">
      <div className="row">
        <div className="col-xs-2 col-sm-2 col-md-1 col-lg-1">
          <Img src={logo} />
          <Dropdown src={dropdown} />
        </div>
        <div className="col-sm-9 col-md-7 col-lg-5">
          <Search />
        </div>
        <div className="col-lg-6">
          <Navigation />
        </div>
      </div>
    </div>
  </Header>
);

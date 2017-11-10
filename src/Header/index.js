import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import Search from "./Search";
import Navigation from "./Navigation";

const Header = styled.header`
  padding: 16px 0;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
`;

const Img = styled.img`
  height: 32px;
  margin-top: 9px;
`;

export default () => (
  <Header>
    <div className="container">
      <div className="row">
        <div className="col-1">
          <Img src={logo} />
        </div>
        <div className="col-5">
          <Search />
        </div>
        <div className="col-6">
          <Navigation />
        </div>
      </div>
    </div>
  </Header>
);

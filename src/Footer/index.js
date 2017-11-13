import React from "react";
import styled from "styled-components";
import Settings from "./Settings";
import Copyright from "./Copyright";

const Footer = styled.div`
  margin-top: 60px;
  border: 1px solid rgba(72, 72, 72, 0.3);
`;

const Link = styled.a`
  color: #636363;
  text-decoration: none;
  line-height: 18px;
  text-decoration: none;
  font-size: 15px;
  padding-bottom: 8px;
`;

const Title = styled.a`
  font-size: 15px;
  font-weight: bold;
  line-height: 18px;
  text-decoration: none;
  color: #383838;
  margin-bottom: 16px;
  margin-top: 48px;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  line-height: 18px;
  text-decoration: none;
  color: #383838;
`;

export default props => (
  <Footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-3 col-lg-3 col-lg-3-settings">
          <Settings />
        </div>
        <div className="col-md-2 col-lg-2 col-lg-2-airbnb">
          <Nav>
            <Title href="/airbnb">Airbnb</Title>
            <Link href="/about-us">About us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/press">Press</Link>
            <Link href="/policies">Policies</Link>
            <Link href="/help">Help</Link>
            <Link href="/diversity-and-belonging">Diversity & Belonging</Link>
          </Nav>
        </div>
        <div className="col-md-2 col-lg-2 col-lg-2-discover">
          <Nav>
            <Title href="/discover">Discover</Title>
            <Link href="/about-us">Trust & Safety</Link>
            <Link href="/travel-credit">Travel Credit</Link>
            <Link href="/gift-cards">Gift Cards</Link>
            <Link href="/airbnb-citizen">Airbnb Citizen</Link>
            <Link href="/business-travel">Business Travel</Link>
            <Link href="/guidebooks">Guidebooks</Link>
            <Link href="/aitbnbmag">Airbnbmag</Link>
          </Nav>
        </div>
        <div className="col-md-2 col-lg-2">
          <Nav>
            <Title href="/hosting">Hosting</Title>
            <Link href="/why-host">Why Host</Link>
            <Link href="/hospitality">Hospitality</Link>
            <Link href="/responsible-hosting">Responsible Hosting</Link>
            <Link href="/community-center">Community Center</Link>
          </Nav>
        </div>
      </div>
      <Copyright />
    </div>
  </Footer>
);

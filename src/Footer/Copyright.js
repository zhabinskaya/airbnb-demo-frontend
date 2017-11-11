import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import facebook from "./facebook.png";
import twitter from "./twitter.png";
import instagram from "./instagram.svg";

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
  margin-top: 38px;
  margin-bottom: 46px;
  padding-top: 32px;
`;

const Img = styled.img`
  height: 21px;
  padding-right: 13px;
`;

const Copy = styled.p`
  font-size: 12px;
  font-weight: 100;
  line-height: 14px;
`;

const Inс = styled.div`
  display: flex;
  align-items: center;
`;

const RightCopy = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.div`display: flex;`;

const Social = styled.div`
  padding-left: 21px;
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: #636363;
  font-size: 12px;
  line-height: 14px;
  font-weight: 100;
  padding-left: 16px;
`;

const Icon = styled.img`
  height: 16px;
  padding-left: 6px;
`;

export default props => (
  <Copyright>
    <Inс>
      <Img src={logo} />
      <Copy>© Airbnb Inc.</Copy>
    </Inс>
    <RightCopy>
      <Nav>
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/site-map">Site map</Link>
      </Nav>
      <Social>
        <Link href="/facebook">
          <Icon src={facebook} />
        </Link>
        <Link href="/twitter">
          <Icon src={twitter} />
        </Link>
        <Link href="/instagram">
          <Icon src={instagram} />
        </Link>
      </Social>
    </RightCopy>
  </Copyright>
);

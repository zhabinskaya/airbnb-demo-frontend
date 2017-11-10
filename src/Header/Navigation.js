import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  margin-top: 20px;
  text-align: right;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  margin-left: 189px;
`;

const Link = styled.a`
  color: #383838;
  text-decoration: none;
`;

export default () => (
  <Navigation>
    <Link href="/become-a-host">Become a host</Link>
    <Link href="/help">Help</Link>
    <Link href="/sign-in">Sign Up</Link>
    <Link href="/login">Login</Link>
  </Navigation>
);

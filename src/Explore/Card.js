import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Container = styled.div`
  text-align: left;
  padding: 12px 0;
  background: #fff;

  @media screen and (min-width: 576px) {
    padding: 0;
  }
`;

const Name = styled.span`
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  margin-left: 12px;

  @media screen and (min-width: 576px) {
    font-size: 17px;
    line-height: 20px;
    margin-left: 24px;
  }
`;

const Image = styled.img`
  width: 100%;

  @media screen and (min-width: 576px) {
    width: 96px;
    height: 72px;
  }
`;

export default props => (
  <Card>
    <Image src={props.img} />
    <Container>
      <Name>{props.children}</Name>
    </Container>
  </Card>
);

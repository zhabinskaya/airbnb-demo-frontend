import React from "react";
import styled from "styled-components";
import Review from "./Review";

const Card = styled.div`
  display: flex;
  dustify-content: space-around;
  flex-direction: column;
  max-width: 240px;
`;

const Image = styled.img`
  width: 100%;
  height: 216px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    height: 346px;
  }
`;

const Name = styled.div`margin-top: 8px;`;

const Price = styled.span`
  font-size: 15px;
  font-weight: bold;
  line-height: 18px;
  margin-right: 6px;
`;

const Title = styled.span`
  font-size: 15px;
  font-weight: 100;
  line-height: 18px;
`;

export default props => (
  <Card>
    <Image src={props.img} />
    <Name>
      <Price>${props.price}</Price>
      <Title>{props.children}</Title>
    </Name>
    <Review reviews={props.reviews} />
  </Card>
);

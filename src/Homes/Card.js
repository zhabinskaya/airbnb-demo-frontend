import React from "react";
import styled from "styled-components";
import Review from "./Review";

const Card = styled.div`
  display: flex;
  dustify-content: space-around;
  flex-direction: column;
`;

const Image = styled.img`
  height: 200px;
  margin-buttom: 24px;
`;

const Name = styled.div`margin-top: 8px;`;

const Title = styled.div``;

const Price = styled.span`
  font-size: 15px;
  font-weight: bold;
  line-height: 18px;
  margin-right: 6px;
`;

const Text = styled.span`
  font-size: 15px;
  font-weight: bold;
  line-height: 18px;
`;

const SubTitle = styled.span`
  font-size: 15px;
  font-weight: 100;
  line-height: 18px;
`;

export default props => (
  <Card>
    <Image src={props.img} />
    <Name>
      <Title>
        <Price>${props.price}</Price>
        <Text>{props.text}</Text>
      </Title>
      <SubTitle>{props.children}</SubTitle>
      <Review reviews={props.reviews} />
    </Name>
  </Card>
);

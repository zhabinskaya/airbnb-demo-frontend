import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  dustify-content: space-around;
  flex-direction: column;
`;

const Image = styled.img`
  height: 164px;
  margin-buttom: 24px;
`;

const Name = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;

const Category = styled.span`
  font-size: 10px;
  font-weight: bold;
  line-height: 18px;
  margin-bottom: 2px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 4px;
`;

const SubTitle = styled.span`
  font-size: 18px;
  font-weight: 100;
  line-height: 21px;
`;

export default props => (
  <Card>
    <Image src={props.img} />
    <Name>
      <Category>{props.category}</Category>
      <Title>{props.title}</Title>
      <SubTitle>{props.subtitle}</SubTitle>
    </Name>
  </Card>
);

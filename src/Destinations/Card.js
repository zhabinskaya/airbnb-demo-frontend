import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  dustify-content: space-around;
  flex-direction: column;
`;

const Image = styled.img`
  height: 210px;
  margin-buttom: 24px;
`;

const Name = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;

const City = styled.span`
  font-size: 15px;
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 4px;
`;

export default props => (
  <Card>
    <Image src={props.img} />
    <Name>
      <City>{props.city}</City>
    </Name>
  </Card>
);

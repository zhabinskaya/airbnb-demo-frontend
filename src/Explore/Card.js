import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
`;

const Name = styled.span`
  font-size: 17px;
  font-weight: bold;
  line-height: 20px;
  margin-left: 24px;
`;

const Image = styled.img`
  width: 96px;
  height: 72px;
`;

export default props => (
  <Card>
    <Image src={props.img} />
    <Name>{props.children}</Name>
  </Card>
);

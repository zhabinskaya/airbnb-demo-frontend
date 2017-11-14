import React from "react";
import styled from "styled-components";

const Review = styled.div`
  display: flex;
  margin-top: 7px;
`;

const Img = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 4px;
`;

const TextReview = styled.span`
  font-size: 12px;
  line-height: 14px;
  margin-left: 4px;
`;

export default props => (
  <Review>
    <Img src={require("./star.svg")} />
    <Img src={require("./star.svg")} />
    <Img src={require("./star.svg")} />
    <Img src={require("./star.svg")} />
    <Img src={require("./star.svg")} />
    <TextReview>{props.reviews} Reviews</TextReview>
  </Review>
);

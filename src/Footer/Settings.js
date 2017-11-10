import React from "react";
import styled from "styled-components";
import dropdown from "./dropdown.svg";

const Settings = styled.div``;

const Lang = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  width: 229px;
  height: 48px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  margin-top: 48px;
`;

const Img = styled.img`
  height: 9px;
  padding-right: 16px;
`;

const Input = styled.input`
  border: 0;
  font-size: 16px;
  font-weight: 100;
  padding-left: 16px;
`;

const Currency = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  width: 229px;
  height: 48px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  margin-top: 16px;
`;

export default props => (
  <Settings>
    <Lang>
      <form>
        <label for="input">
          <Input type="text" id="input" placeholder="English" />
        </label>
      </form>
      <Img src={dropdown} />
      <form />
    </Lang>
    <Currency>
      <form>
        <label for="input">
          <Input type="text" id="input" placeholder="United States dollar" />
        </label>
      </form>
      <Img src={dropdown} />
      <form />
    </Currency>
  </Settings>
);

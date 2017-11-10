import React from "react";
import styled from "styled-components";
import search from "./search.png";

const Search = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  width: 392px;
  height: 48px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
`;

const Img = styled.img`
  height: 21px;
  margin-left: 16px;
  padding-right: 16px;
`;

const Input = styled.input`
  border: 0;
  font-size: 18px;
`;

export default () => (
  <Search>
    <Img src={search} />
    <form>
      <label for="input">
        <Input type="text" id="input" placeholder="Try Miami" />
      </label>
    </form>
  </Search>
);
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <h1>Header</h1>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  height: 100px;
  width: 100%;
  background-color: teal;
  position: fixed;
  z-index: 999;
`;

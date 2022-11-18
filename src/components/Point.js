import React from "react";
import styled from "styled-components";
import active from "../images/intro/Active.svg";

function Point({ text, left, right, mobile }) {
  return (
    <PointContainer left={left} right={right} mobile={mobile}>
      <img src={active} alt="" />
      <p>{text}</p>
    </PointContainer>
  );
}

export default Point;

const PointContainer = styled.div`
  z-index: 90;
  position: absolute;
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  & p {
    font-size: 16px;
    font-weight: 600;
    width: 100%;
  }
  & img {
    width: 16px;
  }

  @media screen and (max-width: 720px) {
    p {
      width: 100%;
    }
    flex-direction: row;
    rotate: 270deg;

    /* left: ${(props) => props.mobile}; */
    bottom: ${(props) => props.mobile};
  }
`;

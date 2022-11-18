import React from "react";
import styled from "styled-components";

function Carousel({ number, title, desc }) {
  return (
    <CarouselContainer>
      <p>{number}</p>
      <h6>{title}</h6>
      <p>{desc}</p>
    </CarouselContainer>
  );
}

export default Carousel;

const CarouselContainer = styled.div`
  width: clamp(250px, 30vw, 428px);
  color: var(--gray-800);
  background-color: #f6faff;
  padding: 32px 24px;
  border-radius: 12px;
  & p:first-child {
    margin-bottom: 32px;
    font-size: clamp(18px, 5vw, 20px);
  }
  & h6 {
    margin-bottom: 8px;
  }
`;

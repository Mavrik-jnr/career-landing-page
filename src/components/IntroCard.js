import React from "react";
import styled from "styled-components";

function IntroCard({ img, title, content }) {
  return (
    <IntroCardContainer>
      <img src={img} alt="" />

      <Text>
        <h6>{title}</h6>
        <p>{content}</p>
      </Text>
    </IntroCardContainer>
  );
}

export default IntroCard;

const IntroCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Icon = styled.div`
  padding: 10px;
`;
const Text = styled.div`
    display:flex;
    gap:8px;
    flex-direction;
`;

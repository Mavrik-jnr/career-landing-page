import React from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Header from "./components/Header";
import squiggly from "./images/Hero/squiggly.svg";
import Hi from "./images/Hero/heroImg.svg";
import smiley from "./images/Hero/smiley.svg";
function App() {
  return (
    <AppBody>
      <Header />
      <HeroSection>
        <HeroContent>
          <HeroText>
            <h6>CAREERS</h6>
            <h1>
              Join our{" "}
              <span>
                awesome <img src={squiggly} alt="" />{" "}
              </span>{" "}
              team
            </h1>
            <h6>
              Join a group of talented and fun individuals working together to
              create a new economic model. Come join us!
            </h6>
            <Button>See open roles</Button>
          </HeroText>
          <HeroImg>
            <img src={Hi} alt="" />
          </HeroImg>
        </HeroContent>
      </HeroSection>
      <IntroSection>
        <WhoWeAre>
          <h1>
            Who we{" "}
            <span>
              are <img src={smiley} alt="" />
            </span>
          </h1>
          <p>
            We are problem solvers who are deeply focused on building the future
            of finance for users across the globe. We strongly believe that
            teamwork and a constant desire to improve helps us achieve that.
          </p>
        </WhoWeAre>
      </IntroSection>
    </AppBody>
  );
}

export default App;

const AppBody = styled.section`
  /* padding-inline: 120px; */
`;
const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* align-items: center; */
  min-height: 100vh;
`;

const HeroSection = styled(Section)``;

const HeroContent = styled.div`
  display: flex;
  gap: 70px;
  width: 86%;
  /* justify-content: center; */
  padding-top: 228px;
  align-items: flex-start;

  min-height: 100vh;

  @media screen and (max-width: 1195px) {
    padding-top: 180px;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    padding-top: 162px;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
  }
`;

const HeroText = styled.div`
  width: 70%;

  & h6:nth-of-type(1) {
    margin-bottom: clamp(16px, 5vw, 48px);
  }
  & h1 {
    margin-bottom: 18px;
    width: 100%;
  }
  & h6:nth-of-type(2) {
    margin-bottom: 28px;
    color: var(--gray-700);
    font-size: 20px;
    line-height: 28px;
  }

  & span {
    position: relative;
    display: flex;
    height: min-content;
    display: inline-block;

    /* height: fit-content; */
  }
  & span img {
    position: absolute;
    display: inline;
    bottom: -18px;
    left: 0px;
    margin: 0px;
    width: 100%;
    @media screen and (max-width: 900px) {
      bottom: -10px;
      left: 5px;
    }
    @media screen and (max-width: 600px) {
      bottom: -5px;
    }

    /* height: 100%; */
  }

  @media screen and (max-width: 1195px) {
    display: flex;

    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    /* padding-top: 162px; */
    flex-direction: column;

    align-items: flex-start;
  }
`;

const HeroImg = styled.div`
  position: relative;
  top: -90px;
  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1195px) {
    position: static;
  }
`;

const IntroSection = styled(Section)``;
const WhoWeAre = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--gray-50);
  padding-top: 83px;

  align-items: center;

  width: 83.3%;

  & h1 {
    margin-bottom: 29px;
  }
  & span {
    display: inline-block;
  }
  & span img {
    height: clamp(32px, 5vw, 57px);
    /* width: 100%; */
    /* display: none; */
  }
  & p {
    text-align: center;
  }
  @media screen and (max-width: 1195px) {
    //
  }
  @media screen and (max-width: 600px) {
  }
`;

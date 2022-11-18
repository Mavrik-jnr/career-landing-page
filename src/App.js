import React from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Header from "./components/Header";
import squiggly from "./images/Hero/squiggly.svg";
import Hi from "./images/Hero/heroImg.svg";
import smiley from "./images/Hero/smiley.svg";
import globe from "./images/intro/globe.png";
import heart from "./images/intro/heart.png";
import star from "./images/intro/star.png";
import IntroCard from "./components/IntroCard";
import Carousel from "./components/Carousel";

const coreValues = [
  {
    number: "01/05",
    title: "Communication and Teamwork",
    desc: "We are direct and concise. We efficiently share information, increasing collaboration and productivity. We engage in active listening.",
  },
  {
    number: "02/05",
    title: "Customer Focus",
    desc: `We are laser-focused in providing solutions. With every decision, we ask ourselves, ${"How does this create more value for our customers?"}`,
  },
  {
    number: "03/05",
    title: "Life-long learning",
    desc: "Strive to get a little better at something, every day. We embrace candid feebacks, we see every siuation as a learning opportunity. ",
  },
  {
    number: "04/05",
    title: "Transparency",
    desc: "Share your work frequently. Seek feedback openly. As soon as possible, have the difficult, honest conversation. Get it out of your system.",
  },
  {
    number: "05/05",
    title: "Practice kindness",
    desc: "Bring positive energy. Respect and empathy should be used to lift others up. Create moments of play at work.",
  },
];

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
          <h3>
            Who we{" "}
            <span>
              are <img src={smiley} alt="" />
            </span>
          </h3>
          <p className="desc">
            We are problem solvers who are deeply focused on building the future
            of finance for users across the globe. We strongly believe that
            teamwork and a constant desire to improve helps us achieve that.
          </p>
          <IntroRow>
            <IntroCard
              img={globe}
              title={"Building world-class solutions"}
              content={
                "We take pride in developing high-quality products that have a long-term impact on our global user community."
              }
            />
            <IntroCard
              img={heart}
              title={"Encouraging innvovation  "}
              content={
                "We prioritize healthy teamwork dynamics, providing an environment, support, and trust for everyone on the team to get things done."
              }
            />
            <IntroCard
              img={star}
              title={"Increasing economic freedom"}
              content={
                "Everyone has the right to financial services that will enable them to make a better life for both them and their communities."
              }
            />
          </IntroRow>
        </WhoWeAre>
      </IntroSection>
      <CarouselSection>
        {coreValues.map((value, index) => {
          return <Carousel {...value} />;
        })}
      </CarouselSection>
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

const IntroSection = styled(Section)`
  background-color: var(--gray-50);
`;
const WhoWeAre = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 83px;

  align-items: center;

  width: 83.3%;

  & h3 {
    margin-bottom: 29px;
  }
  & span {
    display: inline-block;
  }
  & span img {
    /* height: clamp(32px, 5vw, 57px); */
    /* width: 100%; */
    /* display: none; */
  }
  .desc {
    text-align: center;
    margin-bottom: 125px;
  }
  @media screen and (max-width: 1195px) {
    //
  }
  @media screen and (max-width: 600px) {
    & span img {
      height: 22px;
    }
  }
`;

const IntroRow = styled.div`
  display: flex;
  gap: 68px;

  @media screen and (max-width: 1195px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    /* padding-top: 162px; */
    flex-direction: column;

    align-items: flex-start;
  }
`;

const CarouselSection = styled(Section)`
  /* background-color: red; */
  position: relative;
  gap: 8px;
`;

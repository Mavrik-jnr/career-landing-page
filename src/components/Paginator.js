import styled from "styled-components";
import active from "../images/intro/Active.svg";
import inactive from "../images/intro/Inactive.svg";

const Paginator = ({ dataLength, activeIndex, handlePageChange }) => {
  let dots = [];
  let classes = "";
  for (let index = 0; index < dataLength; index++) {
    classes = activeIndex === index ? "active" : "not";

    dots.push(classes);
  }
  return (
    <PaginatorWrapper>
      {dots.map((dot, index) => {
        if (dot === "active") {
          return (
            <img
              key={index}
              src={active}
              alt=""
              onClick={() => handlePageChange(index)}
            />
          );
          //   return "active";
        }
        return (
          <img
            key={index}
            src={inactive}
            alt=""
            onClick={() => handlePageChange(index)}
          />
        );
        // return "not";
      })}
    </PaginatorWrapper>
  );
};

export default Paginator;

const PaginatorWrapper = styled.div`
  /* display: none; */
  position: relative;
  /* width: 50%; */
  /* top: 0px; */

  display: flex;
  /* align-items:flex-start */
  /* flex-direction: column; */
  /* gap: 40px; */
  & img {
    margin-left: 30px;
  }
  bottom: -70px;
  left: -30px;
  /* right: 50% %; */
  /* width: 10%; */
`;

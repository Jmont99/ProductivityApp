import React from "react";
import styled from "@emotion/styled";
//
const Condition = (props) => {
  const Container = styled.div`
    text-align: center;
    color: white;
  `;
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: -8px;
  `;
  const Cond = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `;
  return (
    <Container>
      <Temp>{props.temp} °F</Temp>
      <Cond>{props.condition}</Cond>
    </Container>
  );
};

export default Condition;

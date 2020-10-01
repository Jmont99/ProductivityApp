import React, { useState } from "react";
import styled from "@emotion/styled";
//
const Forecast = (props) => {
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(0);
  var stringHour = "Now: ";
  var stringDay = "Tomorrow: ";
  var chanceHour = 0;
  var chanceDay = 0;

  const Container = styled.div`
    text-align: center;
    color: white;
    align-items: center;
    display: flex;
    flex-direction: column;
  `;
  const Container2 = styled.div`
    display: flex;
    flex-direction: row;

    color: white;
  `;

  const City = styled.h1`
    font-family: "Merriweather", sans-serif;
    font-size: 1.1rem;
    margin-top: 30px;
    margin-bottom: -9px;
    display: center;
    color: white;
    position: relative;
  `;
  const Cond = styled.h3`
    font-size: 0.9rem;
    margin-top: 2px;
    margin-right: 5px;
    margin-left: 8px;
    margin-bottom: -8px;
  `;

  const Cond2 = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 0.9rem;
    margin-top: 2px;
    margin-right: 8px;
    margin-bottom: -8px;
  `;
  const Cond3 = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 0.9rem;
    margin-top: 35px;
    margin-bottom: 2px;
  `;
  const ForD = styled.button`
    background: transparent;
    border: transparent;
    cursor: pointer;
    height: 10%;
    margin-bottom: -40px;
    position: constant;
  `;
  const BackD = styled.button`
    background: transparent;
    border: transparent;
    height: 10%;
    cursor: pointer;
    margin-bottom: -40px;
  `;
  const Span = styled.span`
    margin-bottom: -18px;
    border: transparent;
  `;

  const hourChangeF = () => {
    if (hour === 4) {
      setHour(0);
    } else {
      setHour(hour + 1);
    }
  };
  const hourChangeB = () => {
    if (hour === 0) {
      setHour(4);
    } else {
      setHour(hour - 1);
    }
  };

  const dayChangeF = () => {
    if (day === 6) {
      setDay(0);
    } else {
      setDay(day + 1);
    }
  };
  const dayChangeB = () => {
    if (day === 0) {
      setDay(6);
    } else {
      setDay(day - 1);
    }
  };

  switch (hour) {
    case 0:
      stringHour = " Now: ";
      chanceHour = props.chanceRainNow * 100;
      break;
    case 1:
      stringHour = " In 1 hr: ";
      chanceHour = props.cT1 * 100;
      break;
    case 2:
      stringHour = " In 2 hrs: ";
      chanceHour = props.cT2 * 100;
      break;
    case 3:
      stringHour = " In 3 hrs: ";
      chanceHour = props.cT3 * 100;
      break;
    case 4:
      stringHour = " In 4 hrs: ";
      chanceHour = props.cT4 * 100;
      break;
    default:
      stringHour = " Now: ";
      chanceHour = props.chanceRainNow * 100;
      break;
  }
  switch (day) {
    case 0:
      stringDay = "Tomorrow: ";
      chanceDay = props.cW1 * 100;
      break;
    case 1:
      stringDay = "In 2 days: ";
      chanceDay = props.cW2 * 100;
      break;
    case 2:
      stringDay = "In 3 days: ";
      chanceDay = props.cW3 * 100;
      break;
    case 3:
      stringDay = "In 4 days: ";
      chanceDay = props.cW4 * 100;
      break;
    case 4:
      stringDay = "In 5 days: ";
      chanceDay = props.cW5 * 100;
      break;
    case 5:
      stringDay = "In 6 days: ";
      chanceDay = props.cW6 * 100;
      break;
    case 6:
      stringDay = "In 7 days: ";
      chanceDay = props.cW7 * 100;
      break;
    default:
      stringDay = "Tomorrow: ";
      chanceDay = props.cW1 * 100;
      break;
  }
  return (
    <Container>
      <City>Chance of precipitation</City>
      <Cond3>Today</Cond3>
      <Container2>
        <BackD
          onClick={() => {
            hourChangeB();
          }}
        >
          <Span role="img" aria-label="left">
            ⬅️
          </Span>
        </BackD>
        <Cond> {stringHour}</Cond>
        <Cond2>{chanceHour}% </Cond2>
        <ForD
          onClick={() => {
            hourChangeF();
          }}
        >
          <Span role="img" aria-label="right">
            ➡️
          </Span>
        </ForD>
      </Container2>
      <Cond3>After today</Cond3>

      <Container2>
        <BackD
          onClick={() => {
            dayChangeB();
          }}
        >
          <Span role="img" aria-label="left">
            ⬅️
          </Span>
        </BackD>
        <Cond> {stringDay}</Cond>
        <Cond2>{chanceDay}%</Cond2>

        <ForD
          onClick={() => {
            dayChangeF();
          }}
        >
          <Span role="img" aria-label="right">
            ➡️
          </Span>
        </ForD>
      </Container2>
    </Container>
  );
};

export default Forecast;

/*<City>Chance of precipitation:</City>
      <Cond>now: {props.chanceRainNow}</Cond>
      <Cond>1hr: {props.cT1}</Cond>
      <Cond>2hr: {props.cT2}</Cond>
      <Cond>3hr: {props.cT3}</Cond>
      <Cond>4hr: {props.cT4}</Cond>

      


      <Temp>The next 7 days: </Temp>
      <Cond2>
        {props.cW1} → {props.cW2} → {props.cW3} → {props.cW4} → {props.cW5} →{" "}
        {props.cW6} → {props.cW7}
      </Cond2>*/

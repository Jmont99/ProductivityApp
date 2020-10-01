import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";
import Forecast from "./Forecast";
//
const WeatherCard = (props) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  let temp = (props.temp - 32) * (5 / 9);

  if (temp > 18) {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 200;
    if (
      props.hour >= 19 ||
      5 >= props.hour ||
      (parseInt(props.hour2, 10) === 0 && props.hour3 <= 6)
    ) {
      bg = `linear-gradient(to top, 
                rgba(190,${highColor / 1.5},0,1), 
                rgba(190, ${Math.abs(lowColor / 20)},0,1)
                )`;
    } else {
      bg = `linear-gradient(to top, 
         rgba(255,${highColor},0,1), 
         rgba(255, ${Math.abs(lowColor)},0,1)
         )`;
    }
  } else if (temp <= 18) {
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 200;
    if (
      props.hour >= 19 ||
      5 >= props.hour ||
      (parseInt(props.hour2, 10) === 0 && props.hour3 <= 6)
    ) {
      bg = `linear-gradient(to top, 
            rgba(0,${highColor / 1.7},150,.90), 
            rgba(0, ${Math.abs(lowColor / 1.23)},150,.95)
            )`;
    } else {
      bg = `linear-gradient(to top, 
                rgba(0,${highColor},255,1), 
                rgba(0, ${Math.abs(lowColor)},255,1)
                )`;
    }
  }
  const Container = styled.div`
    alignt-items: center;
  `;
  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 180px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    float: left;
    border-radius: 15px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border: 2px solid;
    border-right: transparent;
  `;
  const Card2 = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 248px;
    height: 240px;
    display: flex;
    float: left;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;

    border: 2px solid;
    border-left: transparent;
  `;
  return (
    <Container>
      <Card>
        <Location getWeather={props.getWeather} city={props.city} />
        <Icon
          hour={props.hour}
          hour2={props.hour2}
          hour3={props.hour3}
          condition={props.condition}
        />
        <Condition temp={props.temp} condition={props.condition} />
      </Card>
      <Card2>
        <Forecast
          chanceRainNow={props.cT0}
          cT1={props.cT1}
          cT2={props.cT2}
          cT3={props.cT3}
          cT4={props.cT4}
          cW1={props.cW1}
          cW2={props.cW2}
          cW3={props.cW3}
          cW4={props.cW4}
          cW5={props.cW5}
          cW6={props.cW6}
          cW7={props.cW7}
        />
      </Card2>
    </Container>
  );
};

export default WeatherCard;

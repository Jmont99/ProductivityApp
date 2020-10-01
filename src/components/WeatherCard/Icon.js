import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    margin-bottom: 20px;
    width: 30%;
  `;

  var icon = "";
  switch (props.condition) {
    case "Clouds":
      icon = `./img/Mostly Cloudy-2x.png`;
      break;
    case "Clear":
      if (
        props.hour >= 19 ||
        5 >= props.hour ||
        (parseInt(props.hour2, 10) === 0 && parseInt(props.hour3, 10) <= 6)
      ) {
        icon = `./img/Clear Night-2x.png`;
        break;
      } else {
        icon = `./img/Mostly Sunny-2x.png`;
        break;
      }
    case "Haze":
      icon = `./img/Haze-2x.png`;
      break;
    case "Hail":
      icon = `./img/Hail-2x.png`;
      break;
    case "Fog":
      icon = `./img/Fog-2x.png`;
      break;
    case "Tornado":
      icon = `./img/Tornado-2x.png`;
      break;
    case "Dust":
      icon = `./img/Dust-2x.png`;
      break;
    case "Mist":
      icon = `./img/Fog-2x.png`;
      break;
    case "Snow":
      icon = `./img/Snow-2x.png`;
      break;
    case "Rain":
      icon = `./img/Rain-2x.png`;
      break;
    case "Drizzle":
      icon = `./img/Drizzle-2x.png`;
      break;
    case "Thunderstorm":
      icon = `./img/Severe Thunderstorm-2x.png`;
      break;
    default:
      icon = `./img/Fog-2x.png`;
      break;
  }
  return <Icon src={icon} alt="Weather Icon" />;
};
export default Icon;

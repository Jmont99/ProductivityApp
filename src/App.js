import React from "react";
import styled from "@emotion/styled";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";
//jimport TodoApp from "./components2/ToDoList/component";
import Title from "./components2/Title";
import CalendarEngine from "./components2/CalendarEngine";
//
function App() {
  const Display = styled.div`
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 1%,
      rgba(122, 122, 122, 1) 88%
    );
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    left: 0;
    top: 0;

    z-index: 10;
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <Display>
      <Title />
      <WeatherEngine location="gainesville, us" />

      <CalendarEngine />
    </Display>
  );
}

export default App;
//<WeatherEngine location="gainesville, us" />

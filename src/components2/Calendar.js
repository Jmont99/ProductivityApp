import styled from "@emotion/styled";
import TodoApp from "./ToDoList/component";
import ReactDOM from "react-dom";
import { chunk } from "lodash";
import * as React from "react";
import moment from "moment";
import { Col, Row, Grid } from "react-flexbox-grid";

const Calendar = (props) => {
  const calendar = document.querySelector("#app-calendar");

  const Grid = styled.div`
    height: 200px;
    width: 200px;
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(253, 187, 45, 1) 100%
    ); ;
  `;
  let date = "   31";
  return (
    <Grid>
      <div>{date}</div>
      <TodoApp />
    </Grid>
  );
};

export default Calendar;

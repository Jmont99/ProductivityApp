import React, { useState } from "react";
import TodoApp from "./ToDoList/component";
import Calendar from "react-calendar";
import { render } from "react-dom";

const CalendarEngine = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  const tileContent = ({ view }) => (view === "month" ? <TodoApp /> : null);

  return (
    <div id="disply">
      <h1 id="title">What's the plan?</h1>
      <div id="main">
        <Calendar
          id="cal"
          onChange={onChange}
          value={date}
          tileContent={tileContent}
        />
      </div>
    </div>
  );
};
// tileContent={({ date, view }) => <TodoApp />}
// <button onClick={setShowList(false)}>XXXXXXX</button>;
render(<CalendarEngine />, document.querySelector("#root"));

export default CalendarEngine;

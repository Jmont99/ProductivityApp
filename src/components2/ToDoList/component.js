import React from "react";

import styled from "@emotion/styled";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "", change: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete = this.delete.bind(this);
    this.handleClick = { clicky: false };
  }

  click = (tof) => {
    this.handleClick.clicky = tof;
  };
  render() {
    if (this.handleClick.clicky) {
      return (
        <List>
          <TodoList
            items={this.state.items}
            change={this.change}
            delete={this.delete}
          />
          <form onSubmit={this.handleSubmit}>
            <Input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <CancelButton
              onClick={() => {
                this.click(false);
              }}
            >
              x
            </CancelButton>
            <ButtonAdd>
              <span role="img" aria-label="plus">
                ➕
              </span>
            </ButtonAdd>
          </form>
        </List>
      );
    } else {
      return (
        <Listy
          onClick={() => {
            this.click(true);
          }}
        >
          <Span role="img" aria-label="arrow">
            🔽
          </Span>
        </Listy>
      );
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  //
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }

  //
  change = (lol) => {
    this.setState(() => ({
      change: lol,
    }));
    return;
  };
  delete = (id) => {
    var newArray = [];

    for (let i = 0; i < this.state.items.length; i++) {
      if (id !== this.state.items[i].id) {
        newArray.push(this.state.items[i]);
      }
    }

    this.setState(() => ({
      items: newArray,
    }));
    return 2;
  };
}
//store reference to item id
//
class TodoList extends React.Component {
  render() {
    return (
      <Unordered>
        {this.props.items.map((item) => (
          <li key={item.id}>
            <Item
              itemid={item.id}
              itemtext={item.text}
              delete={this.props.delete}
              change={this.props.change}
            />
          </li>
        ))}
      </Unordered>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.stat = { click: false };
  }

  check = (tof) => {
    this.stat.click = tof;
  };

  render() {
    let spaces = "      ";

    if (this.stat.click) {
      return (
        <Disp>
          {this.props.itemtext}
          {spaces}
          <Button
            onClick={() => {
              this.props.delete(this.props.itemid);
              this.check(false);
            }}
          >
            <Span2 role="img" aria-label="check">
              ✔️
            </Span2>
          </Button>
        </Disp>
      );
    } else {
      return (
        <Button2
          onClick={() => {
            this.check(true);
            this.props.change("lol");
          }}
        >
          <Disp2>
            {this.props.itemtext}
            {spaces}
          </Disp2>
        </Button2>
      );
    }
  }
}

const Unordered = styled.ul`
  float: left;
`;
const Disp = styled.div`
  color: white;
  font-size: 1rem;
  justify-content: flex;
  width: fit-content;
  flex-direction: row;
  margin: 0 auto;
`;
const Disp2 = styled.div`
  font-size: 1rem;

  color: white;
  margin: 0 auto;
`;
const Input = styled.input`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 0.5px solid;
  margin-bottom: -7px;
  width: 190px;
`;

const ButtonAdd = styled.button`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 0.5px solid;
  margin-top: -20;
  cursor: pointer;
  font-size: 0.7rem;

  width: 30px;
`;
const CancelButton = styled.span`
  font-size: 0.8rem;
  float: left;
  margin-top: -18px;

  background: #303333;
  cursor: pointer;
  color: white;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: 0px;
  right: 0px;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
`;
const Button = styled.button`
  border-radius: 20px;
  background: transparent;
  width: 0.1%;

  margin: auto;
  cursor: pointer;
  border: transparent;
`;
const Button2 = styled.button`
  border: transparent;
  background: transparent;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
`;

const List = styled.button`
    margin: auto;
    color: black;
   width: 100%;
  
    display: flex;
    flex-direction:column;
    border-radius: 12px;
   border: 1px solid;
  text-align: center;
    background: rgb(145, 158, 184);
    word-wrap:break-word;
    justify-content: center;
    align-items: center:
    `;
const Span = styled.span`
  float: right;
`;
const Span2 = styled.span`
  width: 1wv;
`;
const Listy = styled.button`
  margin: auto;
  color: black;
  width: 100%;
  height: 20%;
  word-wrap: break-word;
  border-radius: 12px;
  border: 2px solid;
  justify-content: right;
  background: rgb(145, 158, 184);
  cursor: pointer;
  float: right;
  align-items: right;
`;

export default TodoApp;

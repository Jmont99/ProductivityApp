import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
const Location = (props) => {
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(false);
  const inputRef = useRef("");
  //
  useEffect(() => {
    if (inputMode) {
      inputRef.current.focus();
    }
  }, [inputMode]);

  if (inputMode) {
    return (
      <Container>
        <FormElement
          onSubmit={(e) => {
            e.preventDefault();
            props.getWeather(query);
          }}
        >
          <InputField
            ref={inputRef}
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchButton type="submit">Search</SearchButton>
          <CancelButton onClick={() => setInputMode(false)}>X</CancelButton>
        </FormElement>
      </Container>
    );
  }

  return (
    <Container>
      <City onClick={() => setInputMode(true)}>{props.city}</City>
    </Container>
  );
};

export default Location;

const InputField = styled.input`
  padding: 5px;
  background: transparent;
  color: white;
  width: 80px;
  border: none;

  &: focus {
    outline: 0;
  }
`;
const FormElement = styled.form`
  display: flex;
  position: relative;
  background: #46618b;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  padding: 5px;
  background: #394e70;
  border: none;
  cursor: pointer;
  color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const CancelButton = styled.span`
  font-size: 0.8rem;
  position: absolute;
  background: #303333;
  cursor: pointer;
  color: white;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  top: -10px;
  right: -9px;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  text-align: center;
`;
const City = styled.h1`
  font-family: "Merriweather", sans-serif;
  font-size: 1.65rem;
  display: center;
  color: white;

  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  &:hover {
    top: -2px;
  }
`;

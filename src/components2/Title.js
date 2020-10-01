import React, { useState } from "react";
import styled from "@emotion/styled";
//fix the submit thing
const Title = () => {
  const [inputMode, setInputMode] = useState(false);
  const [name, setName] = useState("My ");

  if (!inputMode) {
    return (
      <Disp>
        <Heady onClick={() => setInputMode(true)}>{name}</Heady>

        <Head> Monthly Planner</Head>
      </Disp>
    );
  } else {
    return (
      <>
        <Container>
          <FormElement
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <InputField
              required
              onChange={(e) => {
                if (e.target.value !== null) {
                  setName(e.target.value);
                }
              }}
            />
            <Submit type="submit">use</Submit>
            <CancelButton onClick={() => setInputMode(false)}></CancelButton>
          </FormElement>
        </Container>
        <Head> Monthly Planner</Head>
      </>
    );
  }
};

const Submit = styled.button`
  background: pink;
`;

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
  margin-top: 35px;
  margin-bottom: -17px;

  display: flex;
  position: relative;
  background: #46618b;
  border-radius: 5px;
`;

const CancelButton = styled.button`
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
  align-items: center;
`;
const Head = styled.h1`
  color: #5b5c61;
  margin-bottom: 60px;
`;
const Disp = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
const Heady = styled.h1`
  color: #ff2950;
  cursor: pointer;
  font-size: 1.8rem;
  margin-top: 30px;
  margin-bottom: -20px;
`;
export default Title;

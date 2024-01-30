import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid #3e3232;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 8px #3e3232;
`;

const Heading = styled.h1`
  margin-left: 100px;
  flex: 3;
`;

const DateVal = styled.h3`
  flex: 1;
`;

const InputWrapper = styled.div`
  border: 2.5px solid #3e3232;
  margin-top: 40px;
  height: 35px;
  width: 40%;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px #3e3232;
`;

const InputContainer = styled.input`
  border: none;
  width: 90%;
  background-color: #e5e1da;
  font-size: large;
  padding: 6px;
  &:focus {
    outline: none;
  }
`;

const Input = ({ add }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      add(value);
      setValue("");
    }
  };

  const dateDisplay = () => {
    const date = new Date();
    const dateString = date.toDateString();
    return dateString;
  };

  return (
    <Container>
      <Header>
        <Heading>To Do List...</Heading>
        <DateVal>Date: {dateDisplay()}</DateVal>
      </Header>
      <InputWrapper>
        <InputContainer
          placeholder="Type your Tasks..."
          value={value}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </InputWrapper>
    </Container>
  );
};

export default Input;

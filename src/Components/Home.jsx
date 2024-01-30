import React, { useState } from "react";
import Input from "./Input";
import List from "./List";
import styled from "styled-components";

const Container = styled.div`
  font-family: Signika Negative;
`;

const Home = () => {
  const [list, setList] = useState([]);

  const add = (value) => {
    const item = {
      id: list.length + 1,
      task: value,
      isDone: false,
    };
    setList((prevlist) => [...prevlist, item]);
  };

  const deleteFunction = (id) => {
    let deleteIndex;
    list.forEach((item, index) => {
      if (item.id === id) {
        deleteIndex = index;
      }
    });
    const temp = [...list];
    temp.splice(deleteIndex, 1);
    setList(temp);
  };

  const doneFunction = (id) => {
    const temp = [...list];

    temp.forEach((item) => {
      if (item.id === id) {
        item.isDone = true;
      }
    });

    setList(temp);
  };

  return (
    <Container>
      <Input add={add} />
      <List
        list={list}
        deleteFunction={deleteFunction}
        doneFunction={doneFunction}
      />
    </Container>
  );
};

export default Home;

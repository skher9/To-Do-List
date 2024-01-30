import React, { useState, useEffect } from "react";
import Input from "./Input";
import List from "./List";
import styled from "styled-components";

const Container = styled.div`
  font-family: Signika Negative;
`;

const Home = () => {
  const localList = JSON.parse(localStorage.getItem("list"));

  const [list, setList] = useState(localList);

  const add = (value) => {
    const item = {
      id: list.length + 1,
      task: value,
      isDone: false,
    };
    setList((prevlist) => [...prevlist, item]);
  };

  useEffect(() => {
    if (!list) return;
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

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

  const clearAll = () => {
    const temp = [];
    setList(temp);
  };

  return (
    <Container>
      <Input add={add} />
      <List
        list={list}
        deleteFunction={deleteFunction}
        doneFunction={doneFunction}
        clearAll={clearAll}
      />
    </Container>
  );
};

export default Home;

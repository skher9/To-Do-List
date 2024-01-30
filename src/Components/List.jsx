import React from "react";
//import { useState } from "react";
import styled from "styled-components";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
`;

const Wrapper = styled.div`
  border: 2px solid lightgrey;
  margin-top: 20px;
  width: 40%;
  max-height: 300px;
  overflow-y: scroll;
  border-radius: 10px;
  box-shadow: 0px 0px 8px lightgray;
`;

const UL = styled.ul``;

const LI = styled.li`
  border-bottom: 2px solid lightgray;
  border-left: none;
  border-right: none;
  border-top: none;
  margin-right: 20px;
  list-style: none;
  height: 35px;
  font-size: large;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
`;

const P = styled.p`
  flex: 1;
  margin-left: 10px;
`;

const Button = styled.button`
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const List = ({ list, deleteFunction, doneFunction }) => {
  //const [popUp, setPopUp] = useState(false);

  const handleDelete = (id) => {
    deleteFunction(id);
  };

  const handleClick = (id) => {
    console.log(id);
    doneFunction(id);
  };

  /*const handlePopUp = () => {
    setPopUp(true);
  };*/

  return (
    <Container>
      <Wrapper>
        <UL>
          {list.map((item) => {
            return (
              <LI key={item.id} isDone={item.isDone}>
                <P>{item.task}</P>
                <Button onClick={(e) => handleClick(item.id)}>
                  <CheckOutlinedIcon />
                </Button>
                <Button onClick={() => handleDelete(item.id)}>
                  <HighlightOffOutlinedIcon />
                </Button>
              </LI>
            );
          })}
        </UL>
      </Wrapper>
    </Container>
  );
};

export default List;

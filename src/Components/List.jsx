import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

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

const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  margin-bottom: 10px;
  margin-left: 90%;
  margin-right: 10px;
  height: 40px;
  width: 50px;
  cursor: pointer;
  padding: 0px;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: lightgrey;
  position: "relative";
  margin: "50px auto";
  height: 100px;
  width: 100px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PopButton = styled.button`
  height: 40px;
  margin-bottom: "20px";
  width: 60px;
  margin-top: 10px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0px 0px 4px black;
  cursor: pointer;
`;

const CloseBtn = styled.button`
  position: "absolute";
  margin-left: 70%;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

const List = ({ list, deleteFunction, doneFunction, clearAll }) => {
  const [popUp, setPopUp] = useState(false);
  const [itemClickId, setItemClickId] = useState();

  const handleDelete = () => {
    deleteFunction(itemClickId);
  };

  const handleClick = (id) => {
    console.log(id);
    doneFunction(id);
  };

  const handleDeleteAll = () => {
    clearAll();
  };

  const handlePopUp = () => {
    setPopUp(!popUp);
  };

  useEffect(() => {
    if (popUp) {
      setTimeout(() => {
        setPopUp(false);
      }, 1000);
    } else {
      setItemClickId(null);
    }
    return clearTimeout();
  }, [popUp]);

  const iconStyle = {
    fontSize: "15px",
  };

  return (
    <Container>
      <Wrapper>
        <UL>
          <DeleteBtn onClick={(e) => handleDeleteAll()}>
            <DeleteSweepOutlinedIcon />
          </DeleteBtn>

          {list.map((item) => {
            return (
              <LI key={item.id} isDone={item.isDone}>
                <P>{item.task}</P>
                <Button onClick={(e) => handleClick(item.id)}>
                  <CheckOutlinedIcon />
                </Button>
                <Button
                  onClick={() => {
                    setItemClickId(item.id);
                    handlePopUp();
                  }}
                >
                  <HighlightOffOutlinedIcon />
                </Button>
              </LI>
            );
          })}
        </UL>
        {popUp && (
          <PopupOverlay>
            <PopupContent>
              <CloseBtn
                onClick={(e) => {
                  handleDelete(itemClickId);
                  handlePopUp();
                }}
              >
                <CloseOutlinedIcon style={iconStyle} />
              </CloseBtn>
              <PopButton onClick={(e) => handlePopUp()}>Undo</PopButton>
            </PopupContent>
          </PopupOverlay>
        )}
      </Wrapper>
    </Container>
  );
};

export default List;

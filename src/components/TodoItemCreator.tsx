import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { todoListState } from "../states/atoms/todoList";
import TodoListStats from "./TodoListStats";

let id = 1;
const getId = () => {
  return id++;
};

const TodoItemCreator: React.FC = () => {
  const [title, setTitle] = useState("");
  // useRecoilValueは値を取得するのみ、変更はできない
  // const todoList = useRecoilValue(todoListState);
  // useRecoilStateは値を更新するときに使う
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        title,
        isComplete: false,
      },
    ]);
    setTitle("");
  };

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </>
  );
};

export default TodoItemCreator;

import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { todoListState } from "../states/atoms/todoList";
import TodoListStats from "./TodoListStats";
import TodoItemCreator from "./TodoItemCreator";

let id = 1;
const getId = () => {
  return id++;
};

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
      <TodoItemCreator />
      {todoList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};

export default TodoList;

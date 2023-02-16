import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { todoListState } from "../states/atoms/todoList";
import TodoListStats from "./TodoListStats";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

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
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default TodoList;

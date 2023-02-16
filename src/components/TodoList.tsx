import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { todoListFilterState } from "../states/atoms/todoList";
import { filteredTodoListState } from "../states/selectors/todoList";
import TodoListStats from "./TodoListStats";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

let id = 1;
const getId = () => {
  return id++;
};

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const handleChange = (e) => {
    setFilter(e.target.value);
  }

  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
      <select value={filter} onChange={handleChange}>
        <option value="すべて">すべて</option>
        <option value="完了">完了</option>
        <option value="未完了">未完了</option>
      </select>
      <br />
      <TodoItemCreator />
      {todoList?.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default TodoList;

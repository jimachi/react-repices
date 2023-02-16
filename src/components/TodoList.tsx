import React from "react";
import { useRecoilValue } from "recoil";

import { todoListState } from "../states/atoms/todoList";
import TodoListStats from "./TodoListStats";

const TodoList: React.FC = () => {
  // useRecoilValueは値を取得するのみ、変更はできない
  const _todoList = useRecoilValue(todoListState);

  // useRecoilStateは値を更新するときに使う
  // const [todoList, setTodoList] = useRecoilState(todoListState);

  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
      {_todoList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};

export default TodoList;

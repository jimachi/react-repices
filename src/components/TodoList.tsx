import React from "react";
import { useRecoilValue } from "recoil";

import { todoListState } from "../states/atoms/todoList";
import { todoListStatsState } from "../states/selectors/todoList";


const TodoList: React.FC = () => {
  // useRecoilValueは値を取得するのみ、変更はできない
  const _todoList = useRecoilValue(todoListState);
  const totalNum = useRecoilValue(todoListStatsState);
  // useRecoilStateは値を更新するときに使う
  // const [todoList, setTodoList] = useRecoilState(todoListState);

  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <ul>
        <li>Todoの登録数: {totalNum}</li>
      </ul>
      {_todoList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};

export default TodoList;

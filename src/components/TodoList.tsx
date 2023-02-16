import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { Todo } from "../types/Todo";

// atomは直接更新できない
const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [
    {
      id: 0,
      title: "メール送信",
      isComplete: false,
    },
  ],
});

const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    return totalNum;
  },
});

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

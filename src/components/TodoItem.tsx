import React from "react";
import { Todo } from "../types/Todo";
import { todoListState } from "../states/atoms/todoList";
import { useRecoilState } from "recoil";

type Props = {
  item: Todo;
};

const TodoItem: React.FC<Props> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const deleteItem = () => {
    const index = todoList.findIndex((listItem) => listItem.id === item.id);
    const newTodoList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1),
    ];
    setTodoList(newTodoList);
  };

  const toggleItemCompletion = () => {
    const index = todoList.findIndex((listItem) => listItem.id === item.id);
    const newTodoList = [
      ...todoList.slice(0, index),
      { ...item, isComplete: !item.isComplete },
      ...todoList.slice(index + 1),
    ];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <button onClick={toggleItemCompletion}>
        {item.isComplete ? "完" : "未"}
      </button>
      {item.title}
      <span onClick={deleteItem} style={{ cursor: "pointer" }}>
        X
      </span>
    </div>
  );
};

export default TodoItem;

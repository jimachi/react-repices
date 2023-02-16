import { todoListFilterState } from "./../atoms/todoList";
import { selector } from "recoil";
import { todoListState } from "../atoms/todoList";

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUnCompletedNum = totalNum - totalCompletedNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUnCompletedNum,
    };
  },
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "完了":
        return list.filter((item) => item.isComplete);
      case "未完了":
        return list.filter((item) => !item.isComplete);
      case "すべて":
        return list;
    }
  },
});

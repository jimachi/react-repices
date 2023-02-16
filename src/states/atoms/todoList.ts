import { atom } from "recoil";
import { Todo } from "../../types/Todo";

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [
    {
      id: 0,
      title: "メール送信",
      isComplete: false,
    },
  ],
});

export const todoListFilterState = atom<"すべて" | "完了" | "未完了">({
  key: "todoListFilterState",
  default: "すべて",
});

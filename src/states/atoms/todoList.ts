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

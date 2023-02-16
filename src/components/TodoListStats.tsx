import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../states/selectors/todoList";

const TodoListStats = () => {
  const totalNum = useRecoilValue(todoListStatsState);

  return (
    <ul>
      <li>Todoの登録数: {totalNum}</li>
    </ul>
  );
};

export default TodoListStats;

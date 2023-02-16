import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../states/selectors/todoList";

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUnCompletedNum } =
    useRecoilValue(todoListStatsState);

  return (
    <ul>
      <li>Todoの登録数: {totalNum}</li>
      <li>完了の数: {totalCompletedNum}</li>
      <li>未完了の数: {totalUnCompletedNum}</li>
    </ul>
  );
};

export default TodoListStats;

import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoList } from "../store/atoms/todo.atom";
import ToDoCard from "./ToDoCard";
import { sortedToDos } from "../store/selectors/todo.selector";

function ToDoList() {
  const setToDos = useSetRecoilState(toDoList);
  const toDos = useRecoilValue(sortedToDos);

  const handleDeleteTask = (id) => {
    setToDos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleTaskCheck = (id) => {
    setToDos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { 
              ...todo,
              isCompleted: !todo.isCompleted,
              completedId: !todo.isCompleted ? prev.filter(n => n.completedId).length + 1 : null,
            }
          : todo
      )
    );
  };

  return (
    <section className="grid grid-cols-1 gap-2 ">
      {toDos?.map((todo, i) => (
        <ToDoCard
          key={i}
          todo={todo}
          handleDeleteTask={handleDeleteTask}
          handleTaskCheck={handleTaskCheck}
        />
      ))}
    </section>
  );
}

export default ToDoList;

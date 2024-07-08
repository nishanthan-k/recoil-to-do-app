import { useRecoilState, useRecoilValue } from "recoil";
import useSetLocalStorage from "../hooks/useSetLocalStorage";
import { toDoList } from "../store/atoms/todo.atom";
import { sortedToDos } from "../store/selectors/todo.selector";
import ToDoCard from "./ToDoCard";

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoList);
  const sortedToDo = useRecoilValue(sortedToDos);
  const setLS = useSetLocalStorage();

  const handleDeleteTask = (id) => {
    const updatedToDos = toDos.filter((todo) => todo.id !== id);

    setToDos(updatedToDos);
    setLS('todos', updatedToDos);
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
      {sortedToDo?.map((todo, i) => (
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

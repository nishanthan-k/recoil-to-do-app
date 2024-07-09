import { useRecoilStateLoadable, useRecoilValue } from "recoil";
import useSetLocalStorage from "../hooks/useSetLocalStorage";
import { toDoList } from "../store/atoms/todo.atom";
import { sortedToDos } from "../store/selectors/todo.selector";
import ToDoCard from "./ToDoCard";
import Loader from "../global/loader/Loader";

function ToDoList() {
  const [toDos, setToDos] = useRecoilStateLoadable(toDoList);
  const sortedToDo = useRecoilValue(sortedToDos);
  const setLS = useSetLocalStorage();

  console.log(toDos.state);

  const handleDeleteTask = (id) => {
    const updatedToDos = toDos.filter((todo) => todo.id !== id);

    setToDos(updatedToDos);
    setLS('todos', updatedToDos);
  };

  const handleTaskCheck = (id) => {
    const updatedToDos = toDos.map((todo) =>
      todo.id === id
        ? { 
          ...todo,
          isCompleted: !todo.isCompleted,
          completedId: !todo.isCompleted ? toDos.filter(n => n?.completedId).length + 1 : null,
        }
        : todo
    )

    setLS('todos', updatedToDos);
    setToDos(updatedToDos)
  };

  return (
    {toDos.state === 'loading' ? (
      <Loader />
    ) : (
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
    ) }
  );
}

export default ToDoList;

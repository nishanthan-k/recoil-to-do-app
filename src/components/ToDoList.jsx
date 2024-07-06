import { useRecoilState } from "recoil";
import { toDoList } from "../store/atoms/todo.atom";
import ToDoCard from "./ToDoCard";

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoList);

  return (
    <section className='grid grid-cols-1 gap-2 '>
      {toDos.map((todo, i) => <ToDoCard todo={todo} setToDos={setToDos} key={i} />)}
    </section>
  )
}

export default ToDoList;

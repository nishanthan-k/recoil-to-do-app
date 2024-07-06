import { useRecoilValue } from "recoil"
import { toDoList } from "../store/atoms/todo.atom"
import ToDoCard from "./ToDoCard";

function ToDoList() {
  const toDos = useRecoilValue(toDoList);

  return (
    <section className='grid grid-cols-1 gap-2 '>
      {toDos.map((item, i) => <ToDoCard item={item} key={i} />)}
    </section>
  )
}

export default ToDoList;

import { useRecoilState } from "recoil";
import { newToDoAtom, toDoList } from "../store/atoms/todo.atom";
import { useCallback } from "react";

function AddNewToDo() {
  const [newToDo, setNewToDo] = useRecoilState(newToDoAtom);
  const [toDo, setToDo] = useRecoilState(toDoList);
  console.log('newtodo re-render');

  const handleSetToDo = useCallback(() => {
    const currToDo = {
      task: newToDo,
      id: toDo.length ? toDo[toDo.length - 1].id + 1 : 0,
      isCompleted: false,
    }
    setToDo(todo => [...todo, currToDo])
    setNewToDo('')
  }, [toDo, newToDo])

  return (
    <div className="w-full flex justify-between gap-4 h-fit">
      <input 
        type="text"
        alt="Create a to do..."
        autoFocus
        className="w-11/12 h-10 rounded-sm hover:ring-slate-400 hover:ring-2 focus:rounded-md outline-none focus:ring-2 focus:ring-blue-400 px-2"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <button
        className="bg-blue-400 hover:bg-sky-600 px-6 py-0.5 rounded-md"
        onClick={handleSetToDo}
      >
        Add
      </button>
    </div>
  )
}

export default AddNewToDo;

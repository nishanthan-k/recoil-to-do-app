import { useRecoilState, useSetRecoilState } from "recoil";
import { newToDoAtom, toDoList } from "../store/atoms/todo.atom";

function AddNewToDo() {
  const [newToDo, setNewToDo] = useRecoilState(newToDoAtom);
  const setToDo = useSetRecoilState(toDoList);
  console.log('newtodo re-render');

  const handleSetToDo = () => {
    const currToDo = {
      task: newToDo,
      isCompleted: false,
    }
    setToDo(todo => [...todo, currToDo])
  }

  return (
    <div className="w-full flex justify-between gap-4 h-fit">
      <input 
        type="text"
        alt="Create a to do..."
        autoFocus
        className="w-5/6 rounded-sm hover:ring-slate-400 hover:ring-2 focus:rounded-md outline-none focus:ring-2 focus:ring-blue-400 px-2"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <button 
        className="bg-blue-400 hover:bg-sky-600 px-4 py-0.5 rounded-md"
        onClick={() => handleSetToDo()}
      >
        Add
      </button>
    </div>
  )
}

export default AddNewToDo;

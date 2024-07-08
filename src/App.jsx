import { useSetRecoilState } from "recoil"
import AddNewToDo from "./components/AddNewToDo"
import ToDoList from "./components/ToDoList"
import useGetLocalStorage from "./hooks/useGetLocalStorage"
import { toDoList } from "./store/atoms/todo.atom"
import { useEffect } from "react"


function App() {
  const setToDo = useSetRecoilState(toDoList);
  const lsArr = useGetLocalStorage('todos');

  useEffect(() => {
    setToDo((todo) => [...todo, ...lsArr]);
    console.log('APP');
  }, [setToDo, lsArr]);

  return (
    <main className="w-screen h-dvh overflow-auto no-scrollbar bg-slate-800 flex justify-center py-10 px-10 mb:px-7">
      <section className="max-w-xl w-full flex flex-col gap-10">
        <AddNewToDo />
        <ToDoList />
      </section>
    </main>
  )
}

export default App
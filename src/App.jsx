import AddNewToDo from "./components/AddNewToDo"
import ToDoList from "./components/ToDoList"


function App() {
  return (
    <main className="w-screen h-screen bg-slate-700 flex justify-center p-10">
      <section className="max-w-xl w-full flex flex-col gap-10">
        <AddNewToDo />
        <ToDoList />
      </section>
    </main>
  )
}

export default App
import AddNewToDo from "./components/AddNewToDo"
import ToDoList from "./components/ToDoList"


function App() {
  return (
    <main className="w-screen h-screen bg-slate-800 flex justify-center py-10 px-10 mb:px-7">
      <section className="max-w-xl w-full flex flex-col gap-10">
        <AddNewToDo />
        <ToDoList />
      </section>
    </main>
  )
}

export default App
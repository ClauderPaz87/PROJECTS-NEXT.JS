import Todo from "../../components/Todo";
import Search from "../../components/Search";
import Filter from "../../components/Filter";
import TodoForm from "../../components/TodoForm";
import "./style.css";
import { useTaskStore } from "../../store/TaskStore";
import { useState } from "react";

function App() {
  const { tasks, searchTask, filterTask } = useTaskStore();
  const [sort,setSort] = useState('')
  
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search />
      <Filter setSort={setSort}/>
      <div className="todo-list">
        {tasks
          .sort((a,b)=> sort === "Asc" ? a.text.localeCompare(b.text) : sort === "Desc" ? b.text.localeCompare(a.text) : '' )
          .filter((task) => {
            if (filterTask === "Completed") {
              return task.completed;
            }
            if (filterTask === "Incomplete") {
              return !task.completed;
            } else {
              return true;
            }
          })
          .filter((task) => task.text.toLowerCase().includes(searchTask))
          .map((task) => (
            <Todo key={task.id} task={task} />
          ))}
      </div>
      ;
      <TodoForm />
    </div>
  );
}

export default App;

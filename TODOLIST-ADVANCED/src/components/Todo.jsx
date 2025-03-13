import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTaskStore } from '../store/TaskStore';

const Todo = ({task}) => {
  const {removeTask,completedTask} = useTaskStore()
  const navigate = useNavigate()
  
  const btnRemove = (id)=>{
    removeTask(id)
  }

  const btnCompleted = (id,checked)=>{
    completedTask(id, checked)
  }

  const btnEdit = (id)=>{
    const query = new URLSearchParams()
    query.set("id", id)
    query.set("task", task.text)
    query.set("select", task.category)
    navigate(`/editTask?${query.toString()}`)
  }

  return (
    <div className="todo">
      <div style={{textDecoration:task.completed ? 'line-through': ''}} className="content">
        <p>{task.text}</p>
        <p className="category">{task.category}</p>
      </div>
      <div>
        <button onClick={()=>btnCompleted(task.id,task.completed)}
          className="complete"
        >
          Completar
        </button>
        <button onClick={()=>btnRemove(task.id)} className="remove">
          x
        </button>
        <button onClick={()=>btnEdit(task.id)} className="edit">
          <FaRegEdit />
        </button>
      </div>
    </div>
  );
};

export default Todo;

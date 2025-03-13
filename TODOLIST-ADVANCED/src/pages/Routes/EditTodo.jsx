import { useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useTaskStore } from "../../store/TaskStore";

const EditTodo = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const inputEdit = useRef("");
  const [selectC, setSelectC] = useState('')
  const {editTask} = useTaskStore()

  const id = searchParams.get("id")
  const task = searchParams.get("task");
  const select = searchParams.get("select");

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!inputEdit.current.value || !selectC) return
    const updateInput = inputEdit.current.value
    const updateSelect = selectC
    editTask(id, updateInput, updateSelect)

    navigate(`/`)

  }

  const selectChange = (e)=>{
    setSelectC(e)
  }

  return (
    <div className="todo-form">
      <h2 style={{color:"white"}}>Editar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputEdit}
          type="text"
          className="input"
          placeholder="Digite o título"
          defaultValue={task}
        />
        <select defaultValue={select} onChange={(e)=>selectChange(e.target.value)}>
          <option value="">Seleciona uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Editar tarefa</button>
      </form>
    </div>
  );
};

export default EditTodo;

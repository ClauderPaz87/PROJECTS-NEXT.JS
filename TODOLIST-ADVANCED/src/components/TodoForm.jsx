import { useRef,useEffect } from 'react';
import { useTaskStore } from '../store/TaskStore';

const TodoForm = ({}) => {
   const {addTask,selectType,select} = useTaskStore()
   const inputTask = useRef('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!inputTask.current.value || !select) return
        addTask(inputTask.current.value,false, select)
        inputTask.current.value = ''

    }

    const selectChange = (e)=>{
        selectType(e)
    }    

    return (
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit} >
                <input
                    ref={inputTask}
                    type="text"
                    className="input"
                    placeholder="Digite o título"
                />
                <select onChange={(e)=>selectChange(e.target.value)}>
                    <option value="">Seleciona uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    );
};

export default TodoForm;
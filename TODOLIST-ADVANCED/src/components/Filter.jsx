import { BiTask } from "react-icons/bi";
import { useTaskStore } from "../store/TaskStore";
import { useRef , useState } from "react";

const Filter = ({ setSort}) => {
  const {filter} = useTaskStore()
  
  const filterT = (e)=>{
    filter(e)
  }

  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select onChange={(e)=>filterT(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>

        <div>
          <p>Ordem alfabética:</p>
          <button onClick={()=>setSort("Asc")}>Asc</button>
          <button onClick={()=>setSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
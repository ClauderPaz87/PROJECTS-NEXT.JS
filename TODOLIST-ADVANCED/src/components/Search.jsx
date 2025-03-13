import React from "react";
import { useTaskStore } from "../store/TaskStore";

const Search = () => {
  const {search} = useTaskStore()

  const inputSearch = (e)=>{
    search(e.toLowerCase())
  }

  return (
    <div className="search">
      <h2>Pesquisar:</h2>
      <input onChange={(e)=>inputSearch(e.target.value)} placeholder="Digite para pesquisar..." />
    </div>
  );
};

export default Search;

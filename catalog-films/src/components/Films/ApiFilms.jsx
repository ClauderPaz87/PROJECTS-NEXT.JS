import React from 'react'
import axios from 'axios'
import ListFilms from './ListFilms'

const apiFilms = async () => {
  
  const getMovies = async ()=>{
    const response = await axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            api_key : '6d46e6899773f358d9389261fb6867bc',
            language: 'pt-BR'
        }
        
    })

    return response.data.results
    
  } 
  const getTv = async ()=>{
    const response = await axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/tv',
        params: {
            api_key : '6d46e6899773f358d9389261fb6867bc',
            language: 'pt-BR'
        }
        
    })

    return response.data.results
    
  } 



  const films = await getMovies()
  const tvFilm = await getTv()
  console.log(tvFilm)

  return (
    <div className='flex flex-col min-h-screen justify-center mt-12'>
      <ListFilms tvFilm={tvFilm} films={films}/>
    </div>
  )
}

export default apiFilms
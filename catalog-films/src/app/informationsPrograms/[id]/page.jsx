import axios from "axios"
import Image from "next/image"

const page = async ({params}) => {
  const { id } = await params

  const getTv = async ()=>{
    const response = await axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/tv/${id}`,
        params: {
            api_key : '6d46e6899773f358d9389261fb6867bc',
            language: 'pt-BR'
        }
        
    })

    return response.data
    
  } 

  const tvFilm = await getTv()
  console.log(tvFilm)

  return (
    <div className="flex justify-center min-h-[130vh] w-full md:pl-20 sm:min-h-[90vh] pt-16">
        <div className="flex flex-col sm:flex-row text-gray-200">
          <div className="flex justify-center sm:justify-normal">
            <Image src={`https://image.tmdb.org/t/p/w500${tvFilm.poster_path}`} alt={tvFilm.title} 
            className='w-72 h-[88%] rounded-sm object-cover'  width={700} height={700}/>
          </div>
          <div className="flex flex-col pl-7 gap-5">
            <h1 className="text-2xl font-semibold flex justify-center sm:justify-normal">{tvFilm.name}</h1>
            <p className="text-sm font-medium w-full sm:w-96 flex justify-center sm:justify-normal">{tvFilm.overview}</p>
            <p className="font-medium flex justify-center sm:justify-normal">nota do filme: {Math.round(tvFilm.vote_average)}</p>
            <p className="font-medium flex justify-center sm:justify-normal">Popularidade: {tvFilm.popularity}</p>
            <p className="font-medium flex justify-center sm:justify-normal">Data de lançamento: {tvFilm.last_air_date}</p>
          </div>
        </div>
    </div>
  )
}

export default page
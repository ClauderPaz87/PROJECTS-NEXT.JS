'use client'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { useFilmsStore } from '@/store/FilmsStore'
import { useRouter } from 'next/navigation'

const ListFilms = ({films,tvFilm}) => {
  const { addFilms,listFilms, listTv , addTv } = useFilmsStore()
  const router = useRouter()

  const getStars = (raiting)=>{
    const maxStars = 5
    const stars = Math.round(raiting / 2)
    return '★'.repeat(stars) + '✰'.repeat(maxStars - stars)
  }

  const btnAddFilms = (id,image,title,vote)=>{
    const validation = listFilms.some((film)=> film.id === id)

    if(!validation){
        return addFilms(id,image,title,vote)
    }

  }

  const btnAddTv = (id,image,name,vote)=>{
    const validation = listTv.some((tv)=> tv.id === id)

    if(!validation){
        return addTv(id,image,name,vote)
    }
       
  }

  const btnInformation = (id)=>{
    router.push(`/infromationsFilm/${id}`)
  }

  const btnInformationTv = (id)=>{
    router.push(`/informationsPrograms/${id}`)
  }
    

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-5 
    gap-3'>
        {films.map((film)=>(
            <Card key={film.id} className="group bg-black text-gray-100 w-48 h-[335px] border-0 shadow-md 
            rounded-sm p-0 hover:-translate-y-3 duration-300">
                <CardHeader className="px-0 hover:blur-sm group-hover:blur-sm">
                    <Image src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} 
                    className='w-full h-[265px] rounded-sm object-cover'  width={700} height={700}/>
                    <CardTitle className="text-sm w-full pl-3 h-3">{film.title}</CardTitle>
                    <div className='text-2xl text-yellow-400 pl-3 mt-3'>{getStars(film.vote_average)}</div>
                </CardHeader>
                <CardContent>
                    <Button
                    onClick={()=>btnInformation(film.id)}
                    className="absolute bottom-18 right-2 bg-purple-800 w-44 text-white rounded
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-purple-900
                     cursor-pointer">
                        Ver mais...
                    </Button>
                    <Button
                    onClick={()=>btnAddFilms(film.id,`https://image.tmdb.org/t/p/w500${film.poster_path}`,film.title,
                    film.vote_average)} 
                    className="absolute bottom-28 right-2 bg-purple-800 w-44 text-white rounded
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-purple-900
                     cursor-pointer">
                        Adicionar a lista
                    </Button>
                </CardContent>
            </Card>
        ))}
        {tvFilm.map((tv)=>(
            <Card key={tv.id} className="group bg-black text-gray-100 w-48 h-[335px] border-0 shadow-md 
            rounded-sm p-0 hover:-translate-y-3 duration-300">
                <CardHeader className="px-0 hover:blur-sm group-hover:blur-sm">
                    <Image src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={tv.name} 
                    className='w-full h-[265px] rounded-sm object-cover'  width={700} height={700}/>
                    <CardTitle className="text-sm w-full pl-3 h-3">{tv.name}</CardTitle>
                    <div className='text-2xl text-yellow-400 pl-3 mt-3'>{getStars(tv.vote_average)}</div>
                </CardHeader>
                <CardContent>
                    <Button
                    onClick={()=>btnInformationTv(tv.id)}
                    className="absolute bottom-18 right-2 bg-purple-800 w-44 text-white rounded
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-purple-900
                     cursor-pointer">
                        Ver mais...
                    </Button>
                    <Button
                    onClick={()=>btnAddTv(tv.id,`https://image.tmdb.org/t/p/w500${tv.poster_path}`,tv.name,
                    tv.vote_average)}
                    className="absolute bottom-28 right-2 bg-purple-800 w-44 text-white rounded
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-purple-900
                     cursor-pointer">
                        Adicionar a lista
                    </Button>
                </CardContent>
            </Card>
        ))}
    </div>
  )
}

export default ListFilms
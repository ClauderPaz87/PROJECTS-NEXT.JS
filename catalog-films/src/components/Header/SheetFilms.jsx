'use client'
import Image from "next/image"
import { useFilmsStore } from "@/store/FilmsStore"
import { useState } from "react"
import { Star } from "lucide-react"

const SheetFilms = () => {
  const { listFilms,updateRating, updateRatingTv ,listTv } = useFilmsStore()

  const items = [...(new Array(5).keys())]

  const handleClick = (id,index,rating) => {
    updateRating(id,index + 1)
    if (rating === index + 1 && index === 0) {
        updateRating(id, 0);
    } else {
        updateRating(id, index + 1);
    }
  };

  const handleClickTv = (id,index,rating) => {
    updateRatingTv(id,index + 1)
    if (rating === index + 1 && index === 0) {
        updateRatingTv(id, 0);
    } else {
        updateRatingTv(id, index + 1);
    }
  };

  return (
    <div>
        <div className="flex justify-center">
            <h1 className="text-teal-500 text-xl font-bold mt-5 underline">LISTA DE FILMES</h1>
        </div>
        {listTv.map((tv)=>(
            <div key={tv.id} className="mt-12 flex-col">
                <div className="flex justify-center">
                    <p className="font-medium text-lg">{tv.name}</p>
                </div>
                <div className="flex justify-center mt-3">
                    <Image src={tv.image} alt={`Imagem dos programas ${tv.title}`} className="w-44 h-56 object-cover" 
                    width={700} height={700}/>
                </div>
                <div className="flex flex-row w-full justify-center ">
                    {items.map((_,index)=>(
                        <div key={index} className='text-4xl text-yellow-400 mt-3 cursor-pointer'>
                           <span 
                           onClick={() => handleClickTv(tv.id,index,tv.rating)}>
                                <Star fill={`${(tv.rating) > index
                                ? "#facc15" : "none"
                                }`}/>
                           </span>
                        </div>
                    ))}
                </div>
            </div>
        ))} 
        {listFilms.map((film)=>(
            <div key={film.id} className="mt-12 flex-col">
                <div className="flex justify-center">
                    <p className="font-medium text-lg">{film.title}</p>
                </div>
                <div className="flex justify-center mt-3">
                    <Image src={film.image} alt={`Imagem do filme ${film.title}`} className="w-44 h-56 object-cover" 
                    width={700} height={700}/>
                </div>
                <div className="flex flex-row w-full justify-center ">
                    {items.map((_,index)=>(
                        <div key={index} className='text-4xl text-yellow-400 mt-3 cursor-pointer'>
                           <span 
                           onClick={() => handleClick(film.id,index,film.rating)}>
                                <Star fill={`${(film.rating) > index
                                ? "#facc15" : "none"
                                }`}/>
                           </span>
                        </div>
                    ))}
                </div>
            </div>
        ))} 
    </div>
  )
}

export default SheetFilms
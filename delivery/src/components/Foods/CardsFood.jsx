'use client'
import { DollarSign, Heart } from 'lucide-react';
import { Card } from '../ui/card'
import { Button } from '../ui/button';
import Image from 'next/image';
import { useDeliveryStore } from '@/store/DeliveryStore';
import { useEffect, useState } from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const CardsFood = ({food}) => {
  const { addFoods,foods } = useDeliveryStore()
  const [heart,setHeart] = useState()

  useEffect(() => {
    const savedHearts = JSON.parse(localStorage.getItem('food-hearts') || '{}');
    setHeart(savedHearts[food.id] || false);
  }, [food.id]);

  const toggleHeart = () => {
    const newHeartState = !heart;
    setHeart(newHeartState);
    
    const savedHearts = JSON.parse(localStorage.getItem('food-hearts') || '{}');
    savedHearts[food.id] = newHeartState;
    localStorage.setItem('food-hearts', JSON.stringify(savedHearts));
  };

  const stars = ()=>{
    const starsIcon = 5
    const gradeStar = Math.round(food.grade / 2)
    return '★'.repeat(gradeStar) + '✰'.repeat(starsIcon - gradeStar)
  }

  const btnAddFood = (id,image,name,price)=>{
    const validation = foods.some((food)=> food.name === name)
    if(!validation){
      addFoods(id,image,name,price)
    }
  }

  return (
    <Card  id={`food-${food.id}`} className="w-56 h-60 p-0">
      <div className="flex justify-center w-56 h-28">
        <Image
          src={food.image}
          alt={food.name}
          width={700}
          height={100}
          className="rounded-sm object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-between px-2 items-center h-1">
        <p className="text-lg font-bold font-sans">{food.name}</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={()=>toggleHeart(!heart)}
                className={`cursor-pointer text-red-600 `}
              >
              <Heart size={20} fill={ heart ? "red" : "white"}/>
              </button>
            </TooltipTrigger>
            <TooltipContent>Favorites</TooltipContent>
          </Tooltip>
          
        </TooltipProvider>
        
      </div>
      <div className="px-2 flex justify-between items-center h-5 mt-3">
        <span className=" text-orange-400 text-lg">{stars()}</span>
      </div>
      <div className="flex justify-between h-4 px-2">
        <div className="flex items-center pb-2">
          <span>
            <DollarSign size={16} className="text-orange-500" />
          </span>
          <p>{food.price.toFixed(2)}</p>
        </div>
        <div className="flex items-center h-full pb-3">
          <Button
          onClick={()=>btnAddFood(food.id,food.image,food.name,food.price)}
          className="p-3 bg-orange-500 text-white rounded-full text-xl font-light cursor-pointer
          hover:-translate-y-1 duration-200 hover:bg-orange-600 mb-3"
          variant="none"
          >
            +
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default CardsFood
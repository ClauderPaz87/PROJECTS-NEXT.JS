"use client"
import { ArrowRightIcon } from 'lucide-react';
import { Card } from '../ui/card'
import { Button } from '../ui/button';
import Image from 'next/image';

const PrimaryCard = ({ food }) => {

  const handleClick = () => {
    const element = document.getElementById(`food-${food.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      element.classList.add('ring-2', 'ring-orange-500');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-orange-500');
      }, 2000);
    }
  };

  return (
    <Card
      key={food.id}
      className="w-36 h-full rounded-md p-1 hover:bg-orange-500 duration-300 group"
    >
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Image
            src={food.image}
            alt={food.name}
            width={70}
            height={100}
            className="rounded-full w-16 h-16"
          />
        </div>
        <div className='mt-2'>
          <p className="text-orange-400 w-full text-center text-sm group-hover:text-white">{food.name}</p>
        </div>
        <div className="flex justify-center mt-1">

            <Button
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            variant={"none"}
            className="bg-orange-400 p-0 text-white cursor-pointer group-hover:bg-gray-50
            group-hover:text-orange-400"
            >
              <ArrowRightIcon />
            </Button>

        </div>
      </div>
    </Card>
  );
};

export default PrimaryCard;

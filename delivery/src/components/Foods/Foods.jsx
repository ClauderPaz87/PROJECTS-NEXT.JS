'use client'
import axios from 'axios'
import { useState, useEffect, Suspense } from 'react';
import PrimaryCard from './PrimaryCard';
import CardsFood from './CardsFood';
import { useSearchParams } from 'next/navigation';

const FoodsContent = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  const fetchFoods = async () => {
    try {
      setLoading(true);
      const url = searchTerm 
        ? `/api/foods?search=${encodeURIComponent(searchTerm)}`
        : '/api/foods';
      
      const response = await axios.get(url);
      setFoods(response.data);
    } catch (error) {
      console.error("Erro ao buscar comidas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, [searchTerm]);

  const objectFood = foods.slice(31,37);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        <span className="ml-3">Carregando...</span>
      </div>
    );
  }

  return (
    <div className='mt-4'>
      <div className='flex justify-center'>
        <p className='text-lg font-medium font-sans'>Menu Category</p>
      </div>
      
      <div className='flex justify-center mt-5 w-full'>
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-16'>
          {objectFood.map((food) => (
            <PrimaryCard key={food.id} food={food}/>
          ))}                
        </div>
      </div>

      <div className='flex justify-center w-full mt-16 md:mt-8'>
        <div className='grid grid-cols-1 gap-16 md:mr-5 md:ml-0 md:grid-cols-3 md:gap-10 lg:gap-16
        lg:grid-cols-4 xl:grid-cols-5 lg:px-8'>
          {foods.length > 0 ? (
            foods.map((food) => (                  
              <CardsFood key={food.id} food={food} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-lg">Nenhum resultado encontrado para "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Foods = () => {
  return (
    <Suspense fallback={<div className="text-center p-5">Carregando...</div>}>
      <FoodsContent />
    </Suspense>
  )
}

export default Foods;

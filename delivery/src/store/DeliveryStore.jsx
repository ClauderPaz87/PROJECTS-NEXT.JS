import { create } from "zustand";
import { persist } from 'zustand/middleware';

export const useDeliveryStore = create(
  persist(
    (set) => ({
      foods: [],
      primaryFood: "",
      total: 0,

      addFoods: (id, image, name, price) => {
        set((state) => ({
          foods: [...state.foods, {id, image, name, price, quantity: 1, originPrice: price}],
        }));
      },

      deleteFood: (id) => {
        set((state) => ({
          foods: state.foods.filter(food => food.id !== id)
        }));
        return true;
      },

      counterIncrement: (id) =>
        set((state) => ({
          foods: state.foods
            .map((food) => food.id === id ? { ...food, quantity: food.quantity + 1 } : food)
            .map((food) => food.id === id ? { ...food, price: food.price + food.originPrice } : food),
        })),
        
      counterDecrement: (id) => {
        set((state)=>({
          foods: state.foods.map((food)=> food.id === id ? {
              ...food,
              quantity: food.quantity - 1,
              price: food.price - food.originPrice
          }: food).filter((food)=> food.quantity >= 1)
        }))   
      },
      
      calcTotal: (value) =>
        set((state) => ({
          total: value,
        })),
    }),
    {
      name: 'delivery-app-storage', // Nome único para a chave no localStorage
      getStorage: () => localStorage, // Especifica o uso do localStorage
    }
  )
);
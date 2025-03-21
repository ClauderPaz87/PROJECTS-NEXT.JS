import { v4 } from "uuid";
import { create } from "zustand";

export const useControlStore = create((set)=>({
    productsEntries: [],
    productsExits: [],
    productsAll : [],
    total: 0,

    addProductEntries: (description, value, type)=>
        set((state)=>({
            productsEntries: [...state.productsEntries,{id:v4(), description, value, type}]
        })),
    addProductExits: (description, value, type)=>
        set((state)=>({
            productsExits: [...state.productsExits,{id:v4(), description, value, type}]
        })),
    addProductAll: (description, value, type)=>
        set((state)=>({
            productsAll: [...state.productsAll,{id:v4(),description, value, type}]
        })),
    calcTotal: (value)=>
        set((state)=>({
            total: value
        })),
    deleteProduct: (id,type)=>
        set((state)=> {
            const deleteAll = state.productsAll.filter((product) => product.id !== id)

            if(type === "entries"){
                return{
                    productsAll: deleteAll,
                    productsEntries: state.productsEntries.filter((product) => product.id !== id),
                } 
            }
            else if(type === "exits"){
                return{
                    productsAll: deleteAll,
                    productsExits: state.productsExits.filter((product) => product.id !== id),
                } 
            }

            return {
                ...state,
                productsAll: deleteAll,
            };

        }),
 
})) 
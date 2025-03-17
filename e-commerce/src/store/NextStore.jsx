import { create } from "zustand";

export const useNextStore = create((set) => ({
    productCart: [],
    total: 0,

    addProducts: (id,image,title,price)=>
      set((state)=>({
        productCart: [...state.productCart,{id,image,title,price,originPrice:price,quantity:1,}],
        
      })),
    buyTotal: (value)=>
      set((state)=>({
        total: value,
      })),
    increment : (id)=>
      set((state)=>({
        productCart: state.productCart.map((product)=>
          product.id === id ? { ...product, quantity:product.quantity + 1 } : product
        )
        .map((product)=>
          product.id === id ? { ...product, price: product.price + product.originPrice} : product
        )
      })),
    descrement : (id)=>
      set((state)=>({
        productCart: state.productCart.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .map((product)=>
          product.id === id ? { ...product, price: product.price - product.originPrice} : product
        )
        .filter((product) => product.quantity > 0) 

      })),
        
}));
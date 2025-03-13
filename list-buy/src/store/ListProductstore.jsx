import { create } from "zustand";

export const useListBuyStore = create((set, get) => ({
  products: [],

  addProductFromAPI: async () => {
    try {
      const randomId = Math.floor(Math.random() * 20) + 1; 
      const response = await fetch(`https://fakestoreapi.com/products/${randomId}`);
      const product = await response.json();

      const existingProducts = get().products;

      if (!existingProducts.find((p) => p.id === product.id)) {
        set({
          products: [
            ...existingProducts,
            {
              id: product.id,
              image: product.image,
              product: product.title,
              category: product.category,
              price: product.price,
              originPrice: product.price,
              value: 1,
              total: product.price,
            },
          ],
        });
      } else {
        console.warn("Produto já adicionado!");
      }
    } catch (error) {
      console.error("Erro ao adicionar o produto:", error);
    }
    finally{
    }
  },

  deleteProduct: (id)=>
    set((state)=>({
      products: state.products.filter((product)=> product.id !== id )
    })),  

  updateCountIncrement: (id) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? {
              ...product,
              value: product.value + 1,
              total: product.total + product.originPrice,
            }
          : product
      ),
    })),

  updateCountDecrement: (id) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? {
              ...product,
              value: product.value <= 1 ? 1 : product.value - 1,
              total: product.value <= 1 ? 1 : product.total - product.originPrice,
            }
          : product
      ),
    })),
}));

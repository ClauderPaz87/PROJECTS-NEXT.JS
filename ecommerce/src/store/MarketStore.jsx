import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useMarkeStore = create(
  persist(
    (set, get) => ({
      products: [],
      productsCart: [],
      productsLike: [],
      unity: 1,
      total: 0,
      price: 0,
      shipping: 0,
      searchTerm: "",

      setSearchTerm: (term) => set({ searchTerm: term }),

      addProducts: async () => {
        try {
          const response = await fetch("/api/products");
          if (!response.ok) {
            throw new Error("Falha ao buscar produtos");
          }
          const data = await response.json();
      
          const currentProducts = get().products;
      
          const dataProducts = data.map((d) => {
            const existingProduct = currentProducts.find((p) => p.id === d.id);
            return {
              ...d,
              unity: existingProduct?.unity || 1,
              originPrice: d.price,
              disabledButton: existingProduct?.disabledButton || false,
              like: existingProduct?.like || false,
            };
          });
      
          set(() => ({ products: dataProducts }));
        } catch (error) {
          console.error("Erro:", error);
        }
      },

      productsCartAdd: (
        id,
        name,
        img,
        shipping,
        stock,
        price,
        unity,
        originPrice
      ) => {
        const verification = get().productsCart.some((p) => p.id === id);
        if (!verification) {
          set((state) => ({
            productsCart: [
              ...state.productsCart,
              {
                id,
                name,
                img,
                shipping,
                stock,
                price,
                unity,
                originPrice,
                disabledButton: true,
              },
            ],
            products: state.products.map((p) =>
              p.id === id ? { ...p, disabledButton: true } : p
            ),
          }));
        }
      },

      heartLike: (id, img, name, price, like) => {
        const alreadyLiked = get().productsLike.some((p) => p.id === id);
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, like: !p.like } : p
          ),
          productsLike: alreadyLiked
            ? state.productsLike.filter((p) => p.id !== id)
            : [...state.productsLike, { id, img, name, price, like: true }],
        }));
      },

      starsRaiting: (raiting) => {
        const maxStars = 5;
        const stars = Math.round(raiting / 1);
        return "★".repeat(stars) + "✰".repeat(maxStars - stars);
      },

      incrementUnity: (id, product) => {
        if (product.unity >= product.stock)
          return toast.error("Estoque esgotado", {
            autoClose: 2000,
            pauseOnHover: false,
            closeOnClick: true,
          });
        set((state) => ({
          products: state.products
            .map((p) => (p.id === id ? { ...p, unity: p.unity + 1 } : p))
            .map((p) =>
              p.id === id ? { ...p, price: p.price + p.originPrice } : p
            ),
          productsCart: state.productsCart
            .map((p) => (p.id === id ? { ...p, unity: p.unity + 1 } : p))
            .map((p) =>
              p.id === id ? { ...p, price: p.price + p.originPrice } : p
            ),
        }));
      },

      decrementUnity: (id, product) => {
        if (product.unity <= 1) return;
        set((state) => ({
          products: state.products
            .map((p) => (p.id === id ? { ...p, unity: p.unity - 1 } : p))
            .map((p) =>
              p.id === id ? { ...p, price: p.price - p.originPrice } : p
            ),
          productsCart: state.productsCart
            .map((p) => (p.id === id ? { ...p, unity: p.unity - 1 } : p))
            .map((p) =>
              p.id === id ? { ...p, price: p.price - p.originPrice } : p
            ),
        }));
      },

      calcTotal: () => {
        const product = get().productsCart;
        const price = product.reduce((acc, item) => acc + item.price, 0);
        const shipping = product.reduce((acc, item) => acc + item.shipping, 0);
        const total = price + shipping;

        set((state) => ({ price: price, shipping: shipping, total: total }));
      },

      deleteProduct: (id) => {
        set((state) => ({
          productsCart: state.productsCart.filter((p) => p.id !== id),
          products: state.products.map((p) =>
            p.id === id ? { ...p, disabledButton: !p.disabledButton } : p
          ),
        }));
      },

      deleteProductLike: (id) => {
        set((state) => ({
          productsLike: state.productsLike.filter((p) => p.id !== id),
          products: state.products.map((p) =>
            p.id === id ? { ...p, like: false } : p
          ),
        }));
      },
    }),
    {
      name: "marke-store",
      version: 2,
      getStorage: () => localStorage,
    }
  )
);

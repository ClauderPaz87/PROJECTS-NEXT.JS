import { create } from "zustand";

export const useFilmsStore = create((set) => ({
    listFilms: [],
    listTv: [],

    addFilms: (id,image,title)=>
        set((state)=>({
          listFilms: [...state.listFilms,{id,image,title,rating:0}],
        })),
    
    updateRating: (id, rating) =>
        set((state) => ({
            listFilms: state.listFilms.map((film) =>
                film.id === id ? { ...film, rating } : film
            ),
        })),
    updateRatingTv: (id, rating) =>
        set((state) => ({
            listTv: state.listTv.map((tv) =>
                tv.id === id ? { ...tv, rating } : tv
            ),
        })),
    
    addTv: (id,image,name)=>
        set((state)=>({
            listTv: [...state.listTv,{id,image,name,rating:0}],
        })),
}));
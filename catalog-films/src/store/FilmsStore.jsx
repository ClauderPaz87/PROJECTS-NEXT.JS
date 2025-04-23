import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";

export const useFilmsStore = create(
  persist(
    (set, get) => ({
      films: [],
      tv: [],
      filmList: [],
      searchResults: [],
      search: "",
      setSearch: (value) => set({ search: value }),

      searchFilms: (query) => {
        const { films, tv } = get();
        const lowerQuery = query.toLowerCase();

        const filteredFilms = films.filter((f) =>
          f.title?.toLowerCase().includes(lowerQuery)
        );

        const filteredTV = tv.filter((t) =>
          t.name?.toLowerCase().includes(lowerQuery)
        );

        set({ searchResults: [...filteredFilms, ...filteredTV] });
      },

      addFilmsApi: async () => {
        try {
          const response = await axios.get(
            "https://api.themoviedb.org/3/discover/movie",
            {
              params: {
                api_key: "6d46e6899773f358d9389261fb6867bc",
                language: "pt-BR",
              },
            }
          );

          const filmesDetalhados = await Promise.all(
            response.data.results.map(async (f) => {
              const existing = get().films.find(item => item.id === f.id);
              const [detalhes, creditos, classificacao] = await Promise.all([
                axios.get(`https://api.themoviedb.org/3/movie/${f.id}`, {
                  params: {
                    api_key: "6d46e6899773f358d9389261fb6867bc",
                    language: "pt-BR",
                  },
                }),
                axios.get(
                  `https://api.themoviedb.org/3/movie/${f.id}/credits`,
                  {
                    params: {
                      api_key: "6d46e6899773f358d9389261fb6867bc",
                    },
                  }
                ),
                axios.get(
                  `https://api.themoviedb.org/3/movie/${f.id}/release_dates`,
                  {
                    params: {
                      api_key: "6d46e6899773f358d9389261fb6867bc",
                    },
                  }
                ),
              ]);

              const brRating = classificacao.data.results.find(
                (r) => r.iso_3166_1 === "BR"
              );
              const contentRating =
                brRating?.release_dates?.[0]?.certification || "";

              return {
                ...f,
                runtime: detalhes.data.runtime,
                contentRating,
                cast: creditos.data.cast.slice(0, 5),
                director:
                  creditos.data.crew.find((p) => p.job === "Director")?.name ||
                  "",
                disabledBtn: existing?.disabledBtn || false,
                likeBtn: existing?.likeBtn || false,
                dislikeBtn: existing?.dislikeBtn || false,
                loveBtn: existing?.loveBtn || false,
              };
            })
          );

          set({ films: filmesDetalhados });
        } catch (error) {
          console.error("Erro ao buscar filmes:", error);
        }
      },

      addTvApi: async () => {
        try {
          const response = await axios.get(
            "https://api.themoviedb.org/3/discover/tv",
            {
              params: {
                api_key: "6d46e6899773f358d9389261fb6867bc",
                language: "pt-BR",
              },
            }
          );

          const tvDetalhadas = await Promise.all(
            response.data.results.map(async (tv) => {
              const [detalhes, creditos, classificacao] = await Promise.all([
                axios.get(`https://api.themoviedb.org/3/tv/${tv.id}`, {
                  params: {
                    api_key: "6d46e6899773f358d9389261fb6867bc",
                    language: "pt-BR",
                  },
                }),
                axios.get(`https://api.themoviedb.org/3/tv/${tv.id}/credits`, {
                  params: {
                    api_key: "6d46e6899773f358d9389261fb6867bc",
                  },
                }),
                axios.get(
                  `https://api.themoviedb.org/3/tv/${tv.id}/content_ratings`,
                  {
                    params: {
                      api_key: "6d46e6899773f358d9389261fb6867bc",
                    },
                  }
                ),
              ]);

              const brRating = classificacao.data.results.find(
                (r) => r.iso_3166_1 === "BR"
              );
              const contentRating = brRating?.rating || "";

              return {
                ...tv,
                episode_run_time: detalhes.data.episode_run_time?.[0] || 0,
                number_of_seasons: detalhes.data.number_of_seasons,
                contentRating,
                created_by: detalhes.data.created_by?.[0]?.name || "",
                cast: creditos.data.cast.slice(0, 5),
                disabledBtn: false,
                likeBtn: false,
                dislikeBtn: false,
                loveBtn: false,
              };
            })
          );

          set({ tv: tvDetalhadas });
        } catch (error) {
          console.error("Erro ao buscar TV Shows:", error);
        }
      },

      listFilms: (id, image, title) => {
        set((state) => ({
          filmList: [
            ...state.filmList,
            { id, image, title, disabledBtn: false },
          ],
          films: state.films.map((f) =>
            f.id === id ? { ...f, disabledBtn: true } : f
          ),
          tv: state.tv.map((f) =>
            f.id === id ? { ...f, disabledBtn: true } : f
          ),
        }));
      },

      removeList: (id) => {
        set((state) => ({
          filmList: state.filmList.filter((f) => f.id !== id),
          films: state.films.map((f) =>
            f.id === id ? { ...f, disabledBtn: false } : f
          ),
          tv: state.tv.map((f) =>
            f.id === id ? { ...f, disabledBtn: false } : f
          ),
        }));
      },

      starsRaiting: (raiting) => {
        const maxStars = 5;
        const stars = Math.round(raiting / 2);
        return "★".repeat(stars) + "✰".repeat(maxStars - stars);
      },

      like: (id) => {
        set((state) => ({
          films: state.films.map((f) =>
            f.id === id
              ? { ...f, likeBtn: !f.likeBtn, dislikeBtn: false, loveBtn: false }
              : f
          ),
          filmList: state.filmList.map((f) =>
            f.id === id
              ? { ...f, likeBtn: !f.likeBtn, dislikeBtn: false, loveBtn: false }
              : f
          ),
          tv: state.tv.map((f) =>
            f.id === id
              ? { ...f, likeBtn: !f.likeBtn, dislikeBtn: false, loveBtn: false }
              : f
          ),
        }));
      },

      dislike: (id) => {
        set((state) => ({
          films: state.films.map((f) =>
            f.id === id
              ? {
                  ...f,
                  dislikeBtn: !f.dislikeBtn,
                  likeBtn: false,
                  loveBtn: false,
                }
              : f
          ),
          filmList: state.filmList.map((f) =>
            f.id === id
              ? {
                  ...f,
                  dislikeBtn: !f.dislikeBtn,
                  likeBtn: false,
                  loveBtn: false,
                }
              : f
          ),
          tv: state.tv.map((f) =>
            f.id === id
              ? {
                  ...f,
                  dislikeBtn: !f.dislikeBtn,
                  likeBtn: false,
                  loveBtn: false,
                }
              : f
          ),
        }));
      },

      love: (id) => {
        set((state) => ({
          films: state.films.map((f) =>
            f.id === id
              ? { ...f, loveBtn: !f.loveBtn, dislikeBtn: false, likeBtn: false }
              : f
          ),
          filmList: state.filmList.map((f) =>
            f.id === id
              ? { ...f, loveBtn: !f.loveBtn, dislikeBtn: false, likeBtn: false }
              : f
          ),
          tv: state.tv.map((f) =>
            f.id === id
              ? { ...f, loveBtn: !f.loveBtn, dislikeBtn: false, likeBtn: false }
              : f
          ),
        }));
      },
    }),
    {
      name: "films-store",
      version:2,
      getStorage: () => localStorage,
    }
  )
);

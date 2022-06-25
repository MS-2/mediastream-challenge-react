import { createContext, useContext } from "react";

export const Context = createContext({
    movies: [],
    genres: [],
    loader: false,
    filters: {
        selectedGenre: {
            value: "",
            setSelectedGenre: () => { },
        },
        order: {
            value: "",
            setSort: () => { },
        },
    },
});

export const Provider = Context.Provider;
export const useLibraryContext = () => useContext(Context);
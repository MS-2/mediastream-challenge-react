import { useMemo } from "react";
import { useLibraryContext } from "../context";
import { sort_list } from "../utils";
import Movie from "./movie";

function MovieList() {
    const {
        movies: movies,
        filters: {
            selectedGenre: { value: selectedGenreVal },
            order: { value: orderVal },
        },
    } = useLibraryContext();

    const moviesFiltered = useMemo(() => {
        let filtered = movies.sort(sort_list[orderVal].sort);
        if (selectedGenreVal) {
            filtered = movies.filter((m) =>
                m.genres.includes(selectedGenreVal)
            );
        }
        return filtered;
    }, [movies, orderVal, selectedGenreVal]);

    return (
        <ul className="movie-library__list">
            {moviesFiltered.map(({ title, id, posterUrl, year, genres }) => (
                <Movie
                    key={id}
                    title={title}
                    year={year}
                    genres={genres}
                    posterUrl={posterUrl}
                />
            ))}
        </ul>
    );
};

export default MovieList;
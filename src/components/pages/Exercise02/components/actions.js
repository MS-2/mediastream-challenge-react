import { useCallback, useMemo } from "react";
import { useLibraryContext } from "../context/index";
import { sort_list } from "../utils/index";

function Actions() {

    const {
        genres: genres,
        filters: { selectedGenre: { value: selectedGenreVal, setSelectedGenre }, order: { value: orderVal, setSort } },
    } = useLibraryContext();

    const setChangeSort = useCallback(
        (event) => {
            event.preventDefault();
            setSort((p_sort) =>
                p_sort === sort_list.ASC.value ? sort_list.DESC.value : sort_list.ASC.value
            );
        },
        [setSort]
    );

    const setChangeGenre = useCallback(
        (event) => {
            event.preventDefault();
            const currentVal = event.currentTarget ? event.currentTarget.value : event.target.value;
            setSelectedGenre(currentVal);
        },
        [setSelectedGenre]
    );

    const Button_Order_Text = useMemo(() =>
        orderVal === sort_list.ASC.value ? sort_list.DESC.buttonText : sort_list.ASC.buttonText,
        [orderVal]
    );

    return (
        <div className="movie-library__actions">
            <select
                placeholder="Search by genre..."
                name="genre"
                value={selectedGenreVal}
                onChange={setChangeGenre}
            >
                <option value="">All</option>
                {genres.map((e, i) => (
                    <option key={i} value={e}>
                        {e}
                    </option>
                ))}
            </select>
            <button
                className="movie-library__actions__button"
                onClick={setChangeSort}
                type="button"
            >
                {Button_Order_Text}
            </button>
        </div>
    );
};

export default Actions;
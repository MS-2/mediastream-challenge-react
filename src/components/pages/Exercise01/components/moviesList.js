
import { useCartContext } from "../context";
function MoviesList({ movies }) {
    const { addToCard } = useCartContext()
    return (
        <div className="movies__list">
            <ul>
                {movies.map((movie, i) => (
                    <li className="movies__list-card" key={i}>
                        <ul>
                            <li>
                                ID: {movie.id}
                            </li>
                            <li>
                                Name: {movie.name}
                            </li>
                            <li>
                                Price: ${movie.price}
                            </li>
                        </ul>
                        {/* <button onClick={() => console.log('Add to cart', movie)}> */}
                        <button onClick={() => addToCard(movie)}>
                            Add to cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MoviesList;
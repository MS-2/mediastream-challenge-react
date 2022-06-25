
import { memo } from "react";

function Movie({ title, genres, year, posterUrl }) {
    return (
        <div className="new-Movie">
            <div className="div-movie">
                <img src={posterUrl} width={"100%"} height={"100%"} />
                <div className="end-text-movie">
                    <p>{title}</p>
                    <p>{genres.join(", ")}</p>
                    <p>{year}</p>
                </div>
            </div>
        </div>
    );
}
export default memo(Movie);

import { useLibraryContext } from "../context";

function Loader() {
    const { loader } = useLibraryContext();
    return (
        <div> {loader ? "loading..." : null} </div>
    );
}

export default Loader;
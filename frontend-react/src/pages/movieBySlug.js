import { useParams } from "react-router-dom";

const MovieBySlug = () => {
    const {slug} = useParams();
    return (
        <div>
            <h1>Movie by slug: {slug}</h1>
        </div>
        
    );
}

export default MovieBySlug;
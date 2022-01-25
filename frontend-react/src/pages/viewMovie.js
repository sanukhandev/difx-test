import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListComments from "../components/listComments";
import MovieCard from "../components/movieCard";
import NewComment from "../components/newComment";
import Spinner from "../components/spinner";

const ViewMovie = (props) => {
    const { slug } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            const movies = [
                {
                    id: 1,
                    title: "The Shawshank Redemption",
                    year: 1994,
                    genre: "Crime"
                },
                {
                    id: 2,
                    title: "The Godfather",
                    year: 1972,
                    genre: "Crime"
                },
                {
                    id: 3,
                    title: "The Godfather: Part II",
                    year: 1974,
                    genre: "Crime"
                },
                {
                    id: 4,
                    title: "The Dark Knight",
                    year: 2008,
                    genre: "Action"
                }

            ]
            const data = movies.find(movie => movie.id === +slug);
            setMovie(data);
            setLoading(false);
        };
        fetchMovie();
    }, [slug]);

    return (
        <div className="mx-40 my-5">
            <div className="mt-5 md:mt-0 md:col-span-2">
                {loading ? (
                    <Spinner />
                ) : (
                    <div>
                        <MovieCard movie={movie} />
                        <ListComments/>
                        <NewComment/>
                    </div>
                )}
            </div>
        </div>

    );

}

export default ViewMovie;
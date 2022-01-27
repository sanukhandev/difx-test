import { useContext, useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../App";
import ErrorAlert from "../components/errorAlert";
import ListComments from "../components/listComments";
import MovieCard from "../components/movieCard";
import NewComment from "../components/newComment";
import Spinner from "../components/spinner";
import { fetchHook } from "../utils/fetchUtil";

const ViewMovie = (props) => {
    const { slug } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([])
    const [error, setError] = useState(null)
    const { state } = useContext(AuthContext)
    const [isAuth, setIsAuth] = useState(state.isAuthenticated)
    const fetchMovieBySlug = async () => {
        const moviePromise = await fetchHook(`films/get-movie-by-slug/${slug}`, { method: 'GET' })
        if (moviePromise.status === 'ERROR') {
            dispatch({ type: 'ERROR' })
        }
        else {
            dispatch({ type: 'SET_MOVIE', payload: moviePromise })
        }

    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'ERROR':
                setLoading(false)
                setError('Error fetching Movie')
                setMovie([])
                break;
            case 'SET_MOVIE':
                setLoading(false)
                setMovie(action.payload.data)
                setComments(action.payload.data.comments)
                break;
            case 'NEW_COMMENT':
                fetchMovieBySlug()
                break;
            default:
                return state;

        }
    }
    const [movieState, dispatch] = useReducer(reducer, {});

    useEffect(() => {
        fetchMovieBySlug();
    }, [slug]);
    useEffect(() => {
        state.isAuthenticated ? setIsAuth(true) : setIsAuth(false)
    }, [state])
    return (
        <div className="mx-40 my-5">
            <div className="mt-5 md:mt-0 md:col-span-2">
                {loading ? (
                    <Spinner />
                ) : (
                    error ? <ErrorAlert error={error} /> :
                        <div>
                            <MovieCard movie={movie} />
                            {comments.length > 0 && <ListComments comments={comments} />}
                            {isAuth && <NewComment movieId={movie.id} dispatch={dispatch} />}
                        </div>
                )}
            </div>
        </div>

    );

}

export default ViewMovie;
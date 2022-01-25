import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            const data = movies.find(movie => movie.id == slug);
            console.log(data, slug);
            setMovie(data);
            setLoading(false);
        };
        fetchMovie();
    }, [slug]);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <div className="mx-40 my-5">
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <div class="card mt-5 ml-10 ">
                                <div class="rounded overflow-hidden shadow-2xl bg-gray-100">
                                    <img class="w-full" src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg" alt="Mountain" />
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2">
                                            {movie.title}
                                            <span class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-blue-600 transition delay-50 duration-300 ease-in-out mx-2">{movie.year}</span>

                                        </div>
                                        <p class="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                        <span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-red-600 transition delay-50 duration-300 ease-in-out">#{movie.genre}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );

}

export default ViewMovie;
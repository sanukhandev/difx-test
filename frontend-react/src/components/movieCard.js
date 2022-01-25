const MovieCard = (props) => {
    const { movie } = props;
    return (  
                <div className="card mt-5 ml-10 ">
                    <div className="rounded overflow-hidden shadow-lg bg-gray-100">
                        <img className="w-full" src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg" alt="Mountain" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                {movie.title}
                                <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-blue-600 transition delay-50 duration-300 ease-in-out mx-2">{movie.year}</span>

                            </div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-red-600 transition delay-50 duration-300 ease-in-out">#{movie.genre}</span>
                        </div>
                    </div>
                </div>
     )
}

export default MovieCard;
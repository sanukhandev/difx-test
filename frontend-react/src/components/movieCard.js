const MovieCard = ({ movie }) => {
    return (
        <div className="py-3 sm:max-w-xl sm:mx-auto mb-3">
            <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
                <div className="h-48 overflow-visible w-1/2">
                    <img className="rounded-3xl shadow-lg" src={movie.poster} alt="" />
                </div>
                <div className="flex flex-col w-1/2 space-y-4">
                    <div className="flex justify-between items-start">
                        <h2 className="text-3xl font-bold">{movie.movieName}</h2>
                        
                        <div className="bg-blue-300 font-bold rounded-xl p-2">{movie.rating}</div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-400">{movie.genre}</div>
                        <div className="text-lg text-gray-800">{movie.year}</div>
                    </div>
                    <p className=" text-gray-400 max-h-40 overflow-y-hidden">{movie.movieDescription}</p>
                    <div className="flex text-2xl font-bold text-a">${movie.ticketPrice}</div>
                </div>

            </div>
        </div>
    )
}

export default MovieCard;
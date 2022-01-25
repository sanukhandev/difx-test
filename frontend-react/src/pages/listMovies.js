import { Link } from "react-router-dom";

const ListMovies = ({ movies, onDeleteMovie }) => {

    movies = [
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
    return (
        <div>
            <div className="mx-40 my-5">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="flex flex-wrap">
                        <h1 className="text-2xl font-bold text-gray-800 mx-5 my-5">List Movies</h1>
                        <Link to="/addMovie">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">
                                Add Movie
                            </button>
                        </Link>
                    </div>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full">
                                            <thead class="bg-white border-b">
                                                <tr>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        #
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        Title
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        Year
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        Genre
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        View
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {movies.map((movie, index) => (
                                                    <tr class="bg-white" key={movie.id}>
                                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                                                            {index + 1}
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                            {movie.title}
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                            {movie.year}
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                            {movie.genre}
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                            <Link to={`/slug/${movie.id}`} className="h-10 my">
                                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                                                                    View
                                                                </button>
                                                            </Link>
                                                           
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ListMovies;
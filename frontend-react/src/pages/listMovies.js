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
            <div className="flex justify-center">
                <div className="w-full max-w-md">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold">List of movies</h1>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <Link to="/addMovie">Add new movie</Link>
                            </button>
                        </div>
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Title</th>
                                    <th className="px-4 py-2">Genre</th>
                                    <th className="px-4 py-2">Year</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map(movie => (
                                    <tr key={movie.id}>
                                        <td className="border px-4 py-2">{movie.title}</td>
                                        <td className="border px-4 py-2">{movie.genre}</td>
                                        <td className="border px-4 py-2">{movie.year}</td>
                                        <td className="border px-4 py-2">
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => onDeleteMovie(movie.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListMovies;
import { Link } from "react-router-dom";
import Table from "../components/table";

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

    const columns = [
        {
            label: "Title",
            field: "title"
        },
        {
            label: "Year",
            field: "year"
        },
        {
            label: "Genre",
            field: "genre"
        },
        
    ];
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
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <Table data={movies} columns={columns} />
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
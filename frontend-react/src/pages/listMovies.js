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
                        <Link to="/addMovie" className="h-10 my-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Add New Movie
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
                                                        First
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        Last
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        Handle
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Mark
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Otto
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        @mdo
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Jacob
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Thornton
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        @fat
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Larry
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Wild
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        @twitter
                                                    </td>
                                                </tr>
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
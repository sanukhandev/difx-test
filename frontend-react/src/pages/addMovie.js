import { useState } from "react";
import ErrorAlert from "../components/errorAlert";
import SuccessAlert from "../components/successAlert";
import { fetchHookWithTokenAndBody } from "../utils/fetchUtil";

const initialState = {
    name: '',
    description: '',
    date: '',
    rating: '',
    ticketPrice: '',
    genre: '',
    poster: ''
}
const AddMovie = () => {
    const [movieStateObj, setMovieStateObj] = useState(initialState)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const handleInputChange = event => {
        setMovieStateObj({
            ...movieStateObj,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(movieStateObj)
        const newMoviePromise = await fetchHookWithTokenAndBody('films/create-movie', { method: 'POST' }, movieStateObj)
        if (newMoviePromise.status === 'ERROR') {
            setError(newMoviePromise.message)
        } else {
            setMovieStateObj(initialState)
            setError(false)
            setSuccess('Movie added successfully')
            setTimeout(() => {
                window.location.replace('/')
            }, 2000);
        }

    }
    return (
        <div>
            <div className="mx-40 my-5">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <h1 className="text-2xl font-bold text-gray-800 mx-5 my-5">Add Movie</h1>
                    {
                        error && <ErrorAlert error={error} />
                    }
                    {
                        success && <SuccessAlert message={success} />
                    }
                    <form action="#" onSubmit={handleSubmit}>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="col-span-1 sm:col-span-1">
                                        <label htmlFor="movieName" className="block text-sm font-medium text-gray-700">
                                            Movie Title
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">

                                            <input type="text" required value={movieStateObj.name} onChange={handleInputChange} name="name" id="movie_title" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2" placeholder="The God Father" />
                                        </div>
                                    </div>
                                    <div className="col-span-1 sm:col-span-1">
                                        <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-700">
                                            Release Date
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">

                                            <input type="date" required value={movieStateObj.date} onChange={handleInputChange} name="date" id="releaseDate" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2" placeholder="The God Father" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                        Movie Description
                                    </label>
                                    <div className="mt-1">
                                        <textarea required value={movieStateObj.description} onChange={handleInputChange} name="description" id="description" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Gangster story about"></textarea>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Brief description About the movie.
                                    </p>
                                </div>
                                <div className="md:grid md:grid-cols-4 md:gap-6">
                                    <div className="md:col-span-1">
                                        <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Movie Genre</label>
                                        <select required value={movieStateObj.genre} onChange={handleInputChange} name="genre" id="genre" autoComplete="genre" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option>Drama</option>
                                            <option>Thriller</option>
                                            <option>Si-Fi</option>
                                            <option>Comedy</option>
                                            <option>Action</option>
                                            <option>Romance</option>
                                            <option>Horror</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-1">
                                        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Movie Rating</label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input required value={movieStateObj.rating} onChange={handleInputChange} name="rating" type="number" id="rating" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2" placeholder="IMDB Rating" />
                                        </div>
                                    </div>
                                    <div className="md:col-span-1">
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Ticket Price</label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input required value={movieStateObj.ticketPrice} onChange={handleInputChange} name="ticketPrice" type="number" id="price" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2" placeholder="Ticket Price ($)" />
                                        </div>
                                    </div>
                                    <div className="md:col-span-1">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input type="text" required value={movieStateObj.country} onChange={handleInputChange} name="country" id="country" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2" placeholder="Country" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
                                            Poster Link
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">

                                            <input required value={movieStateObj.poster} onChange={handleInputChange} name="poster" type="text" id="movie_poster" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2" placeholder="http://google.com" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default AddMovie;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorAlert from "../components/errorAlert";
import Table from "../components/table";
import { fetchHook } from "../utils/fetchUtil";

const ListMovies = () => {
    const [movies, setMovies] =  useState([])
    const [error, setError] = useState(null)
    const fetchMovies = async () => {
           const moviesPromise = await fetchHook('films', {method:'GET'})
           if(moviesPromise.status === 'ERROR'){
                setError('Error fetching Movies')
                setMovies([])
           }
           else{
               setMovies(moviesPromise.data)
           }

    }
    useEffect(()=> {
       fetchMovies()
    },[])
    const columns = [
        {
            label: "Title",
            field: "movieName"
        },
        {
            label: "Year",
            field: "year"
        },
        {
            label: "Genre",
            field: "genre"
        },
        {
            label:"Ticket",
            field:"ticketPrice"
        },
        {
            label:"Country",
            field:"country"
        }
        
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
                                        {
                                            error ? <ErrorAlert error={error}/>:
                                            <Table data={movies} columns={columns} />
                                        }
                                        
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
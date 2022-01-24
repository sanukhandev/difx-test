const AddMovie = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="w-full max-w-md">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold">Add new movie</h1>
                        </div>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Title
                                </label>
                            </div>
                            <div className="mb-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AddMovie;

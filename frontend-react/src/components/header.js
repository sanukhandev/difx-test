import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-8 w-8"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link to='/'>
                                        <p className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">List Movies </p>
                                    </Link>
                                    <Link to='/addMovie' >
                                        <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Movie</p>
                                    </Link>

                                    <div className="flex">
                                        <Link to='/user' >
                                            <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">User Name</p>
                                        </Link>
                                        <Link to='/login' >
                                            <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</p>
                                        </Link>
                                        <Link to='/signup' >
                                            <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign up</p>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </nav>
        </div>
    )
}

export default Header;
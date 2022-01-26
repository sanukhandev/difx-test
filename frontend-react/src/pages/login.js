import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import ErrorAlert from "../components/errorAlert";
import {fetchHookWithBody } from "../utils/fetchUtil";

const LoginPage = () => {
    const { state,dispatch } = useContext(AuthContext);
    const [isAuth, setIsAuth] = useState (state.isAuthenticated)
    const initialState = {
        email: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
    };
    const [data, setData] = useState(initialState);
    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    useEffect(()=> {
        if(isAuth){
            window.location.replace('/film')
        }
    },[isAuth])
    const handleFormSubmit = async(event) => {
        event.preventDefault();
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        });
        const loginPromise =  await fetchHookWithBody('auth/login', {method: 'POST'}, data);
        if(loginPromise.status=== 'ERROR') {
            setData({
                ...data,
                isSubmitting: false,
                errorMessage: loginPromise.message
            });
        } else {
            setData({
                ...data,
                isSubmitting: false,
                errorMessage: null
            });
            const {user, token} = await loginPromise.data
            dispatch({
                type: "LOGIN",
                payload: {
                    user,
                    token
                }
            });
            setIsAuth(true)
        }
    }
    return (

        <div className="mt-10 flex flex-col items-center justify-center">
            <div className=" flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md" >
                {
                    data.errorMessage && <ErrorAlert message={data.errorMessage} />
                }
                <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
                    Welcome Back
                </div>
                <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
                    Enter your credentials to access your account
                </div>

                <div className="mt-10">
                    <form onSubmit={handleFormSubmit}>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="email" className="mb-1 text-xs tracking-wide text-gray-600">E-Mail Address:</label>
                            <div className="relative">
                                <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <i className="fas fa-at text-blue-500"></i>
                                </div>

                                <input id="email" type="email" name="email" className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter your email" value={data.email} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600" >Password:</label>
                            <div className="relative">
                                <div
                                    className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <span>
                                        <i className="fas fa-lock text-blue-500"></i>
                                    </span>
                                </div>

                                <input id="password" type="password" name="password" className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter your password" value={data.password} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="flex w-full">
                            <button type="submit" disabled={data.isSubmitting} className=" flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in ">
                                <span className="mr-2 uppercase">{data.isSubmitting ? ("Please wait...") : ("Login")}</span>
                                <span>
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex justify-center items-center mt-6">
                <a href="#" target="_blank" className=" inline-flex items-center text-gray-700 font-medium text-xs text-center ">
                    <span className="ml-2">You don't have an account?
                        <a href="#" className="text-xs ml-2 text-blue-500 font-semibold" >Register now</a></span>
                </a>
            </div>
        </div>
    )
}

export default LoginPage
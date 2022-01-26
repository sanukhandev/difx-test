import { createContext, useEffect, useReducer } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/header";
import AddMovie from "./pages/addMovie";
import ListMovies from "./pages/listMovies";
import LoginPage from "./pages/login";
import SignUp from "./pages/signUp";
import ViewMovie from "./pages/viewMovie";

export const AuthContext = createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      const { user, token } = action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    case "SET_STATE":
      return {
        ...state,
        isAuthenticated: true,
        user: JSON.parse(localStorage.getItem("user")),
        token: localStorage.getItem("token")
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(()=> {
    if(localStorage.getItem('token')){
      dispatch({type:"SET_STATE"})
    }
  },[])
  return (
    <AuthContext.Provider value={{
      state,
      dispatch
    }}>
      <Router>
        <Header />
        <Routes>
          {
            !state.isAuthenticated && (
              <Route path="/login" element={<LoginPage />} />
            )
          }
           {
            !state.isAuthenticated && (
              <Route path="/signup" element={<SignUp />} />
            )
          }
          <Route path="/film" element={<ListMovies />} />
          <Route path="/addMovie" element={<AddMovie />} />
          <Route path="/slug/:slug" element={<ViewMovie />} />
          <Route path="/" element={<Navigate replace to="/film" />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>


    </AuthContext.Provider>
  );
}


export default App;

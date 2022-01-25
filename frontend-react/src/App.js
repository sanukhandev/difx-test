import { createContext, useReducer } from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import AddMovie from "./pages/addMovie";
import ListMovies from "./pages/listMovies";
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
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
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
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{
      state,
      dispatch
    }}>
      <Router>
        <Routes>
          <Route path="/film" element={<ListMovies />} />
          <Route path="/addMovie" element={<AddMovie />} />
          <Route path="/slug/:slug" element={<ViewMovie />} />
          <Route path="/" element={<Navigate replace to="/film" />} />

        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}


export default App;

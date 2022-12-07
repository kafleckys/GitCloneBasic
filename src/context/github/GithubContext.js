import { createContext, useReducer } from "react";
import githubReducer from "./GithubReduder";
const GithubContext = createContext();

// const GITHUB_URL = "https://api.github.com";
// const GITHUB_URL =process.env.REACT_APP_GITHUB_URL;

// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user:{},
    repos:[],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  //GET initial users purpose ko lagi function
  // const fetchUsers = async () => {
  //   // const response = await fetch(`https://api.github.com/users`, {

  //   setloading();
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: { Authorization: `token ${GITHUB_TOKEN}` },
  //   });

  //   const data = await response.json();

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  //   // setUsers(data);
  //   // setLoading(false);
  // };
  //////////////////////////////////////////////////////////
  ////////////////////////////////////////////

  // const setloading = () => {
  //   dispatch({ type: "SET_LOADING" });
  // };
  ///////////////////////////////////////////////
  // const clearUsers =()=>{
  //   dispatch({type:'CLEAR_USERS'})
  // }

  return (
    <GithubContext.Provider
      value={{
        // users: state.users,
        // loading: state.loading,
        // user:state.user,
        // repos:state.repos,
        ...state,
        dispatch,
        // searchUsers,
        // clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

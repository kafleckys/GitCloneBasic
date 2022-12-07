import axios from "axios";

const GITHUB_URL = "https://api.github.com";
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });
//   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
//     headers: { Authorization: `token ${GITHUB_TOKEN}` },
//   });

//   const { items } = await response.json();


//   return items;
// axios le automatic json ma lagchha 
const response = await github.get(`/search/users?${params}`)
return response.data.items;
};
/////////////////////////////////////////////////////////////
// export const getUser = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: { Authorization: `token ${GITHUB_TOKEN}` },
//   });

//   if (response.status === 404) {
//     window.location = "/notfound";
//   } else {
//     const data = await response.json();
//     return data;
//     //   dispatch({
//     //     type: "GET_USER",
//     //     payload: data,
//     //   });
//   }
// };

// ///////////////////////////////////////////////////////

// export const getRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: "stars",
//     per_pages: 10,
//   });

//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//     headers: { Authorization: `token ${GITHUB_TOKEN}` },
//   });

//   const data = await response.json();

//   return data;
//   // dispatch({
//   //   type: "GET_REPOS",
//   //   payload: data,
//   // });
// };

////////////////////////////////////////////////////////////////
//GET USER AND REPOS BOTH AT A TIME
export const getUserAndRepos =  async(login)=>{
//dui or more request grnu cha vane
    const [user,repos] =await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
       ])
    return {user:user.data, repos:repos.data}
}
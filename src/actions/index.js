import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=DonkeyLobstersAndFishTacos';

// This action creater needs to reach out to make API request via AXIOS (involves network request), and returns a REDUX PROMISE
// Need to import axios to make the request
// Need to import redux-promise to handle the asynchronous nature of the request

// make axios request, assign to variable request, assign request to payload - redux-promise middleware will handle request for us
export function fetchPosts() {
    // use backticks to allow const(s) variable usage.
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

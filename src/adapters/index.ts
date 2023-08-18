import axios from 'axios';
import {store} from "../store";
import {setLoading} from "../store/app.slice";

export const httpInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 0,
    headers: {
        'X-GitHub-Api-Version': '2022-11-28',
    },
});


// Add a request interceptor
httpInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    store.dispatch(setLoading(true))
    return config;
}, function (error) {
    // Do something with request error
    store.dispatch(setLoading(false))
    return Promise.reject(error);
});

// Add a response interceptor
httpInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(setLoading(false))
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    store.dispatch(setLoading(false))
    return Promise.reject(error);
});

import axios from 'axios';

const instance = axios.create({
    // .. where we make our configurations
        baseURL: 'https://limitless-wildwood-54984.herokuapp.com/'
    });
// instance.interceptors.request...

export default instance;
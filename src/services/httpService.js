
import Axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : 'http://localhost:3000/'

const SPACEX_BASE_URL = 'https://api.spacexdata.com/v4';

var axios = Axios.create();

export const httpService = {
    get(endpoint, data, external = false) {
        const baseUrl = external ? SPACEX_BASE_URL : BASE_URL;
        const url = `${baseUrl}${endpoint}`;
        return ajax(url, 'GET', data);
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(url, method = 'GET', data = null) {
    try {
        const res = await axios({
            url: url,
            method,
            data,
            params: (method === 'GET') ? data : null
        });
        return res.data;
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, url: ${url}, with data: ${data}`);
        console.dir(err);
        if (err.response && err.response.status === 401) {
        }
        throw err;
    }
}

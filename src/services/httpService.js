
import Axios from 'axios'

// Note: BASE_URL is no longer needed unless you are using it for other endpoints

var axios = Axios.create();

export const httpService = {
    get(endpoint, data, external = false) {
        const url = external ? endpoint : `${BASE_URL}${endpoint}`;
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

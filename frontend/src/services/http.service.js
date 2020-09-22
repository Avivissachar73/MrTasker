import axios from 'axios';

export const httpService = {
    get,
    post,
    put,
    delete: remove
}

function createAPI(endPoint) {
    return `http://localhost:3030/api/${endPoint}`;
}

function _handleError(err) {
}

function get(endPoint) {
    return axios.get(createAPI(endPoint)).then(res => res.data).catch(_handleError);
}
function post(endPoint, data) {
    console.log('posting to to', createAPI(endPoint));
    return axios.post(createAPI(endPoint), data).then(res => res.data).catch(_handleError);
}
function put(endPoint, data) {
    return axios.put(createAPI(endPoint), data).then(res => res.data).catch(_handleError);
}
function remove(endPoint, data) {
    return axios.delete(createAPI(endPoint), data).then(res => res.data).catch(_handleError);
}
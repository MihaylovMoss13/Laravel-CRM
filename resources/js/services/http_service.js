import axios from 'axios';
import store from '../store';

export function http() {
    return axios.create({
        baseURL: store.state.apiUrl
    });
}

export function httpFile() {
    return axios.create({
        baseURL: store.state.apiUrl,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
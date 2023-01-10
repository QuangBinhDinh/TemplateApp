import axios from 'axios';
import { API_URL, DOMAIN_URL, API_TEST, DOMAIN_TEST } from '@env';

var cancelTokenSource = axios.CancelToken.source();

const api = axios.create({
    baseURL: API_URL,
    timeout: 30000,
});

const abortApiRequest = () => {
    cancelTokenSource.cancel('Cancel request');
};

const setToken = token => {
    api.defaults.headers.common['token'] = token;
};

const domain = axios.create({
    baseURL: DOMAIN_URL,
    timeout: 30000,
});

const setDomainContentType = value => {
    domain.defaults.headers.post['Content-Type'] = value;
};

//handle truoc request
api.interceptors.request.use(async config => {
    config.cancelToken = cancelTokenSource.token; //it will update cancelToken on every call
    return config;
});

//handle sau request
api.interceptors.response.use(
    async response => {
        //console.log(response)
        return response;
    },
    async error => {
        return Promise.reject(error);
    },
);

//handle sau request
domain.interceptors.response.use(
    async response => {
        // console.log(response);
        return response;
    },
    async error => {
        console.log(error);
        return Promise.reject(error);
    },
);

const _get = async path => {
    const response = await api.get(path);
    return response.data;
};

const _post = async (path, body) => {
    const response = await api.post(path, body);
    return response.data;
};
const _put = async (path, body) => {
    const response = await api.put(path, body);
    return response.data;
};
const _custom = async (url, body, method) => {
    const response = await api.request({
        url,
        method,
        data: body,
    });
    return response.data;
};

const _domainGet = async path => {
    const response = await domain.get(path);
    return response.data;
};

const _domainPost = async (path, body) => {
    const response = await domain.post(path, body);
    return response.data;
};
const _domainDelete = async path => {
    const response = await domain.delete(path);
    return response.data;
};
const _domainCustom = async (url, body, method) => {
    const response = await domain.request({
        url,
        method,
        data: body,
    });
    return response.data;
};
export {
    _get,
    _post,
    _domainGet,
    _domainPost,
    abortApiRequest,
    _custom,
    setToken,
    _put,
    setDomainContentType,
    _domainDelete,
    _domainCustom,
};
//note: khong bao gio export cac ham tu 1 file index.js !!!

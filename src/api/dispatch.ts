import { beginCallApi, apiCallFail, apiCallSuccess } from '../store/Api/ApiAction';
import { _get, _post, _put, _domainGet, _domainPost, _domainDelete, _custom, _domainCustom } from './axios';
import { Callback, CustomCall } from '@components/type';

const func = () => {};
//thunk function

/**
 * Hàm chung cho các api get
 * @param  dispatch
 * @param  key Tên api dược gọi gọi (định danh)
 * @param  _url
 * @param _callback callback function duoc goi khi co data tra ve
 * @param  _handleError callback trả về khi có lỗi
 */
const createGet = async (
    dispatch: any,
    key: string,
    _url: string,
    _callback: Callback = func,
    _handleError: Callback = func,
) => {
    let data;
    dispatch(beginCallApi(key, { url: _url, name: key }));
    try {
        data = await _get(_url);
        if (data.status == 'successful') {
            dispatch(apiCallSuccess(key, { data, name: key }));
            _callback(data); //lay ket qua tra ve
        } else {
            _handleError(data);
            dispatch(apiCallFail(key, { name: key, data }));
        }
    } catch (err) {
        // console.log('key : ' + key + ' ' + err);
        dispatch(apiCallFail(key, { name: key }));
        _handleError(err);
    }
};

/**
 * Hàm chung cho các api post
 * @param  dispatch
 * @param  key Tên api dược gọi gọi (định danh)
 * @param  _url
 * @param  _data Body truyền lên (Object)
 * @param  _callback callback function duoc goi khi co data tra ve
 * @param  _handleError callback trả về khi có lỗi
 */
const createPost = async (
    dispatch: any,
    key: string,
    _url: string,
    _data: any,
    _callback: Callback = func,
    _handleError: Callback = func,
) => {
    let payload = {
        url: _url,
        data: _data,
        name: key,
    };
    dispatch(beginCallApi(key, payload));
    try {
        const response = await _post(_url, _data);
        if (response.status == 'successful') {
            dispatch(apiCallSuccess(key, { data: response, name: key }));
            _callback(response); //lay ket qua tra ve
        } else {
            _handleError(response);
            dispatch(apiCallFail(key, { name: key, data: response }));
        }
    } catch (err) {
        dispatch(apiCallFail(key, { name: key, data: err }));
        _handleError(err);
    }
};

/**
 * Hàm chung cho các api put
 * @param  dispatch
 * @param  key Tên api dược gọi gọi (định danh)
 * @param  _url
 * @param  _data Body truyền lên (Object)
 * @param  _callback callback function duoc goi khi co data tra ve
 * @param  _handleError callback trả về khi có lỗi
 */
const createPut = async (
    dispatch: any,
    key: string,
    _url: string,
    _data: any,
    _callback: Callback = func,
    _handleError: Callback = func,
) => {
    let payload = {
        url: _url,
        data: _data,
        name: key,
    };
    dispatch(beginCallApi(key, payload));
    try {
        const response = await _put(_url, _data);
        if (response.status == 'successful') {
            dispatch(apiCallSuccess(key, { data: response, name: key }));
            _callback(response); //lay ket qua tra ve
        } else {
            _handleError(response);
            dispatch(apiCallFail(key, { name: key, data: response }));
        }
    } catch (err: any) {
        dispatch(apiCallFail(key, { name: key, data: err }));
        _handleError(err);
    }
};

/**
 * Hàm chung cho các api get (domain api)
 * @param {*} dispatch
 * @param {string} key Tên api dược gọi gọi (định danh)
 * @param {string} _url
 * @param {function} _callback callback function duoc goi khi co data tra ve
 * @param {function} _handleError callback trả về khi có lỗi
 */
const createDomainGet = async (
    dispatch: any,
    key: string,
    _url: string,
    _callback: Callback = func,
    _handleError: Callback = func,
) => {
    let data;
    dispatch(beginCallApi(key, { url: _url, name: key }));
    try {
        data = await _domainGet(_url);
        if (data.status == 'successful') {
            dispatch(apiCallSuccess(key, { data, name: key }));
            _callback(data); //lay ket qua tra ve
        } else {
            _handleError(data);
            dispatch(apiCallFail(key, { name: key, data }));
        }
    } catch (err: any) {
        var errInfo = err.response?.data ?? null;
        dispatch(apiCallFail(key, { name: key, data: err }));
        _handleError(errInfo);
    }
};

/**
 * Hàm chung cho các api post(domain api)
 * @param  dispatch
 * @param  key Tên api dược gọi gọi (định danh)xw
 * @param  _url
 * @param  _data Body truyền lên (Object)
 * @param  _callback callback function duoc goi khi co data tra ve
 * @param  _handleError callback trả về khi có lỗi
 */
const createDomainPost = async (
    dispatch: any,
    key: string,
    _url: string,
    _data: any,
    _callback: Callback = func,
    _handleError: Callback = func,
) => {
    let payload = {
        url: _url,
        data: _data,
        name: key,
    };
    dispatch(beginCallApi(key, payload));
    try {
        const response = await _domainPost(_url, _data);
        if (response.status == 'successful') {
            dispatch(apiCallSuccess(key, { data: response, name: key }));
            _callback(response); //lay ket qua tra ve
        } else {
            _handleError(response);
            dispatch(apiCallFail(key, { name: key, data: response }));
        }
    } catch (err: any) {
        var errInfo = err.response?.data ?? null;
        dispatch(apiCallFail(key, { name: key, data: err }));
        _handleError(errInfo);
    }
};

/**
 * Hàm chung cho các api get (domain api)
 * @param  dispatch
 * @param  key Tên api dược gọi gọi (định danh)
 * @param  _url
 * @param  _callback callback function duoc goi khi co data tra ve
 * @param  _handleError callback trả về khi có lỗi
 */
const createDomainDelete = async (
    dispatch: any,
    key: string,
    _url: string,
    _callback: Callback = func,
    _handleError: Callback = func,
) => {
    let data;
    dispatch(beginCallApi(key, { url: _url, name: key }));
    try {
        data = await _domainDelete(_url);
        if (data.status == 'successful') {
            dispatch(apiCallSuccess(key, { data, name: key }));
            _callback(data); //lay ket qua tra ve
        } else {
            _handleError(data);
            dispatch(apiCallFail(key, { name: key, data }));
        }
    } catch (err: any) {
        var errInfo = err.response?.data ?? null;
        dispatch(apiCallFail(key, { name: key, data: err }));
        _handleError(errInfo);
    }
};

const createSyncCall = async (
    dispatch: any,
    key: string,
    configs: { url: string; body: any; method: string }[],
    callback: Callback[],
    handleError?: Callback[],
) => {
    var urlList = configs.map(i => i.url).join(';');
    dispatch(beginCallApi(key, { url: urlList, name: key }));
    try {
        var promiseArr = configs.map(item => _custom(item.url, item.body, item.method));
        const resArr = await Promise.all(promiseArr);
        let resData: any[] = [];
        resArr.forEach((res, index) => {
            if (res.status == 'successful') {
                resData.push(res);
                callback[index](res);
            } else {
                resData.push(res);
                if (handleError && handleError[index]) handleError[index](res);
            }
        });
        dispatch(apiCallSuccess(key, { data: resData, name: key }));
    } catch (e) {
        dispatch(apiCallFail(key, { name: key, data: e }));
    }
};

/**
 * Call theo sequence
 * @param dispatch
 * @param key
 * @param configs Mảng url cần call theo sequence
 * @param callback
 * @param handleError
 */
const createSequenceCall = async (
    dispatch: any,
    key: string,
    configs: CustomCall[],
    callback: Callback = func,
    handleError: Callback = func,
) => {
    var urlList = configs.map(i => i.url).join(';');
    var body = configs.map(i => i.body ?? {});
    dispatch(beginCallApi(key, { url: urlList, name: key, data: body }));
    let response;
    try {
        for (const config of configs) {
            response = await _custom(config.url, config.body, config.method);
            if (response?.status !== 'successful') {
                dispatch(apiCallFail(key, { name: key, data: response }));
                handleError(response);
                break;
            }
        }
    } catch (e) {
        dispatch(apiCallFail(key, { name: key, data: e }));
        handleError(response);
    } finally {
        if (response.status == 'successful') {
            callback(response);
            dispatch(apiCallSuccess(key, { data: response, name: key }));
        }
    }
};

/**
 * Call theo sequence
 * @param dispatch
 * @param key
 * @param configs Mảng url cần call theo sequence
 * @param callback
 * @param handleError
 */
const createDomainSequenceCall = async (
    dispatch: any,
    key: string,
    configs: CustomCall[],
    callback: Callback = func,
    handleError: Callback = func,
) => {
    var urlList = configs.map(i => i.url).join(';');
    dispatch(beginCallApi(key, { url: urlList, name: key }));
    let response;
    try {
        for (const config of configs) {
            response = await _domainCustom(config.url, config.body, config.method);
            if (response?.status !== 'successful') {
                dispatch(apiCallFail(key, { name: key, data: response, url: config.url }));
                handleError(response);
                break;
            }
        }
    } catch (e) {
        dispatch(apiCallFail(key, { name: key, data: e }));
        handleError(response);
    } finally {
        if (response?.status == 'successful') {
            callback(response);
            dispatch(apiCallSuccess(key, { data: response, name: key }));
        }
    }
};

export {
    createGet,
    createPost,
    createPut,
    createDomainDelete,
    createDomainGet,
    createDomainPost,
    createSequenceCall,
    createDomainSequenceCall,
};

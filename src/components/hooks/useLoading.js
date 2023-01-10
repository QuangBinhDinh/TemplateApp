import {useEffect} from 'react';
import {useSelector} from 'react-redux';

/**
 * Hook kiểm tra xem có show màn loading không
 * @returns
 */
export const useLoading = () => {
    const apiCalling = useSelector(state => state.ApiReducer.apiCalling);
    // const [showLoading, setShow] = useState(false);

    if (apiCalling > 0) return true;
    else return false;
};

/**
 * Kiểm tra xem api truyền vào có đang được call không
 * @param {string[]} apiName
 * @returns
 */
export const useWhichApiLoading = apiName => {
    const {apiCallingName} = useSelector(state => state.ApiReducer);

    if (apiCallingName.some(item => apiName.includes(item))) return true;
    else return false;
};

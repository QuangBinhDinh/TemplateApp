import { TYPES } from './ApiAction';

const initialState = {
    apiCalling: 0,
    apiCallingName: [],
    url: null,
    data: null,
    body: null,
};

export default (state = initialState, action) => {
    const matchesStart = /(BEGIN)_(.*)/.exec(action.type);
    const matchesSuccess = /(.*)_(SUCCESS)/.exec(action.type);
    const matchesError = /(.*)_(FAIL)/.exec(action.type);
    if (matchesStart) {
        return {
            ...state,
            apiCalling: state.apiCalling + 1,
            url: action.payload?.url,
            body: action.payload?.body,
            apiCallingName: state.apiCallingName.concat(action.payload?.name),
        };
    } else if (matchesSuccess) {
        return {
            ...state,
            apiCalling: state.apiCalling - 1,
            url: null,
            data: action.payload?.data,
            body: null,
            apiCallingName: state.apiCallingName.filter(item => item != action.payload?.name),
        };
    } else if (matchesError) {
        return {
            ...state,
            apiCalling: state.apiCalling - 1,
            url: null,
            body: null,
            data: action.payload?.data,
            apiCallingName: state.apiCallingName.filter(item => item != action.payload?.name),
        };
    } else return state;
};

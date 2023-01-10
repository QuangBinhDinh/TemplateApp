import { createSlice } from '@reduxjs/toolkit';
import { initialFilter } from './component';
import _ from 'lodash';

const initialState = {
    currentScreen: '',
    taskDone: [],
    productId: null,
};

/**
 * Kết hợp action với reducer làm một reducer
 */
const navigationReducer = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        //define cac action
        setTaskReady: (state, action) => {
            state.taskDone = state.taskDone.concat(action.payload);
        },
        reset: () => initialState,
    },
});

export default navigationReducer;

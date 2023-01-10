import { combineReducers } from '@reduxjs/toolkit';
import ApiReducer from './Api/ApiReducer';
import ThemeReducer from './Theme/ThemeReducer';
import navigationReducer from '@navigation/reducer';

export const rootReducer = combineReducers({
    ApiReducer,
    ThemeReducer,

    NavigationReducer: navigationReducer.reducer,
});

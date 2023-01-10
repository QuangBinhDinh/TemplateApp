import { logger } from './middleware';
import { rootReducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
const Store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger],
});

export default Store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;

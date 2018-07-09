import { handleActions } from 'redux-actions';

import { loadStarted, loadCompleted, loadFailed } from 'actions/comments';

const initialState = {
    loading: false,
    error: null,
    message: [],
    page: 1
};

export default handleActions({
    [loadStarted]: (state) => {
        return {
            ...state,
            error: null,
            loading: true,
        };
    },
    [loadCompleted]: (state, action) => {
        return {
            ...state,
            message: state.message.concat(action.payload),
            loading: false,
            page: state.page + 1,
        };
    },
    [loadFailed]: (state, action) => {
        return {
            ...state,
            error: action.payload,
            loading: false,
        };
    },
    }, initialState)
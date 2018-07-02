import { handleActions } from 'redux-actions';

import { loadStarted, loadCompleted, loadFailed } from 'actions/posts';

const initialState = {
    loading: false,
    error: null,
    article: [],
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
            article: state.article.concat(action.payload),
            loading: false,
            page: state.page + 1,
        };
    },
    [loadFailed]: (state, action) => {
        return {
            ...state,
            error: action.payload,
            loading:false,
        };
    },
    }, initialState)
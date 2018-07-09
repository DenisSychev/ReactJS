import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Comments] Load start');
export const loadCompleted = createAction('[Comments] Load complete');
export const loadFailed = createAction('[Comments] Load fail');

export const loadComments = (dispatch, pageNumber) =>{
    dispatch(loadStarted());
    fetch(`http://jsonplaceholder.typicode.com/comments?_limit=2&_page=${pageNumber}`)
    .then((response) => response.json())
    .then((comments) => {
        dispatch(loadCompleted(comments));
    })
    .catch((error) => {
        dispatch(loadFaled(error));
    })
}
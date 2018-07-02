import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Posts] Load start');
export const loadCompleted = createAction('[Posts] Load complete');
export const loadFailed = createAction('[Posts] Load fail');

export const loadPosts = (dispatch, pageNumber) =>{
    dispatch(loadStarted());
    fetch(`http://jsonplaceholder.typicode.com/posts?_limit=5&_page=${pageNumber}`)
    .then((response) => response.json())
    .then((posts) => {
        dispatch(loadCompleted(posts));
    })
    .catch((error) => {
        dispatch(loadFaled(error));
    })
}
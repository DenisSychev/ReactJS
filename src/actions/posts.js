import {createAction} from 'redux-actions';

//действия
export const loadStarted = createAction('[Posts] Load start');
export const loadCompleted = createAction('[Posts] Load complete');
export const loadFailed = createAction('[Posts] Load fail');

//отправляет данные на сервер (побочный эффект)
export const loadPosts = (dispatch, pageNumber) => {
    dispatch(loadStarted());
    fetch(`http://localhost:8000/api/posts`, {mode:'cors'})
    .then((response) => response.json())
    .then((posts) => {
        dispatch(loadCompleted(posts));
    })
    .catch((error) => {
        dispatch(loadFaled(error));
    })
};
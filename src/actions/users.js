import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Users] Load start');
export const loadCompleted = createAction('[Users] Load complete');
export const loadFaled = createAction('[Users] Load fail');

export const loadUsers = (dispatch) =>{
    dispatch(loadStarted());
    fetch(`http://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((users) => {
        dispatch(loadCompleted(users));
    })
    .catch((error) => {
        dispatch(loadFaled(error));
    })
}
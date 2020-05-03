import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const CREATE_USER_START = 'CREATE_USER_START';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'

export const DELETE_USER_START = 'CREATE_USER_START';
export const DELETE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const DELETE_USER_FAILURE = 'CREATE_USER_FAILURE'




export const addStudent = (add) => dispatch => {
    dispatch({type:CREATE_USER_START })
    axiosWithAuth()
    .post(`https://better-professor-back-end.herokuapp.com/students/`, add )
    .then( response => {
        console.log('response from POST', response);
        dispatch({type: CREATE_USER_SUCCESS, payload: response.data })
    })
    .catch(error => dispatch({type: CREATE_USER_FAILURE, payload: error}))
     
}

export const deleteStudent = id => dispatch => {
    dispatch({type: DELETE_USER_START})
    axiosWithAuth()
    .delete(`https://better-professor-back-end.herokuapp.com/students/${id}`)
    .then( response => {
        console.log('response from DELETE', response);
        dispatch({type: DELETE_USER_SUCCESS, payload: response.data})
    })
    .catch(error => dispatch({type: DELETE_USER_FAILURE, payload: error}))
}

export const getStudent = id => dispatch => {
    dispatch({type: FETCH_USER_START })
    axiosWithAuth()
    .get(`https://better-professor-back-end.herokuapp.com/students/user/${id}`)
    .then( response => {
        console.log('response from fetch user', response);
        dispatch({type: FETCH_USER_SUCCESS, payload: response.data})
    })
    .catch(error => dispatch({type: FETCH_USER_FAILURE, payload: error}))
}



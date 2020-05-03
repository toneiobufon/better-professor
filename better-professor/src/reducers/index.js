import { CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_FAILURE, DELETE_USER_START, DELETE_USER_SUCCESS, DELETE_USER_FAILURE, FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "../actions/";

const initialState = {
    students: [],
    assignments: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    console.log('reducer goes BAM', action );
    switch(action.type){
        case CREATE_USER_START:
            return {
                ...state,
                isFetching: true,
                error: null 
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                students: [...state, action.payload],
                error: null
            }
        case CREATE_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                students: []
            }
        case DELETE_USER_START:
            return {
                    ...state,
                    isFetching: true,
                    error: null 
                }
            case DELETE_USER_SUCCESS:
                return {
                    ...state,
                    students: action.payload,
                    error: null
                }
            case DELETE_USER_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    students: []
                }
             case FETCH_USER_START:
                    return {
                            ...state,
                            isFetching: true,
                            error: null 
                        }
            case FETCH_USER_SUCCESS:
                    return {
                            ...state,
                            students: action.payload,
                            error: null
                        }
                case FETCH_USER_FAILURE:
                    return {
                            ...state,
                            error: action.payload,
                            students: []
                        }    
        default: 
            return state;
    }
}


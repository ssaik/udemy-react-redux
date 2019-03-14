import * as actionTypes from './actions'

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const add = (val) => {
    return {
        type: actionTypes.ADD,
        // val : val --> which is same as "val" next line, because both are having same name.
        val
    };
};

export const delaySubstact = (val) => {
    return {
        type: actionTypes.SUBTRACT,
        val
    }
}

//Using thunk, we can perform Asynchronous jobs, example, making HTTP callouts, or timeout functions, etc.
//Return dispatch function, and put the action in it.
export const subtract = (val) => {
    return dispatch => {
        setTimeout( () => {
            dispatch(delaySubstact(val))
        }, 2000);
    };
};
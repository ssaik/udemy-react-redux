export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const RESULT = 'RESULT';
export const DELETE = 'DELETE';

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const add = (val) => {
    return {
        type: ADD,
        // val : val --> which is same as "val" next line, because both are having same name.
        val
    };
};

export const delaySubstact = (val) => {
    return {
        type: SUBTRACT,
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

export const result = (resultVal) => {
    return {
        type: RESULT,
        resultVal
    };
};


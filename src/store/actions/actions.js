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

export const subtract = (val) => {
    return {
        type: SUBTRACT,
        // val : val --> which is same as "val" next line, because both are having same name.
        val
    };
};

export const result = () => {
    return {
        type: RESULT
    };
};


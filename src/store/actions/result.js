import * as actionTypes from './actions'

export const result = (resultVal) => {
    return {
        type: actionTypes.RESULT,
        resultVal
    };
};
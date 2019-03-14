const initialState = {
    score: []
}


const result = (state = initialState, action) => {
    switch(action.type)
    {
        case 'RESULT':
            return {
                ...state,
                score : state.score.concat({id: new Date(), val: action.resultVal})
            }
        default:
            return state;
    }
}

export default result;
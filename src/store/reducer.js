const initialState = {
    counter : 7,
    score: []
}


const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case 'INCREMENT':
            return {
                ...state,
                counter : state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter : state.counter - 1
            }
        
        case 'ADD':
            return {
                ...state,
                counter : state.counter + action.val
            }
        
        case 'SUBTRACT':
            return {
                ...state,
                counter : state.counter - action.val
            }

        case 'RESULT':
            return {
                ...state,
                score : state.score.concat({id: new Date(), val: state.counter})
            }
        default:
            return state;
    }
}

export default reducer;
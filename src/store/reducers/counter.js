import { objectmanager } from './utility'

const initialState = {
    counter : 7
}


const counter = (state = initialState, action) => {
    switch(action.type)
    {
        case 'INCREMENT':
            return objectmanager(state, {counter : state.counter + 1})
                
        case 'DECREMENT':
            return objectmanager(state, {counter : state.counter - 1})
        
        case 'ADD':
            return objectmanager(state, {counter : state.counter + action.val})

        case 'SUBTRACT':
            return objectmanager(state, {counter : state.counter - action.val})

        default:
            return state;
    }
}

export default counter;
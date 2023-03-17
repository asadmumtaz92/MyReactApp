import * as types from '../actionTypes/index'

const initialState = {
    counter: 0,
}

const calculatorReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.INCREEMENT: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case types.DECREEMENT: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        default: {
            return state;
        }
    }
}

export default calculatorReducer

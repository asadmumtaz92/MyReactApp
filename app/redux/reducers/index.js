import { combineReducers } from 'redux'

import calculatorReducer from './calculator'
import foodRecipeReducer from './foodRecipe'
import dataDrivenReducer from './dataDriven'

const rootReducer = combineReducers({
    calculatorReducer: calculatorReducer,
    foodRecipeReducer: foodRecipeReducer,
    dataDrivenReducer: dataDrivenReducer,
})

export default rootReducer;


// import { createSlice } from '@reduxjs/toolkit'

// const favoriteSllice = createSlice({
//     name: 'favorite',
//     // use for initialise states
//     initialState: {
//         ids: []
//     },
//     // reducer use for shange our state
//     reducers: { 
//         addFavorite: (state, action) => {
//             state.ids.push(action.payload.id)
//         },

//         removeFavorite: (state, action) => {
//             state.ids.splice(state.ids.indexOf(action.payload.id), 1)
//         }
//     }
// })

// export const addFavorite = favoriteSllice.actions.addFavorite
// export const removeFavorite = favoriteSllice.actions.removeFavorite
// export default favoriteSllice.reducer








// import * as types from '../actionTypes/index'

// const initialState = {
//     counter: 0
// }

// export const calc = (state = initialState, action) => {

//     switch (action.type) {

//         case types.INCREEMENT: {
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
//         }
//         case types.DECREEMENT: {
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         }
//         default: {
//             return state
//         }
//     }
// }

import * as types from '../actionTypes/index'
import {
    CATEGORIES,
    MEALS,
} from '../../KitchenRecipe/constantData/dummy_data'

const initialState = {
    login: false,
    mealCategory: CATEGORIES, // done
    meals: MEALS, // done
    favoriteMeals: [], // done
    selected_category: {}, // done
    selected_meal: {}, // done
}

const foodRecipeReducer = (state = initialState, action) => {

    switch (action.type) {

        // case types.GET_MEAL_CATEGORY: {
        //     return {
        //         ...state,
        //         mealCategory: action.mealCategory
        //     }
        // }
        // case types.GET_MEALS: {
        //     return {
        //         ...state,
        //         meal: action.meal
        //     }
        // }
        case types.ADD_FAVORITE_MEAL: { // done
            return {
                ...state,
                favoriteMeals: action.favoriteMeals
            }
        }
        case types.SET_SELECTED_CATEGORY: { // done
            return {
                ...state,
                selected_category: action.selected_category
            }
        }
        case types.SET_SELECTED_MEAL: { // done
            return {
                ...state,
                selected_meal: action.selected_meal
            }
        }
        default: {
            return state;
        }
    }
}

export default foodRecipeReducer

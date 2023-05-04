import * as types from '../actionTypes/index'

export const setSelectedCategory = (data) => { // done
    return{
        type: types.SET_SELECTED_CATEGORY,
        selected_category: data,
    }
}

export const setSelectedMeal = (data) => { // done
    return {
        type: types.SET_SELECTED_MEAL,
        selected_meal: data,
    }
}

export const addFavoriteMeal = (data) => { // done
    return {
        type: types.ADD_FAVORITE_MEAL,
        favoriteMeals: data,
    }
}

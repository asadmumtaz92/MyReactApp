import * as types from '../actionTypes/index'

export const setPeopleDetail = (data) => {
    return {
        type: types.SELECTED_PEOPLES,
        selectedPeople: data
    }
}

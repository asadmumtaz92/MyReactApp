import * as types from '../actionTypes/index'
import { Peoples } from '../../CRM/constantData/peoples'

const initialState = {
    peopleList: Peoples,
    selectedPeople: {},
}

const peopleReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SELECTED_PEOPLES: {
            return {
                ...state,
                selectedPeople: action.selectedPeople
            }
        }
        default: {
            return state;
        }
    }
}

export default peopleReducer

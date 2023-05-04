import * as types from '../actionTypes/index'
import { Companies } from '../../constantData/companies'

const initialState = {
    companiesList: Companies,
    selectedCompany: {},
}

const companiesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.COMPANIES: {
            return {
                ...state,
            }
        }
        case types.SELECTED_COMPANIES: {
            return {
                ...state,
                selectedCompany: action.selectedCompany
            }
        }
        default: {
            return state
        }
    }
}

export default companiesReducer

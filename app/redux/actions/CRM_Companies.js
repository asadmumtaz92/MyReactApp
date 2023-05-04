import * as types from '../actionTypes/index'

// export const addition = () => {
//     return {
//         type: types.COMPANIES
//     }
// }

export const setCompanyDetail = (data) => {
    return {
        type: types.SELECTED_COMPANIES,
        selectedCompany: data
    }
}

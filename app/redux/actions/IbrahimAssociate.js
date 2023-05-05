import * as types from '../actionTypes/index'

// export const setALLPost = (data) => {
//     return {
        // type: types.IB_ALL_POST,
//         allPost: data
//     }
// }

export const setSelectedPost = (data) => {
    return {
        type: types.IB_SELECTED_POST,
        selectedPost: data
    }
}

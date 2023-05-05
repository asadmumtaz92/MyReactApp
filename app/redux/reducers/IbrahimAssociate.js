import * as types from '../actionTypes/index'
import { PostData } from '../../IbrahimAssociate/constantData/Posts'

const initialState = {
    allPost: PostData,
    selectedPost: {},
}

const IB_ASSO_Reducer = (state = initialState, action) => {

    switch (action.type) {
        // case types.IB_ALL_POST: {
        //     return {
        //         ...state,
        //         allPost: action.allPost
        //     }
        // }
        case types.IB_SELECTED_POST: {
            return {
                ...state,
                selectedPost: action.selectedPost
            }
        }
        default: {
            return state;
        }
    }
}

export default IB_ASSO_Reducer

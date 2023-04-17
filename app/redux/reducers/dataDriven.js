import * as types from '../actionTypes/index'

const initialState = {
    counter: 0,
    allDeals: [],
    selectedDeal: {},
}

const dataDrivenReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SELECTED_DEAL: {
            return {
                ...state,
                selectedDeal: action.selectedDeal
            }
        }
        // case types.GET_ALL_DEALS: { // done
        //     console.log('runnnn', action.allDeals)
        //     return {
        //         ...state,
        //         allDeals: action.allDeals
        //     }
        // }
        // case types.GET_ALL_DEALS: {
        //     // let allDealss
        //     // fetch(BAKESALE_API)
        //     //     .then(response => response.json())
        //     //     .then(response => {
        //     //         console.log("response:", response)
        //     //         if (!response['errors']) {
        //     //             console.log('API successfuly call...');
        //     //             allDealss = response
        //     //         }
        //     //     })
        //     //     .catch(error => {
        //     //         console.log('API fetch data failed:', error);
        //     //     });
        //     return {
        //         ...state,
        //         allDeals: allDealss
        //     }
        // }
        default: {
            return state;
        }
    }
}

export default dataDrivenReducer

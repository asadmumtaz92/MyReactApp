import * as types from '../actionTypes/index'
// import { BAKESALE_API } from '../../enviroments/index'

export const setSelectedDeal = (data) => { // done
    return {
        type: types.SELECTED_DEAL,
        selectedDeal: data,
    }
}


// export const getAllDeals2 = async () => {
//     async (dispatch, store) => {
//         return fetch(BAKESALE_API)
//             .then(response => response.json())
//             .then(response => {
//                 // console.log("response:", response)
//                 if (!response['errors']) {
//                     console.log('API successfuly call...');
//                     allDeals = response
//                     return response
//                 }
//             })
//             .catch(error => {
//                 console.log('API fetch data failed:', error);
//             });
//     }
// }

// export const getAllDeals = () => {
    
//     // let allDeals
//     fetch(BAKESALE_API)
//         .then(response => response.json())
//         .then(response => {
//             console.log("response:", response[0])
//             if (!response['errors']) {
//                 console.log('API successfuly call...');
//                 // allDeals = response
//                 return {
//                     type: types.GET_ALL_DEALS,
//                     allDeals: response,
//                 }
//             }
//         })
//         .catch(error => {
//             console.log('API fetch data failed:', error);
//         });

//     // return {
//     //     type: types.GET_ALL_DEALS,
//     //     allDeals: allDeals,
//     // }
// }

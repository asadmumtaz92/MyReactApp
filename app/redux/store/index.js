import { createStore } from 'redux'
import rootReducer from '../reducers/index'

export const store = createStore(rootReducer)

// import { createStore, applyMiddleware } from 'redux';
// // import thunkMiddleware from 'redux-thunk';

// import rootReducer from '../reducers/index';
// // import { persistStore, persistReducer } from 'redux-persist';
// // import AsyncStorage from '@react-native-async-storage/async-storage'

// // Middleware: Redux Persist Config
// // const persistConfig = {
// //     key: 'root',
// //     storage: AsyncStorage,
// //     whitelist: ['Game', 'Foof', 'StickyApp'],
// //     blacklist: ["AppRoute"]
// // }

// // Middleware: Redux Persist Persisted Reducer
// // const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(
//     // persistedReducer,
//     rootReducer,
//     // applyMiddleware(thunkMiddleware),
// );

// // Middleware: Redux Persist Persister
// // const persistor = persistStore(store, {}, () => console.log('Store/index: Done'));

// //CHanging on local
// const configureStore = () => {
//     return createStore(
//         rootReducer,
//         // applyMiddleware(thunkMiddleware)
//     )
// }

// export {
//     store,
//     // persistor,
//     configureStore
// }

// export const store = createStore(rootReducer)

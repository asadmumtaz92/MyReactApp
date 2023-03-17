import React from 'react'
import {
    StyleSheet,
    StatusBar,
    View,
} from 'react-native'

import MyNav from './app/navigations/MyNavigation'

import { Provider } from 'react-redux'
import { store } from './app/redux/store';

const App = () => {

    return (
        <Provider store={store}>
            <View style={styles.contanier}>
                <StatusBar barStyle='light-content' />
                <MyNav />
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
    },
})

export default App

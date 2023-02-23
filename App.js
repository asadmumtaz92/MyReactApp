import React from 'react'
import {
    StyleSheet,
    StatusBar,
    View,
} from 'react-native'

import MyNav from './app/MyNavigation'

const App = () => {

    return (
        <View style={styles.contanier}>
            <StatusBar barStyle='light-content' />
            <MyNav />
        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
    },
})

export default App

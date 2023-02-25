import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native'

import { Colors } from './styles/color'
import { StatusBar } from 'react-native'

const AppRoute = ({ navigation }) => {

    const changeScreen = (appStatus) => {
        navigation.navigate(appStatus)
    }

    return (
        <View style={styles.contanier}>
            <StatusBar barStyle='light-content' />

            <View style={styles.view}>
                <TouchableOpacity onPress={() => changeScreen('Game')} style={styles.btn} activeOpacity={0.9}>
                    <Text style={styles.btnText}>Game</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => changeScreen('Food')} style={styles.btn} activeOpacity={0.9}>
                    <Text style={styles.btnText}>Food</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => changeScreen('StickyApp')} style={styles.btn} activeOpacity={0.9}>
                    <Text style={styles.btnText}>Sticky Note</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100%',
        width: '100%',
        flex: 1,
    },
    btn: {
        backgroundColor: Colors.buttonColor,
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 5,
        width: '60%',
    },
    btnText: {
        color: Colors.white,
        paddingVertical: 10,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 18,
    },
})

export default AppRoute

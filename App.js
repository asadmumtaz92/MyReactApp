import React, { useState } from 'react'
import {
    TouchableOpacity,
    NativeModules,
    StyleSheet,
    Platform,
    Image,
    Text,
    View,
} from 'react-native'

import { Colors } from './app/styles/color'

import Game from './app/game/index'
import Food from './app/FoodApp/index'

const close = require('./app/assets/close.png')

const { StatusBarManager } = NativeModules;

const App = () => {

    const [choosenApp, setChoosenApp] = useState(null)

    const changeScreen = (appStatus) => {
        console.log(appStatus)
        setChoosenApp(appStatus)
    }

    const screenOptions = () =>{
        return (
            <View style={styles.view}>
                <TouchableOpacity onPress={() => changeScreen('game')} style={styles.btn}>
                    <Text style={styles.btnText}>Game App</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => changeScreen('food')} style={styles.btn}>
                    <Text style={styles.btnText}>Food App</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.contanier}>

            {choosenApp != null
                && <TouchableOpacity style={styles.close} onPress={() => { setChoosenApp(null) }}>
                    <Image source={close} />
                </TouchableOpacity>
            }
            
            {choosenApp == 'game' 
                ? <Game />
                : choosenApp == 'food' 
                    ? <Food />
                    : screenOptions()
            }

        </View>

    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    close: {
        top: Platform.select({
            ios: StatusBarManager.HEIGHT + 5,
            android: 5,
        }),
        position: 'absolute',
        right: 10,
        zIndex: 2,
    },

    view: {
        justifyContent:'center',
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

export default App

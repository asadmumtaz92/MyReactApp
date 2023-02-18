import React from 'react'
import {
    StyleSheet,
    Dimensions,
    Text,
    View,
} from 'react-native'

const width = Dimensions.get('window').width

import { Colors } from '../../styles/color'
import { gStyles } from '../../styles/globalStyle'

const GuessBox = ({ currentGuess }) => {

    return (
        <View style={styles.guessBox}>
            <Text style={[gStyles.title, styles.guessBoxText]}>
                {currentGuess}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    guessBox: {
        width: width < 390 ? '70%' : '80%',
        borderColor: Colors.buttonColor,
        height: width < 390 ? 70 : 90,
        justifyContent: 'center',
        borderStyle: 'dashed',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 14,
        borderWidth: 3,
        marginTop: 20,
    },
    guessBoxText: {
        fontSize: width < 390 ? 24 : 28,
        color: Colors.buttonColor,
        marginHorizontal: 20,
        marginTop: 0,
    },
})

export default GuessBox

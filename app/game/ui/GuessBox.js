import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
        borderColor: Colors.buttonColor,
        justifyContent: 'center',
        borderStyle: 'dashed',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 14,
        borderWidth: 3,
        marginTop: 20,
        width: '80%',
        height: 90,
    },
    guessBoxText: {
        color: Colors.buttonColor,
        marginHorizontal: 20,
        marginTop: 0,
        fontSize: 28,
    },
})

export default GuessBox

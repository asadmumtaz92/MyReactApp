import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { Colors } from '../../styles/color'
import { gStyles } from '../../styles/globalStyle'

const Summary = ({ style, choosenNumber, noOfRounds }) => {

    return (
        <Text style={[styles.text, style]}>
            Your phone needed <Text style={styles.guessNum}>{noOfRounds} </Text>
            rounds to guess the number 
            <Text style={styles.guessNum}> {choosenNumber}</Text>.
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: Colors.black,
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 30,
        fontSize: 20,
        width: '90%',
    },
    guessNum: {
        textDecorationLine: 'underline',
        color: Colors.buttonColor,
        fontStyle: 'italic',
        fontWeight: '800',
        fontSize: 26,
    },
})

export default Summary

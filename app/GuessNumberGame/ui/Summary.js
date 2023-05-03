import React from 'react'
import {
    StyleSheet,
    Dimensions,
    Text,
} from 'react-native'

import { Colors } from '../../styles/color'

const width = Dimensions.get('window').width

const Summary = ({ style, choosenNumber, noOfRounds }) => {

    return (
        <Text style={[styles.text, style]}>
            {`Your phone needed `}<Text style={styles.guessNum}>{noOfRounds}</Text>
            {` rounds to guess the number `}
            <Text style={styles.guessNum}>{choosenNumber}</Text> .
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: width < 390 ? 15 : 30,
        fontSize: width < 390 ? 16 : 20,
        color: Colors.black,
        textAlign: 'center',
        fontWeight: '700',
        width: '90%',
    },
    guessNum: {
        textDecorationLine: 'underline',
        fontSize: width < 390 ? 20 : 26,
        color: Colors.primery,
        fontStyle: 'italic',
        fontWeight: '800',
    },
})

export default Summary

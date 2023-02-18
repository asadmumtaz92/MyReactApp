import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { Colors } from '../../styles/color'
import { gStyles } from '../../styles/globalStyle'

const Instruction = ({text}) => {

    return (
        <Text style={[gStyles.title, styles.instructionText]}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.bgColor,
        fontWeight: '400',
        marginBottom: 15,
        marginTop: -1,
        fontSize: 20,
    },
})

export default Instruction

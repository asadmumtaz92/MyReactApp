import React from 'react'
import {
    StyleSheet,
    Dimensions,
    Text,
} from 'react-native'

const width = Dimensions.get('window').width

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
        fontSize: width < 390 ? 15 : 20,
        color: Colors.bgColor,
        fontWeight: '400',
        marginBottom: 15,
        marginTop: -1,
    },
})

export default Instruction

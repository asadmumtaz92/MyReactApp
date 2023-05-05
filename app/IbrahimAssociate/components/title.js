import React from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

import { Colors } from '../../styles/color'

const Title = ({ title }) => {

    return <Text style={styles.title}>{title}</Text>
}

const styles = StyleSheet.create({
    title: {
        textTransform: 'capitalize',
        color: Colors.black,
        letterSpacing: 1.5,
        fontWeight: '700',
        lineHeight: 24,
        fontSize: 18,
    },
})

export default Title

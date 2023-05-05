import React from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
 
import { Colors } from '../../styles/color'

const PairList = ({ title, value }) => {
    return (
        <View style={styles.bottomView}>
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.text}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomView: {
        borderColor: Colors.gray,
        borderBottomWidth: 0.6,
        paddingHorizontal: 4,
        flexDirection: 'row',
        marginVertical: 8,
        paddingBottom: 5,
    },
    heading: {
        color: Colors.black,
        fontWeight: '700',
        textAlign: 'left',
        fontSize: 18,
        flex: 2,
    },
    text: {
        color: Colors.black,
        fontWeight: '500',
        fontSize: 16,
        flex: 3,
    },
})

export default PairList

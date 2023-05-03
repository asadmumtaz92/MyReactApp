import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Text,
} from 'react-native'

import { Colors } from '../../styles/color'

const width = Dimensions.get('window').width

const MyButton = ({ 
    title,
    onPress,
    btnStyle, 
    textStyle,
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, btnStyle]} activeOpacity={0.8}
            onPress={onPress}
        >
            <Text style={[styles.btnText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.smallButtonColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 20,
        flex: 1,

        elevation: 5,
        shadowColor: Colors.black,
        shadowOpacity: 0.6,
        shadowRadius: 2,
        shadowOffset: {
            width: 0, // for left & right
            height: 0, // for top & bottom
        },
    },
    btnText: {
        paddingVertical: width < 390 ? 7 : 10,
        fontSize: width < 390 ? 14 : 17,
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '600',
    },
})

export default MyButton

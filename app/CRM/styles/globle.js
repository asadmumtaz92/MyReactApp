import {
    StyleSheet,
} from 'react-native'

import { Colors } from './color'

export const gStyles = StyleSheet.create({
    navBtn: {
        backgroundColor: Colors.primery,
        padding: 7,
    },
    navBtnText: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: 14,
    },
    ip: {
        borderBottomColor: Colors.primery,
        backgroundColor: Colors.white,
        color: Colors.inputColor,
        borderBottomWidth: 0.5,
        fontWeight: '500',
        paddingLeft: 10,
        borderWidth: 0,
        fontSize: 16,
        height: 45,
        padding: 0,
    },

    searchIcon: {
        color: Colors.white,
        fontWeight: '300',
        fontSize: 20,
    },
    errorView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    errorText: {
        color: Colors.primery,
        alignSelf: 'center',
        fontWeight: '500',
        fontSize: 24,
    },
})

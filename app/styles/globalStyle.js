import {
    StyleSheet,
    Dimensions,
} from 'react-native';

import { Colors } from './color'

const width = Dimensions.get('window').width

export const gStyles = StyleSheet.create({
    title: {
        fontSize: width < 390 ? 19 : 22,
        color: Colors.primery,
        alignSelf: 'center',
        fontWeight: '700',
        marginTop: 20,
    },
    card: {
        paddingVertical: width < 390 ? 15 : 25,
        marginTop: width < 390 ? '15%' : '25%',
        paddingBottom: width < 390 ? 20 : 30,
        backgroundColor: Colors.primery,
        width: width < 390 ? '80%' : '90%',
        shadowColor: Colors.black,
        paddingHorizontal: 20,
        alignSelf: 'center',
        borderRadius: 8,

        elevation: 10,
        shadowOpacity: 0.6,
        shadowRadius: 5,
        shadowOffset: {
            width: 3, // for left & right
            height: 5, // for top & bottom
        },
    },
    btnBox: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    ip: {
        borderBottomColor: Colors.bgColor,
        lineHeight: width < 390 ? 25 : 30,
        fontSize: width < 390 ? 20 : 25,
        color: Colors.bgColor,
        borderBottomWidth: 1,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: 20,
        height: 40,
        padding: 0,
        width: 45,
    },
    centerAlign: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});

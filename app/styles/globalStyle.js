import { StyleSheet } from 'react-native';
import { Colors } from './color';

export const gStyles = StyleSheet.create({
    bg: {
        backgroundColor: Colors.bgColor
    },
    title: {
        color: Colors.buttonColor,
        alignSelf: 'center',
        fontWeight:'700',
        marginTop: 20,
        fontSize: 22,
    },
    card: {
        backgroundColor: Colors.buttonColor,
        shadowColor: Colors.black,
        alignSelf: 'center',
        paddingVertical: 25,
        paddingBottom: 30,
        marginTop: '25%',
        borderRadius: 8,
        width: '90%',
        padding: 20,

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
        color: Colors.bgColor,
        borderBottomWidth: 1,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: 20,
        lineHeight: 30,
        fontSize: 25,
        height: 40,
        padding: 0,
        width: 45,
    },
});

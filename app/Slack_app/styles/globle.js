import {
    StyleSheet,
    Dimensions,
} from 'react-native';

import { Colors } from '../../styles/color'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export const gStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    logoBox: {
        width: deviceWidth,
        flex: 1,
    },
    logo: {
        marginTop: deviceHeight * 0.15,
        height: deviceWidth * 0.4,
        width: deviceWidth * 0.4,
        alignSelf: 'center',
    },
    bottomView: {
        justifyContent: 'flex-end',
        paddingHorizontal: 26,
        width: deviceWidth,
        marginBottom: 30,
    },
    heading: {
        // textDecorationLine: 'underline',
        color: Colors.buttonColor,
        fontWeight: '500',
        marginBottom: 25,
        fontSize: 26,
    },
    navBtn: {
        backgroundColor: Colors.buttonColor,
    },
    navBtnText: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: 14,
    },  

    smallBtn: {
        backgroundColor: Colors.buttonColor,
        paddingVertical: 10,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 10,
        width: '40%',
    },
    smallBtnText: {
        color: Colors.white,
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 18,
    },
    largeBtn: {
        backgroundColor: Colors.buttonColor,
        paddingVertical: 10,
        alignSelf: 'center',
        borderRadius: 5,
        width: '100%',
    },
    largeBtnText: {
        color: Colors.white,
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 18,
    },
    text: {
        color: Colors.buttonColor,
        fontWeight: '400',
        fontSize: 18,
    },

    ipItem: {
        borderColor: Colors.gray,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 6,
        marginBottom: 20,
        height: 45,
    },
    icon: {
        opacity: 0.4,
        height: 30,
        width: 30,
    },
    ip: {
        backgroundColor: Colors.white,
        borderRadius: 6,
        borderWidth: 0,
        height: 43.5,
        fontSize: 17,
        flex: 1,
    },
})

import {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

import { Colors } from '../../styles/color'

const deviceWidth = Dimensions.get('window').width

export const gStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    bgCover: {
        justifyContent: 'flex-end',
        flex: 1,
    },
    bottomView: {
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        width: deviceWidth,
        marginBottom: Platform.select({
            android: 10,
            ios: 20,
        }),
    },
    heading: {
        color: Colors.buttonColor,
        fontWeight: '700',
        marginBottom: 20,
        fontSize: 26,
    },
    navBtn: {
        backgroundColor: Colors.buttonColor,
        padding: 7,
    },
    navBtnText: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: 14,
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
        backgroundColor: Colors.white,
        borderColor: Colors.gray,
        textAlignVertical:'top',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 0.5,
        marginBottom: 20,
        borderRadius: 6,
        height: 40,
    },
    icon: {
        marginRight: 5,
        marginLeft: 8,
        height: 20,
        width: 20,
    },
    ip: {
        backgroundColor: Colors.white,
        color: Colors.black,
        borderRadius: 6,
        borderWidth: 0,
        paddingLeft: 5,
        fontSize: 16,
        height: 39.0,
        padding: 0,
        flex: 1,
    },
})

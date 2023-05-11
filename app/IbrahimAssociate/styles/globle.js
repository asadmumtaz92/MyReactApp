import {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

import { Colors } from '../../styles/color'

const width = Dimensions.get('window').width

export const gStyles = StyleSheet.create({
    // NEV BAR
    navBtn: {
        padding: 5,
        zIndex: 1
    },


    // BODY
    container: {
        backgroundColor: Colors.white,
        minWidth: '100%',
        flex: 1,
    },
    flatlist: {
        paddingBottom: Platform.select({
            android: 5,
            ios: 10,
        }),
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    createPostView: {
        bottom: Platform.select({
            android: 20,
            ios: 40,
        }),
        backgroundColor: Colors.crm,
        borderBottomLeftRadius: 30,
        borderColor: Colors.white,
        borderTopLeftRadius: 30,
        paddingHorizontal: 12,
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'row',
        borderRightWidth: 0,
        paddingVertical: 6,
        borderWidth: 2,
        zIndex: 1,
        right: 0,

    },
    createPostText: {
        color: Colors.white,
        fontWeight: '700',
        flexWrap: 'wrap',
        marginLeft: 7,
        fontSize: 11,
        width: 50,
    },


    // LOADING INDICATOR
    loaderView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },


    // ICONS
    icon: {
        color: Colors.white,
        fontSize: 20,
    },


    // FORM
    ipSearch: {
        borderBottomColor: Colors.crm,
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
    errorView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flex: 1,
    },
    errorText: {
        color: Colors.black,
        alignSelf: 'center',
        fontWeight: '500',
        marginTop: 10,
        fontSize: 22,
        opacity: 0.5,
    },
    label: {
        color: Colors.black,
        fontWeight: '700',
        marginBottom: 5,
        marginLeft: 3,
        fontSize: 18,
        opacity: 0.6,
    },
    ip: {
        backgroundColor: Colors.white,
        color: Colors.inputColor,
        textAlignVertical: 'top',
        paddingHorizontal: 7,
        fontWeight: '500',
        borderRadius: 8,
        borderWidth: 0,
        fontSize: 17,
        minHeight: 45,

        elevation: 3,
        shadowColor: Colors.black,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
    },
    counter: {
        alignSelf: 'flex-end',
        marginRight: 3,
        marginTop: 2,
    },
});

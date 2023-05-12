import {
    StyleSheet,
} from 'react-native'

import { Colors } from './color'

export const gStyles = StyleSheet.create({
    // STYLE FOR NAVIGATIONS
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    title: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '500',
        fontSize: 16,
    },
    link: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    img: {
        marginRight: 8,
    },
    linkText: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '500',
        fontSize: 14,
    },
    headerStyle: {
        backgroundColor: Colors.primery,
    },
    headerTitleStyle: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '500',
        fontSize: 16,
    },

    flatlist: {
        marginHorizontal: 10,
        paddingBottom: 20,
        marginBottom: 10,
    },
    fontItem: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        borderRadius: 8,
        marginTop: 15,
        padding: 20,
        flex: 1,

        elevation: 5,
        shadowColor: Colors.primery,
        shadowOpacity: 0.4,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
    },
    icon: {
        alignSelf: 'center',
        color: Colors.crm,
        fontSize: 50,
    },
    name: {
        fontStyle: 'italic',
        alignSelf: 'center',
        marginLeft: 20,
        marginTop: 5,
        fontSize: 16,
        flex: 1
    },
})

import React from "react"
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
} from 'react-native'

import { Colors } from '../styles/color'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'

import { useNavigation } from "@react-navigation/native"

const BottomTab = (props) => {

    const navigation = useNavigation()

    return (
        <View style={styles.bottomTab}>
            <TouchableOpacity
                onPress={() => navigation.navigate('CRM_Peoples')} activeOpacity={0.9} style={styles.tab}
            >
                <Feather name='users' style={styles.icons} />
                <Text style={styles.tabText}>PEOPLES</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('CRM_Companies')} activeOpacity={0.9} style={styles.tab}
            >
                <FontAwesome5 name='building' style={[styles.icons, { fontSize: 22 }]} />
                <Text style={styles.tabText}>COMPANIES</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomTab: {
        backgroundColor: Colors.primery,
        flexDirection: 'row',
        width: '100%',
    },
    tab: {
        justifyContent: 'center',
        borderColor: Colors.white,
        borderRightWidth: 0.5,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 12,
        flex: 1,
    },
    icons: {
        color: Colors.white,
        alignSelf: 'center',
        marginRight: 5,
        fontSize: 25,
    },
    tabText: {
        color: Colors.white,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16,
        marginTop: 3,
    },
})

export default BottomTab

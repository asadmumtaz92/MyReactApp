import React, { useLayoutEffect } from "react"
import {
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    StatusBar,
    FlatList,
    Image,
    View,
    Text,
} from "react-native"

import { Colors } from "../styles/color"
import { gStyles } from "./styles/globle"

import {
    back_sign,
} from './constant/images'

import {
    team
} from './constant/tabData'

const deviceWidth = Dimensions.get('window').width

const AboutApp = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => { },
            headerLeft: () => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()} activeOpacity={0.9}
                        style={[gStyles.navBtn, styles.nav]}
                    >
                        <Image
                            source={back_sign} resizeMode='cover' style={styles.navImg}
                        />
                        <Text style={[gStyles.navBtnText, { fontSize: 16, }]}>{`BACK`}</Text>
                    </TouchableOpacity>
                )
            },
        })
    }, [navigation])

    const randerItem = (items) => {
        let item = items.item
        return (
            <>
                <Image source={item.image} style={styles.userProfileImage} resizeMode='cover' />

                <View style={styles.nameBox}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.name}>{item.desi}</Text>
                    <Text style={styles.email}>{item.email}</Text>
                    <Text style={styles.email}>{item.link}</Text>
                </View>

                <View style={styles.divider} />
            </>
        )
    }

    return (
        <View style={[gStyles.container, { backgroundColor: '#f8faff', paddingHorizontal: 10 }]}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.buttonColor}
                barStyle='light-content'
            />

            {/* TEAM LIST */}
            <View style={{ flex: 1 }}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 10 }}
                    data={team}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                    renderItem={randerItem}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 0,
    },
    navImg: {
        marginRight: 2,
        height: 14,
        width: 14,
    },

    userProfileImage: {
        borderRadius: (deviceWidth * 0.3) / 2,
        borderColor: Colors.buttonColor,
        height: deviceWidth * 0.3,
        width: deviceWidth * 0.3,
        alignSelf: 'center',
        marginBottom: 10,
        borderWidth: 3,
        marginTop: 20,
    },
    nameBox: {
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    name: {
        color: Colors.black,
        fontWeight: '600',
        marginVertical: 3,
        fontSize: 18,
    },
    email: {
        color: Colors.black,
        fontWeight: '400',
        marginVertical: 3,
        fontSize: 14,
    },
    divider: {
        backgroundColor: Colors.gray,
        height: 0.5,
    },
})

export default AboutApp

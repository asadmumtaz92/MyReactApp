import React, { useState, useLayoutEffect } from "react"
import {
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    StatusBar,
    FlatList,
    Alert,
    Image,
    View,
    Text,
} from "react-native"

import { Colors } from "../styles/color"
import { gStyles } from "./styles/globle"

import {
    logout_sign,
    asadMalick,
    back_sign,
    edit_sign,
    next_sign,
} from './constant/images'

import {
    link
} from './constant/tabData'

const deviceWidth = Dimensions.get('window').width

const Profile = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity
                        onPress={() => logoutHandler()} activeOpacity={0.9}
                        style={[gStyles.navBtn, styles.nav]}
                    >
                        <Image
                            source={logout_sign} resizeMode='cover' style={styles.logoutIcon}
                        />
                        <Text style={[gStyles.navBtnText, { fontSize: 16, }]}>{`Logout`}</Text>
                    </TouchableOpacity>
                )
            },
            headerLeft: () => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation.goBack() } activeOpacity={0.9}
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

    const logoutHandler = () => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 1000)
    }
    const editProfileHandler = () => {
        Alert.alert('Edit Name & Photo','\nOpen modal and update.')
    }
    const randerItem = (items) => {
        let item = items.item
        return (
            <TouchableOpacity style={styles.item} onPress={item.nav} activeOpacity={0.8}>
                <Text style={styles.itemText}>{item.title}</Text>
                <Image  source={next_sign} style={styles.itemImg} resizeMode='cover' />
            </TouchableOpacity>
        )
    }

    return (
        <View style={[gStyles.container, { backgroundColor: '#f8faff' }]}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.buttonColor}
                barStyle='light-content'
            />

            <Image source={asadMalick} style={styles.userProfileImage} resizeMode='cover' />

            <View style={styles.nameBox}>

                <Text style={styles.name}>{`Malick Asad`}</Text>

                <TouchableOpacity 
                    onPress={() => editProfileHandler() }
                    style={{ alignItems: 'center'}} activeOpacity={0.8}
                >
                    <Image source={edit_sign} style={{ marginLeft: 8, }} resizeMode='cover' />
                </TouchableOpacity>
            </View>

           {/* LINK LIST */}
            <View style={{ flex: 1 }}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 20 }}
                    data={link}
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
    logoutIcon: {
        marginRight: 5,
        height: 19,
        width: 19,
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
        marginTop: 30,
    },
    nameBox: {
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 30,
    },
    name: {
        color: Colors.buttonColor,
        fontWeight: '600',
        fontSize: 18,
    },

    item: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
        borderBottomWidth: 0.2,
        paddingBottom: 6,
        borderColor: Colors.primery,
        alignItems:'center'
    },
    itemText: {
        color: Colors.primery,
        fontWeight: '600',
        fontSize: 18,
    },
    itemImg: {
        height: 20,
        width: 20,
        marginRight: 5
    },
})

export default Profile

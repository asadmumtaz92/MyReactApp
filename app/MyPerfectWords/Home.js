import React, { useState, useLayoutEffect } from "react"
import {
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    FlatList,
    Alert,
    Image,
    View,
    Text,
} from "react-native"

import { Colors } from "../styles/color"
import { gStyles } from "./styles/globle"

import moment from "moment"

import Card from "./components/card"

import {
    userProfile,
} from './constant/images'

import {
    taskList,
    tabData,
} from './constant/tabData'

const Home = ({ navigation }) => {

    const [activeTab, setActiveTab] = useState(0)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Text style={gStyles.navBtnText}>{moment().format("ddd DD MMMM, YYYY")}</Text>
                )
            },
            headerLeft: () => {
                return (
                    <TouchableOpacity
                        onPress={() => profileHandler()} activeOpacity={0.9}
                        style={[gStyles.navBtn, styles.nav, { paddingLeft: 0, marginLeft: -7, }]}
                    >
                        <Image source={userProfile} style={styles.userImage} resizeMode='cover' />
                        <Text style={[gStyles.navBtnText, { fontSize: 16, }]}>{`userName`}</Text>
                    </TouchableOpacity>
                )
            },
        })
    }, [navigation])

    const profileHandler = () => {
        navigation.navigate('MPW_Profile')
    }
    const tabHandler = (val) => {
        setActiveTab(val)
    }
    const renderTabs = (items) => {
        let item = items.item
        return (
            <TouchableOpacity
                onPress={() => { tabHandler(item.id) }} activeOpacity={0.9}
                style={[styles.tab, activeTab == item.id && styles.activeTab]}
            >
                <Text style={styles.tabText}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    const renderTasks = (items) => {
        let item = items.item
        const nav = () => {
            // navigation.navigate('Forgot')
            Alert.alert('UPDATE', '\nTask detail show in next release.')
        }
        if (activeTab == item.id) {
            return <Card item={item} navigat={nav} />
        }
    }

    return (
        <View style={gStyles.container}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.buttonColor}
                barStyle='light-content'
                StatusBarAnimation='fade'
            />
            {/* TABS */}
            <View style={styles.header}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.name }
                    renderItem={renderTabs}
                    data={tabData}
                    numColumns={4}
                />
            </View>

            {/* TASK LIST */}
            <View style={{flex: 1}}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index }
                    renderItem={renderTasks}
                    data={taskList}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    userImage: {
        borderRadius: 15,
        marginRight: 7,
        height: 30,
        width: 30,
    },

    header: {
        backgroundColor: Colors.buttonColor,
        justifyContent: 'space-between',
        shadowColor: Colors.gray,
        alignItems:'center',
        flexDirection: 'row',
        shadowOpacity: 0.8,
        shadowRadius: 3,
        paddingTop: 15,
        elevation: 10,
        shadowOffset: {
            height: 4,
            width: 0,
        },
        width: '100%',
    },
    tab: {
        borderBottomColor: Colors.buttonColor,
        backgroundColor: Colors.buttonColor,
        borderBottomWidth: 5,
        paddingBottom: 5,
        flex: 1,
    },
    activeTab: {
        borderBottomColor: Colors.white 
    },
    tabText: {
        color: Colors.white,
        textAlign: 'center',
        fontWeight: '500',
        lineHeight: 24,
        fontSize: 16,
    },
})

export default Home

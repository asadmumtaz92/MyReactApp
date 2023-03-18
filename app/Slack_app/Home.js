import React, { useState, useLayoutEffect } from "react"
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    View,
    Text,
    Alert,
} from "react-native"
import { Colors } from "../styles/color"
import { gStyles } from "./styles/globle"
import moment from "moment"

import Card from "./components/card"

const Forgot = ({ navigation }) => {

    const [activeTab, setActiveTab] = useState(0)

    const tab = [
        {
            id:0,
            name: 'Active',
        },
        {
            id: 1,
            name: 'Drafts',
        },
        {
            id: 2,
            name: 'Completed',
        },
        {
            id: 3,
            name: 'Backlog',
        },
    ]
    const taskList = [
        {
            id: 0,
            type: 'IN PROGRESS',
            heading: 'The current problem of energy crisis and globle power shortage. The current problem of energy crisis and globle power shortage.',
            time: "1 day, 5 hour's remaining"
        },
        {
            id: 1,
            type: 'IN COMPLETE',
            heading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
            time: "3 day, 18 hour's late"
        },
        {
            id: 2,
            type: 'COMPLETE',
            heading: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
            time: "Completed in 2 day, 3 hour's"
        },
        {
            id: 3,
            type: 'BACKLOG',
            heading: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
            time: ""
        }
    ]

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Text style={gStyles.navBtnText}>
                        {moment().format("ddd DD MMMM, YYYY")}
                    </Text>
                )
            },
            headerLeft: () => {
                return (
                    <TouchableOpacity
                        onPress={() => userProfileHandler()} style={[gStyles.navBtn, styles.nav]} activeOpacity={0.9}
                    >
                        <Image
                            source={require('../assets/slack/asadMalick.png')}
                            style={styles.userImage} resizeMode='cover'
                        />
                        <Text style={[gStyles.navBtnText, { fontSize: 16, }]}>{`Malick Asad`}</Text>
                    </TouchableOpacity>
                )
            },
        })
    }, [navigation])

    const userProfileHandler = () => {
        // navigation.navigate('userProfile')
        Alert.alert('UPDATE','\nProfile show in next release.')
    }

    const tabHandler = (val) => {
        setActiveTab(val)
    }

    const RanderItem = (items) => {
        let item = items.items

        const nav = () => {
            // navigation.navigate('Forgot')
            Alert.alert('UPDATE', '\nProfile show in next release.')
        }

        return <Card item={item} navigat={nav} />
    } 

    return (
        <View style={[gStyles.container, { backgroundColor: '#f8faff' }]}>

            {/* TABS */}
            <View style={styles.header}>
                {tab.map((item) => {
                    return (
                        <TouchableOpacity key={item.id}
                            style={[styles.tab, activeTab == item.id && styles.activeTab]}
                            activeOpacity={0.9} onPress={() => { tabHandler(item.id) }}
                        >
                            <Text style={styles.tabText}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>

            {/* TASK LIST */}
            <View style={{ paddingTop: 10 }}>
                {taskList.map((item, index) => {
                    if (activeTab == item.id) {
                        return (
                            <RanderItem items={item} key={index} />
                            // <View key={index}
                            //     style={[
                            //         styles.card, { 
                            //             borderRightColor: 
                            //                 item.type == 'IN PROGRESS' 
                            //                     ? Colors.inProgress 
                            //                     : item.type == 'IN COMPLETE' 
                            //                         ? Colors.inComplete 
                            //                         : item.type == 'BACKLOG' 
                            //                             ? Colors.backLog
                            //                             : Colors.complete
                            //         }
                            //     ]}
                            // >

                            //     <View style={styles.innerCard}>
                            //         <Text numberOfLines={2} style={styles.heading}>{item.heading}</Text>

                            //         <View style={styles.bottom}>
                            //             <Image
                            //                 source={require('../assets/slack/username.jpg')}
                            //                 style={styles.icon} resizeMode='cover'
                            //             />
                            //             <Text>{item.time}</Text>
                            //         </View>
                            //     </View>

                            //     <View style={styles.typeBox}>
                            //         <Text
                            //             style={[
                            //                 styles.type, 
                            //                         item.type == 'IN PROGRESS' && { color: Colors.inProgress, marginRight: -37},
                            //                     item.type == 'IN COMPLETE' && { color: Colors.inComplete, marginRight: -37 },
                            //                     item.type == 'COMPLETE' && { color: Colors.complete, marginRight: -28 },
                            //                     item.type == 'BACKLOG' && { color: Colors.backLog, marginRight: -24 }
                            //             ]}
                            //         >
                            //             {item.type}
                            //         </Text>
                            //     </View>

                            // </View>
                        )
                    }
                })}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRightColor: Colors.inProgress,
        borderBottomRightRadius: 7,
        shadowColor: Colors.gray,
        borderTopRightRadius: 7,
        marginHorizontal: 20,
        borderRightWidth: 8,
        flexDirection: 'row',
        marginVertical: 10,
        shadowOpacity: 0.8,
        borderRadius: 5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        height: 100,
    },
    innerCard: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        marginRight: 20,
        padding: 10,
        flex: 1,
    },
    heading: {
        textTransform: 'capitalize',
        color: Colors.black,
        lineHeight: 22,
        fontSize: 16,
    },
    bottom: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    icon: {
        borderRadius: 10,
        marginRight: 2,
        height: 25,
        width: 25,
    },
    typeBox: {
        marginTop: 42,
        position: 'absolute',
        right: 0,
    },
    type: {
        transform: [{ rotate: '-90deg' }],
        textAlign:'center',
    },

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
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.buttonColor,
        // height: 30,
        alignItems:'center',
        paddingTop: 15,

        shadowColor: Colors.gray,
        shadowOffset:{
            height: 4,
            width: 0,
        },
        shadowRadius: 3,
        shadowOpacity: 0.8,
    },
    tab: {
        flex: 1,
        // marginHorizontal: 5 ,
        backgroundColor: Colors.buttonColor,
        // height: 27,
        // borderRadius: 20,
        borderBottomWidth: 5,
        paddingBottom: 5,
        // borderBottomRightRadius: 5,
        // borderBottomLeftRadius: 5,
        borderColor: Colors.buttonColor
    },
    activeTab: {
        borderColor: Colors.white 
    },
    tabText: {
        color: Colors.white,
        textAlign: 'center',
        fontWeight: '500',
        lineHeight: 24,
        fontSize: 16,
    },




    text: {
        color: Colors.buttonColor,
        marginHorizontal: 5,
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: 20,
        marginTop: 25,
        fontSize: 16,
    },
    note: { 
        fontWeight: '700',
        lineHeight: 25,
        fontSize: 20,
    },
})

export default Forgot

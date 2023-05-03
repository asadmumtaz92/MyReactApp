import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    View,
    Text,
} from 'react-native'

import { Colors } from '../../styles/color'

import {
    clock_sign,
    inProgress,
    inComplete,
    complete
} from '../constant/images'

const Card = ({ item, navigat }) => {

    return (
        <TouchableOpacity
            style={[
                styles.card, {
                    borderRightColor:
                        item.type == 'IN PROGRESS'
                            ? Colors.inProgress
                            : item.type == 'IN COMPLETE'
                                ? Colors.inComplete
                                : item.type == 'BACKLOG'
                                    ? Colors.backLog
                                    : item.type == 'COMPLETE'
                                        ? Colors.complete
                                        : Colors.white,
                },
                // item.type == 'BACKLOG' && { borderRightWidth: 8, borderBottomRightRadius: 8, borderTopRightRadius: 8 },
            ]}
            onPress={navigat} activeOpacity={0.7}
        >
            <View style={styles.innerCard}>
                <Text numberOfLines={2} style={styles.heading}>{item.heading}</Text>

                <View style={styles.bottom}>
                    <Image
                        source={clock_sign} style={styles.icon} resizeMode='cover'
                    />
                    <Text style={styles.time}>{item.time}</Text>
                </View>
            </View>

            <>
                {/* {item.type != 'BACKLOG' && 
                    <Image
                        source={
                            item.type == 'IN PROGRESS' 
                                ? inProgress
                                : item.type == 'IN COMPLETE'
                                    ? inComplete
                                    : item.type == 'COMPLETE'
                                        ? complete
                                        : null
                        }
                        style={styles.sideBar} resizeMode='contain'
                    />
                }
                {item.type == 'BACKLOG' &&
                    <View style={styles.typeBox}>
                        <Text
                            style={[
                                styles.type,
                                item.type == 'BACKLOG' && { color: Colors.backLog, marginRight: -22 }
                            ]}
                        >
                            {item.type}
                        </Text>
                    </View>
                } */}
            </>

            <View style={styles.typeBox}>
                <Text
                    style={[
                        styles.type,
                        item.type == 'IN PROGRESS' && { color: Colors.inProgress, marginRight: -35 },
                        item.type == 'IN COMPLETE' && { color: Colors.inComplete, marginRight: -36 },
                        item.type == 'COMPLETE' && { color: Colors.complete, marginRight: -27 },
                        item.type == 'BACKLOG' && { color: Colors.backLog, marginRight: -22 }
                    ]}
                >
                    {item.type}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRightColor: Colors.white,
        backgroundColor: Colors.white,
        borderBottomRightRadius: 12,
        shadowColor: Colors.black,
        borderTopRightRadius: 12,
        marginHorizontal: 20,
        borderRightWidth: 8,
        flexDirection: 'row',
        marginVertical: 12,
        shadowOpacity: 0.3,
        borderRadius: 6,
        shadowRadius: 4,
        minHeight: 100,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 3,
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
        marginRight: 5,
        marginTop: 2,
        height: 15,
        width: 15,
    },
    time: {
        color: Colors.time,
        lineHeight: 18,
        fontSize: 14,
    },

    sideBar: {
        borderBottomRightRadius: 12,
        borderTopRightRadius: 12,
        marginRight: -3,
        maxHeight: 110,
    },
    typeBox: {
        position: 'absolute',
        marginTop: 40,
        right: 0,
    },
    type: {
        transform: [{ rotate: '-90deg' }],
        textAlign: 'center',
    },
})

export default Card

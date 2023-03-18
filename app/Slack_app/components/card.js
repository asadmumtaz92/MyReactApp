import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    View,
    Text,
} from 'react-native'
import { Colors } from '../../styles/color'

const Card = ({item, navigat}) => {

    return (
        <TouchableOpacity //key={index}
            style={[
                styles.card, {
                    borderRightColor:
                        item.type == 'IN PROGRESS'
                            ? Colors.inProgress
                            : item.type == 'IN COMPLETE'
                                ? Colors.inComplete
                                : item.type == 'BACKLOG'
                                    ? Colors.backLog
                                    : Colors.complete
                }
            ]}
            activeOpacity={0.7}
            onPress={navigat}
        >

            <View style={styles.innerCard}>
                <Text numberOfLines={2} style={styles.heading}>{item.heading}</Text>

                <View style={styles.bottom}>
                    <Image
                        source={require('../../assets/slack/username.jpg')}
                        style={styles.icon} resizeMode='cover'
                    />
                    <Text>{item.time}</Text>
                </View>
            </View>

            <View style={styles.typeBox}>
                <Text
                    style={[
                        styles.type,
                        item.type == 'IN PROGRESS' && { color: Colors.inProgress, marginRight: -37 },
                        item.type == 'IN COMPLETE' && { color: Colors.inComplete, marginRight: -37 },
                        item.type == 'COMPLETE' && { color: Colors.complete, marginRight: -28 },
                        item.type == 'BACKLOG' && { color: Colors.backLog, marginRight: -24 }
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
        marginRight: 15,
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
        textAlign: 'center',
    },
})

export default Card

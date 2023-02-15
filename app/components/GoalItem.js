import React from 'react'
import {
    StyleSheet,
    Pressable,
    Text,
} from 'react-native'

const GoalItem = (props) => {

    return (
        <Pressable
            android_ripple={{ color: '#f00' }}
            style={styles.itemButton} activeOpacity={0.7}
            onPress={props.onDelete.bind(this, props.id)}
        >
            <Text style={styles.itemText}>{props.text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    itemButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 15,
        width: '100%',
    },
    itemText: {
        paddingHorizontal: 10,
        color: '#FFF',
        fontSize: 17,
    },
})

export default GoalItem

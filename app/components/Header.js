import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const Header = (props) => {

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        paddingVertical: 10,
        width: '100%',
    },
    headerText: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
    },
})

export default Header

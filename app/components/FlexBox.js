import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const FlexBox = () => {
    
    return (
        <View>
            <Text style={styles.title}>{`Flex Box Layout`}</Text>
            <View style={styles.mainBox}>
                <View style={[styles.box, { backgroundColor: 'red' }]}><Text>1</Text></View>
                <View style={[styles.box, { backgroundColor: 'green' }]}><Text>2</Text></View>
                <View style={[styles.box, { backgroundColor: 'blue' }]}><Text>3</Text></View>
                <View style={[styles.box, { backgroundColor: 'yellow' }]}><Text>4</Text></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        marginBottom: 10,
        fontWeight: '500',
        marginTop: 20,
        color: '#000',
        fontSize: 18,
    },
    mainBox: {
        justifyContent: 'space-between', // flex-start | flex-end | space-between | space-around | space-evenly | center
        paddingHorizontal: 20,
        alignItems: 'center', // baseline | stretch | center
        flexDirection: 'row', // 'row' | 'row-reverse' | 'column' | 'column-reverse'

    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 70,
    },
})

export default FlexBox

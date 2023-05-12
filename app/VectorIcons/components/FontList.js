import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Text,
} from 'react-native'

import { Colors } from '../styles/color'
import { FontsList } from '../constantData/FontsList'

import { useNavigation } from '@react-navigation/native'

const FontList = (props) => {

    const navigation = useNavigation()

    const changeScreen = (appStatus) => {
        navigation.navigate(appStatus)
    }

    const renderItem = (items) => {
        let item = items.item

        return (
            <TouchableOpacity
                key={item?.id} style={styles.fontItem} activeOpacity={0.9}
                onPress={() => changeScreen(item?.action)}
            >
                <Text style={styles.fontItemText}>{`${item?.id}.  ${item?.name}`}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={FontsList}
            renderItem={renderItem}
            keyExtractor={(_, index) => index}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatlist}
        />
    )
}

const styles = StyleSheet.create({
    flatlist: {
        marginHorizontal: 20
    },
    fontItem: {
        borderBottomColor: Colors.primery,
        borderBottomWidth: 0.2,
        paddingHorizontal: 5,
        marginTop: 20,
    },
    fontItemText: {
        textTransform: 'uppercase',
        color: Colors.black,
        textAlign: 'left',
        fontWeight: '700',
        paddingBottom: 6,
        fontSize: 18,
        opacity: 0.7,
    },
})

export default FontList

import React from 'react'
import {
    FlatList,
    View,
    Text,
} from 'react-native'
import { gStyles } from '../styles/globelStyle'
import { FontAwesome5RegularIconsList } from '../constantData/FontsList'
import Icons from 'react-native-vector-icons/FontAwesome5'

const FontAwesome5Regular = () => {

    const renderItem = (items) => {
        let item = items.item

        return (
            <View key={item?.id} style={gStyles.fontItem} >
                <Icons name={item?.name} style={gStyles.icon} />
                <Text style={gStyles.name}>{`name='${item?.name}'`}</Text>
            </View>
        )
    }

    return (
        <View style={gStyles.container}>
            <FlatList
                renderItem={renderItem}
                keyExtractor={(_, index) => index}
                data={FontAwesome5RegularIconsList}
                contentContainerStyle={gStyles.flatlist}
            />
        </View>
    )
}

export default FontAwesome5Regular

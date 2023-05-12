import React from 'react'
import {
    FlatList,
    View,
    Text,
} from 'react-native'
import { gStyles } from '../styles/globelStyle'
import { OctIconsList } from '../constantData/FontsList'
import Icons from 'react-native-vector-icons/Octicons'

const OctIcons = () => {

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
                data={OctIconsList}
                renderItem={renderItem}
                keyExtractor={(_, index) => index}
                contentContainerStyle={gStyles.flatlist}
            />
        </View>
    )
}

export default OctIcons

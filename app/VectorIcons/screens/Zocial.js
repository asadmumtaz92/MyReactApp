import React from 'react'
import {
    FlatList,
    View,
    Text,
} from 'react-native'
import { gStyles } from '../styles/globelStyle'
import { ZocialIconsList } from '../constantData/ZocialIcons'
import Icons from 'react-native-vector-icons/Zocial'

const ZocialIcons = () => {

    const renderItem = (items) => {
        let item = items.item

        return (
            <View key={item?.id} style={gStyles.fontItem} >
                <Icons name={item} style={gStyles.icon} />
                <Text style={gStyles.name}>{`name='${item}'`}</Text>
            </View>
        )
    }

    return (
        <View style={gStyles.container}>
            <FlatList
                data={ZocialIconsList}
                renderItem={renderItem}
                keyExtractor={(_, index) => index}
                contentContainerStyle={gStyles.flatlist}
            />
        </View>
    )
}

export default ZocialIcons

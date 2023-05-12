import React from 'react'
import {
    FlatList,
    View,
    Text,
} from 'react-native'
import { gStyles } from '../styles/globelStyle'
import { FontistoIconsList } from '../constantData/Fontisto'
import Icons from 'react-native-vector-icons/Fontisto'

const Fontisto = () => {

    const renderItem = (items) => {
        console.log("item: ",item)
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
            {/* {FontistoIconsList.map(item => {
                console.log('DATA:', item)
            })} */}
            <FlatList
                renderItem={renderItem}
                data={FontistoIconsList}
                keyExtractor={(_, index) => index}
                contentContainerStyle={gStyles.flatlist}
            />
        </View>
    )
}

export default Fontisto

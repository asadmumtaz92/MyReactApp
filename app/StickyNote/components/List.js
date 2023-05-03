import {
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Text,
} from 'react-native'

import { Colors } from '../../styles/color'

const List = ({ data, onPress }) => {

    const renderItem = (items) => {
        let item = items.item
        return (
            <TouchableOpacity
                style={styles.dataBox} activeOpacity={0.8}
                onPress={() => onPress(item)}
            >
                <Text style={styles.number}>{item.id + 1}.</Text>
                <Text style={[styles.text, { flex: 1 }]} numberOfLines={2}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 15 }}
        />
    )
}

const styles = StyleSheet.create({
    dataBox: {
        backgroundColor: Colors.white,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 8,
        width: '94%',
        padding: 10,

        elevation: 3,
        shadowColor: Colors.black,
        shadowOpacity: 0.25,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
    },
    number: {
        color: Colors.primery,
        fontWeight: '600',
        marginRight: 7,
        lineHeight: 26,
        fontSize: 20,
    },
    text: {
        textTransform: 'capitalize',
        color: Colors.black,
        fontWeight: '400',
        lineHeight: 23,
        fontSize: 17,
    },
})

export default List

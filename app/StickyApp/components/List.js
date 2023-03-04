import {
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Text,
} from 'react-native'

import { Colors } from '../../styles/color'

const List = ({ data, onPress }) => {

    const renderItem = (item) => {
        return (
            <TouchableOpacity
                style={styles.dataBox} activeOpacity={0.8}
                key={item.item.uniqueId} onPress={() => onPress(item.item)}
            >
                <Text style={styles.number}>{item.item.id + 1}.</Text>
                <Text style={[styles.text, { flex: 1 }]} numberOfLines={2}>{item.item.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
        />
    )
}

const styles = StyleSheet.create({
    dataBox: {
        backgroundColor: Colors.primery,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        marginTop: 12,
        width: '90%',
        padding: 8,
    },
    number: {
        textTransform: 'capitalize',
        color: Colors.white,
        fontWeight: '500',
        marginRight: 5,
        fontSize: 18,
    },
    text: {
        textTransform: 'capitalize',
        color: Colors.white,
        fontWeight: '400',
        fontSize: 16,
    },
})

export default List

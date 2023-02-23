import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

import { Colors } from '../../styles/color'

const List = ({ title, val }) => {

    return (
        <View style={styles.itemView}>
            <Text style={styles.itemViewText}>{title}</Text>
            <Text style={[styles.itemViewText, { fontWeight: '600', fontSize: 18 }]}>
                {val ? ' YES' : ' No'}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemView: {
        backgroundColor: Colors.buttonColor,
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        flexDirection: 'row',
        paddingVertical: 7,
        marginVertical: 7,
        borderRadius: 8,
    },
    itemViewText: {
        color: Colors.white,
        fontWeight: '500',
        marginVertical: 4,
        fontSize: 16,
    },
})

export default List

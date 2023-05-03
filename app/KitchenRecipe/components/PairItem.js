import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

import { Colors } from '../../styles/color'

const List = ({ title, val = null }) => {

    return (
        <View style={[styles.itemView, val != null && { flexDirection: 'row', justifyContent: 'space-between', }]}>
            {title && <Text style={styles.itemViewText}>{title}</Text>}
            {val != null 
                && <Text style={[styles.itemViewText, { fontWeight: '600', fontSize: 18 }]}>
                    {val ? ' YES' : ' No'}
                </Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    itemView: {
        backgroundColor: Colors.primery,
        paddingHorizontal: 12,
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

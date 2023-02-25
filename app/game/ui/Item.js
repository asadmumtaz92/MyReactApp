import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

import { Colors } from '../../styles/color'

const Item = ({ id, num }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{`# ${id + 1} `}</Text>
            <Text style={styles.itemText}>{`Opponent's Guess: ${num}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.bgColor,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        marginVertical: 6,
        borderRadius: 8,

        elevation: 5,
        shadowColor: Colors.black,
        shadowOpacity: 0.6,
        shadowRadius: 2,
        shadowOffset: {
            width: 1, // for left & right
            height: 1, // for top & bottom
        },
    },
    itemText: {
        color: Colors.buttonColor,
        fontWeight: '700',
    },
})

export default Item

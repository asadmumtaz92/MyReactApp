import {
    TouchableOpacity,
    StyleSheet,
    Platform,
    View,
    Text,
} from 'react-native'

function CategoryGridTile({ title, color, onPress }) {

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }]}
            onPress={onPress} activeOpacity={0.8}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        height: 150,
        margin: 16,
        flex: 1,

        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default CategoryGridTile

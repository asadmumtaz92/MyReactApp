import {
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native'

const CategoryGridTile = ({ title, color, onPress }) => {

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }]}
            onPress={onPress} activeOpacity={0.9}
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

        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#00000099'
    },
});

export default CategoryGridTile

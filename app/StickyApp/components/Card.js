import {
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image,
    Text,
} from 'react-native'

import { Colors } from '../../styles/color'

const { width } = Dimensions.get('window')
const rightArrow = require('../../assets/rightArrow_black.png')

const Card = ({ title, onPress }) => {

    return (
        <TouchableOpacity
            style={styles.card } activeOpacity={0.8}
            onPress={onPress}
        >
            <Text style={styles.title}>{title}</Text>
            <Image source={rightArrow} style={styles.img} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
        width: width * 0.8,
        borderRadius: 8,
        margin: 16,

        elevation: 4,
        shadowColor: Colors.black,
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: {
            height: 2,
            width: 0,
        },
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 18,
    },
    img: {
        marginTop: 20,
        height: 35,
        width: 40,
    },
})

export default Card

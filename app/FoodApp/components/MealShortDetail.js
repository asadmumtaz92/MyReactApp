import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { Colors } from '../../styles/color'

const MealShortDetail = ({ title, duration, complexity, affordability }) => {

    return (
        <View style={styles.detailBox}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.desc}>
                <Text style={styles.text}>{duration} mint</Text>
                <Text style={styles.text}>{complexity}</Text>
                <Text style={styles.text}>{affordability}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailBox: {
        flexDirection: 'column',
        padding: 16,
    },
    title: {
        color: Colors.buttonColor,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 22,
    },
    desc: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 10,
    },
    text: {
        textTransform: 'capitalize',
        color: Colors.buttonColor,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 14,
    },
});

export default MealShortDetail

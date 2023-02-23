import {
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    View,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Colors } from '../../styles/color'
import MealShortDetail from '../components/MealShortDetail'

const { width } = Dimensions.get('window')

const MealItem = ({ itemData }) => {

    const navigation = useNavigation()

    const meailDetailNavigate = () => {
        navigation.navigate('MealDetails', { itemData: itemData })
    }

    return (
        <TouchableOpacity
            activeOpacity={0.9} style={styles.box}
            onPress={meailDetailNavigate}
        >
            <Image source={{ uri: itemData.imageUrl }} style={styles.img} resizeMode="cover" />

            <View style={styles.desc}>
                <MealShortDetail
                    title={itemData.title}
                    duration={itemData.duration}
                    complexity={itemData.complexity}
                    affordability={itemData.affordability}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: Colors.white,
        marginHorizontal: '5%',
        width: width * 0.9,
        marginBottom: 20,
        marginTop: 10,
        borderRadius: 8,

        elevation: 10,
        shadowColor: Colors.black,
        shadowOpacity: 0.4,
        shadowRadius: 4,
        shadowOffset: {
            height: 0,
            width: 0,
        },
    },
    img: {
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        height: width * 0.55,
        alignSelf: 'center',
        width: width * 0.9,
    },
    desc: {
        justifyContent:'space-evenly',
        flexDirection: 'row',
        marginTop: 10,
    },
});

export default MealItem

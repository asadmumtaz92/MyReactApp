import {
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    View,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { connect, useDispatch } from 'react-redux'
import { setSelectedMeal } from '../../redux/actions/foodRecipe'

import { Colors } from '../../styles/color'
import MealShortDetail from './MealShortDetail'

const { width } = Dimensions.get('window')

const MealItem = ({ itemData, ...props}) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const meailDetailNavigate = () => {
        dispatch(props?.setSelectedMeal(itemData))
        navigation.navigate('MealDetails')
    }

    return (
        <TouchableOpacity
            activeOpacity={0.9} style={styles.box}
            onPress={meailDetailNavigate} key={Date.now()}
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
        marginHorizontal: width * 0.03,
        backgroundColor: Colors.white,
        width: width * 0.94,
        marginBottom: 20,
        borderRadius: 8,
        marginTop: 10,

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
        width: width * 0.94,
    },
    desc: {
        justifyContent:'space-evenly',
        flexDirection: 'row',
        marginTop: 10,
    },
})

const mapStateToProps = ({ foodReducer }) => ({ foodReducer })

export default connect(mapStateToProps, {
    setSelectedMeal,
})(MealItem)


import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    View,
    Text,
} from 'react-native'

import { Colors } from '../../styles/color'
import { priceDisplay } from '../utlz/index'

import { connect, useDispatch } from 'react-redux'
import { setSelectedDeal } from '../../redux/actions/dataDriven'

const DealItem = ({ dealData, navigate }) => {
    const dispatch = useDispatch()

    const navigateHandler = () => {
        dispatch(setSelectedDeal(dealData))
        setTimeout(() => {
            navigate()
        }, 100);
    }
    return (
        <TouchableOpacity onPress={navigateHandler} key={dealData?.key} style={styles.item} activeOpacity={0.9}>
            <Image source={{ uri: dealData.media[0] }} style={styles.image} resizeMode='cover' />

            <View style={styles.detailView}>
                <Text style={styles.title}>{dealData?.title}</Text>
                <View style={styles.bottomView}>
                    <Text style={styles.cause}>{dealData?.cause?.name}</Text>
                    <Text style={styles.price}>Price: {priceDisplay(dealData?.price)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.white,
        marginHorizontal: 10,
        marginVertical: 12,
        borderRadius: 5,

        shadowColor: Colors.black,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 4,
    },
    image: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        width: '100%',
        height: 200,
    },
    detailView: {
        backgroundColor: Colors.white,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        paddingBottom: 6,
    },
    title: {
        textTransform: 'capitalize',
        color: Colors.primery,
        paddingHorizontal: 7,
        fontWeight: '700',
        fontSize: 17,
        marginTop: 5,
    },
    bottomView: {
        justifyContent: 'space-between',
        paddingHorizontal: 7,
        flexDirection: 'row',
        marginTop: 5,
    },
    cause: {
        color: Colors.black,
        fontWeight: '700',
        fontSize: 16,
    },
    price: {
        color: Colors.black,
        fontWeight: '700',
        fontSize: 16,
    },
})

const mapStateToProps = ({ calculatorReducer }) => ({ calculatorReducer })

export default connect(mapStateToProps, {
    setSelectedDeal
})(DealItem)

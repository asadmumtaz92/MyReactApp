
import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    View,
} from 'react-native'

import { Colors } from '../../styles/color'
import { gStyles } from '../../styles/globalStyle'

const favorite = require('../../assets/favorite.png')
const favorite_outline = require('../../assets/favorite_outline.png')
const back_white = require('../../assets/back_white.png')

const { width } = Dimensions.get('window')

const Header = ({
    leftFun = () => { },
    title,
    rightFun = () => { },
    status = false
}) => {

    // for navigation header
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => { 
    //             return (
    //                 displayMeal.title && 
    //                     <TouchableOpacity onPress={()=>{}} activeOpacity={0.8}>
    //                         <Image source={fvrt == true ? favorite : favorite_outline} style={{ height: 30, width: 30 }} />
    //                     </TouchableOpacity>
    //             )
    //         },
    //         headerLeft: () => {
    //             return (
    //                 <TouchableOpacity onPress={() => { }} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center'}} >
    //                     <Image source={back_white} style={{ height: 15, width: 10, marginRight: 5 }} />
    //                     <Text style={{color: Colors.white,fontWeight: '600', fontSize: 16}}>Back</Text>
    //                 </TouchableOpacity>
    //             )
    //         },
    //     })
    // }, [navigation])

    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={leftFun} activeOpacity={0.8}
                style={[styles.left, gStyles.centerAlign]}
            >
                <Image source={back_white} style={styles.backImage} />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <View style={[styles.body, gStyles.centerAlign]}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
            </View>

            {status != null
                && <TouchableOpacity
                    onPress={rightFun} activeOpacity={0.8}
                    style={[styles.right, gStyles.centerAlign]}
                >
                    <Image source={status ? favorite : favorite_outline} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primery,
        flexDirection: 'row',
        width: width,
        height: 50,
    },
    left: {
        flex: 2,
        flexDirection: 'row'
    },
    backImage: {
        marginRight: 5,
        height: 17,
        width: 10,
    },
    backText: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: 16,
    },
    body: {
        flex: 6,
    },
    title: {
        color: Colors.white,
        textAlign:'center',
        fontWeight: '600',
        fontSize: 16,
    },
    right: {
        flex: 2,
    },
})

export default Header

import React, { useEffect } from 'react'
import {
    StyleSheet,
    Dimensions,
    Animated,
    Easing,
    Image,
    View,
} from 'react-native'

import {
    app_logo
} from '../constant/images'

const deviceWidth = Dimensions.get('window').width

const LogoBox = () => {

    let rotateValueHandler = new Animated.Value(0)
    const rotateData = rotateValueHandler.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const startRotateImageFunction = () => {
        rotateValueHandler.setValue(0)
        Animated.timing(rotateValueHandler, {
            toValue: 1,
            duration: 10000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start(() => startRotateImageFunction())
    }

    useEffect(() => {
        startRotateImageFunction();
    }, [])

    return (
        <View style={styles.logoBox}>
            <Animated.Image
                source={app_logo}
                style={[styles.logo, { transform: [{ rotate: rotateData }] }]} resizeMode="cover"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logoBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: deviceWidth,
        flex: 1,
    },
    logo: {
        height: deviceWidth * 0.3,
        width: deviceWidth * 0.3,
        alignSelf: 'center',
    },
})

export default LogoBox

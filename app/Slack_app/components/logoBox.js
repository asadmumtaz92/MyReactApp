import React, { useEffect } from 'react'
import {
    Animated,
    Easing,
    Image,
    View,
} from 'react-native'
import { gStyles } from "../styles/globle"

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
        <View style={gStyles.logoBox}>
            <Animated.Image
                source={require('../../assets/slack/app_logo.jpg')}
                style={[gStyles.logo, { transform: [{ rotate: rotateData }] }]} resizeMode="cover"
            />
        </View>
    )
}

export default LogoBox

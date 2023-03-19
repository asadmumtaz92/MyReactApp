import React, { useState, useLayoutEffect } from "react"
import {
    KeyboardAvoidingView,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    TextInput,
    StatusBar,
    Keyboard,
    Platform,
    Image,
    Alert,
    View,
    Text,
} from "react-native"

import { Colors } from "../styles/color"
import { gStyles } from "./styles/globle"

import {
    bgCover,
    at_sign,
    lock_sign
} from './constant/images'

const Slack_App = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            // headerLeft: () => {
            //     return (
            //         <Text style={gStyles.navBtnText}>{``}</Text>
            //     )
            // },
            headerRight: () => {
                return (
                    <TouchableOpacity
                        onPress={() => registerHandler()} style={gStyles.navBtn} activeOpacity={0.9}
                    >
                        <Text style={gStyles.navBtnText}>{`REGISTER`}</Text>
                    </TouchableOpacity>
                )
            },
        })
    }, [navigation])

    const emailHandler = (text) => {
        setEmail(text)
    }
    const passwordHandler = (text) => {
        setPassword(text)
    }

    const loginHandler = () => {
        if (!email.length || !password.length) {
            Alert.alert('Warnging Message', '\nPlease enter email & Password first!');
        }
        else {
            console.log('Email: ',email,' Password: ', password)
            Keyboard.dismiss()
            setTimeout(() => {
                navigation.navigate('Home')
            }, 2000)
        }
    }
    const forgotHandler = () => {
        navigation.navigate('Forgot')
    }
    const registerHandler = () => {
        navigation.navigate('Register')
    }

    return (
        <ImageBackground source={bgCover} style={gStyles.bgCover}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.buttonColor}
                barStyle='light-content'
            />

            <KeyboardAvoidingView style={gStyles.bgCover}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <View style={gStyles.bottomView}>

                    {/* HEADING */}
                    <Text style={gStyles.heading}>
                        {`Welcome Back`}
                    </Text>

                    {/* EMAIL */}
                    <View style={gStyles.ipItem}>
                        <Image
                            source={at_sign}
                            style={gStyles.icon} resizeMode='contain'
                        />
                        <TextInput
                            placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                            onChangeText={(text) => emailHandler(text)}
                            onSubmitEditing={() => Keyboard.dismiss}
                            selectionColor={Colors.selectionColor}
                            onBlur={() => Keyboard.dismiss}
                            keyboardType='email-address'
                            selectTextOnFocus={false}
                            placeholder="YOUR E-MAIL"
                            autoCapitalize='none'
                            autoCorrect={false}
                            spellCheck={false}
                            style={gStyles.ip}
                            autoFocus={false}
                            numberOfLines={1}
                            multiline={false}
                            inputMode='email'
                            maxLength={200}
                            value={email}
                        />
                    </View>

                    {/* PASSWORD */}
                    <View style={gStyles.ipItem}>
                        <Image
                            source={lock_sign}
                            style={gStyles.icon} resizeMode='contain'
                        />
                        <TextInput
                            placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                            onChangeText={(text) => passwordHandler(text)}
                            onSubmitEditing={() => Keyboard.dismiss}
                            selectionColor={Colors.selectionColor}
                            onBlur={() => Keyboard.dismiss}
                            keyboardType='email-address'
                            selectTextOnFocus={false}
                            placeholder="PASSWORD"
                            secureTextEntry={true}
                            autoCapitalize='none'
                            autoCorrect={false}
                            spellCheck={false}
                            style={gStyles.ip}
                            autoFocus={false}
                            numberOfLines={1}
                            multiline={false}
                            inputMode='email'
                            value={password}
                            maxLength={200}
                        />
                    </View>

                    {/* LOG IN */}
                    <TouchableOpacity
                        onPress={() => loginHandler()} style={gStyles.largeBtn} activeOpacity={0.9}
                    >
                        <Text style={gStyles.largeBtnText}>{`LOG IN`}</Text>
                    </TouchableOpacity>

                    {/* FORGOT */}
                    <TouchableOpacity
                        onPress={() => forgotHandler()} style={styles.forgotBtn} activeOpacity={0.9}
                    >
                        <Text style={styles.forgotText}>{`Forgot Password`}</Text>
                    </TouchableOpacity>

                    {/* REGISTER NEW */}
                    <>
                        {/* <View style={styles.regBox}>
                                <Text style={gStyles.text}>
                                    {`Have no account yet?`}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => registerHandler() } style={styles.regBtn} activeOpacity={0.9}
                                >
                                    <Text style={styles.regText}>
                                        {`REGISTER`}
                                    </Text>
                                </TouchableOpacity>
                            </View> */}
                    </>

                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles =  StyleSheet.create({
    forgotBtn: { 
        borderBottomColor: Colors.buttonColor,
        borderBottomWidth: 1,
        alignSelf: 'flex-end',
        paddingBottom: 1,
        marginTop: 10,
    },
    forgotText: {
        color: Colors.buttonColor,
        alignSelf: 'flex-end',
        letterSpacing: 0.3,
        fontWeight: '500',
        fontSize: 17,
    },

    regBox: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
    regBtn: {
        backgroundColor: Colors.buttonColor,
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 5,
        marginLeft: 10,
    },
    regText: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: 14,
    },
})

export default Slack_App

import React, { useState, useLayoutEffect } from "react";
import {
    KeyboardAvoidingView,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    StatusBar,
    TextInput,
    Keyboard,
    Platform,
    Image,
    Alert,
    View,
    Text,
} from "react-native";

import { Colors } from "../styles/color"
import { gStyles } from "./styles/globle"

import {
    bgCover,
    at_sign,
    lock_sign,
    user_sign,
} from './constant/images'

const Register = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullname] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <Text style={gStyles.navBtnText}>{``}</Text>
                )
            },
            headerRight: () => {
                return (
                    <TouchableOpacity
                        onPress={() => loginHandler()} style={gStyles.navBtn} activeOpacity={0.9}
                    >
                        <Text style={gStyles.navBtnText}>{`LOG IN`}</Text>
                    </TouchableOpacity>
                )
            },
        })
    }, [navigation])

    const loginHandler = () => {
        navigation.navigate('Login')
    }

    const emailHandler = (text) => {
        setEmail(text)
    }
    const passwordHandler = (text) => {
        setPassword(text)
    }
    const fullnameHandler = (text) => {
        setFullname(text)
    }
    
    const registerHandler = () => {
        if (!email.length || !password.length || !fullname.length) {
            Alert.alert('Warnging Message', '\nPlease Enter Email, Password & Full Name First!')
        }
        else {
            Keyboard.dismiss();
        }
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
                        {`Register New Account`}
                    </Text>

                    {/* EMAIL */}
                    <View style={gStyles.ipItem}>
                        <Image
                            source={at_sign}
                            style={gStyles.icon} esizeMode='contain'
                        />
                        <TextInput
                            placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                            onChangeText={(text) => emailHandler(text)}
                            onSubmitEditing={() => Keyboard.dismiss}
                            selectionColor={Colors.selectionColor}
                            onBlur={() => Keyboard.dismiss}
                            keyboardType='email-address'
                            placeholder="YOUR E-MAIL"
                            selectTextOnFocus={false}
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
                            selectTextOnFocus={false}
                            placeholder="PASSWORD"
                            secureTextEntry={true}
                            keyboardType='default'
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={gStyles.ip}
                            spellCheck={false}
                            autoFocus={false}
                            numberOfLines={1}
                            multiline={false}
                            value={password}
                            inputMode='text'
                            maxLength={200}
                        />
                    </View>

                    {/* FULL NAME */}
                    <View style={gStyles.ipItem}>
                        <Image
                            source={user_sign}
                            style={[gStyles.icon, {opacity:0.6}]} esizeMode='contain'
                        />
                        <TextInput
                            placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                            onChangeText={(text) => fullnameHandler(text)}
                            onSubmitEditing={() => Keyboard.dismiss}
                            selectionColor={Colors.selectionColor}
                            onBlur={() => Keyboard.dismiss}
                            placeholder="FULL NAME"
                            selectTextOnFocus={false}
                            keyboardType='default'
                            autoCapitalize='words'
                            autoCorrect={false}
                            style={gStyles.ip}
                            spellCheck={false}
                            autoFocus={false}
                            numberOfLines={1}
                            multiline={false}
                            inputMode='text'
                            value={fullname}
                            maxLength={200}
                        />
                    </View>

                    {/* REGISTER */}
                    <TouchableOpacity
                        onPress={() => registerHandler()} style={gStyles.largeBtn} activeOpacity={0.9}
                    >
                        <Text style={gStyles.largeBtnText}>{`REGISTER`}</Text>
                    </TouchableOpacity>

                    {/* LOG IN */}
                    <>
                        {/* <View style={styles.regBox}>
                            <Text style={styles.text}>
                                {`You have already account.`}
                            </Text>
                            <TouchableOpacity
                                onPress={() => registerHandler()} style={styles.regBtn} activeOpacity={0.9}
                            >
                                <Text style={styles.regText}>{`LOG IN`}</Text>
                            </TouchableOpacity>
                        </View> */}
                    </>

                    {/* NOTE */}
                    <Text style={styles.text}>
                        <Text style={styles.note}>{`Note: `}</Text>
                        {`Please enter valid email, password & full name, After submit check your email for varification.`}
                    </Text>

                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
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

    text: {
        color: Colors.buttonColor,
        marginHorizontal: 5,
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: 18,
        fontSize: 15.4,
        marginTop: 10,
    },
    note: {
        fontWeight: '700',
        lineHeight: 25,
        fontSize: 20,
    },
})

export default Register

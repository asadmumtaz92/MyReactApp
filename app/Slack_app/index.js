import React, { useState, useLayoutEffect, useEffect } from "react"
import {
    KeyboardAvoidingView,
    TouchableOpacity,
    StyleSheet,
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

import LogoBox from "./components/logoBox"

const Slack_App = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
            navigation.navigate('Home')
        }
    }
    const forgotHandler = () => {
        navigation.navigate('Forgot')
    }
    const registerHandler = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={gStyles.container}>

            <KeyboardAvoidingView style={{ flex:1 }}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <LogoBox />

                <View style={gStyles.bottomView}>

                    <Text style={gStyles.heading}>
                        {`Welcome Back`}
                    </Text>

                    {/* EMAIL */}
                    <View style={gStyles.ipItem}>
                        <Image
                            source={require('../assets/slack/username.jpg')}
                            style={gStyles.icon}
                            resizeMode='contain'
                        />
                        <TextInput
                            placeholderTextColor={Colors.inputplaceholder}
                            onChangeText={(text) => emailHandler(text)}
                            onSubmitEditing={() => Keyboard.dismiss}
                            selectionColor={Colors.selectionColor}
                            onBlur={() => Keyboard.dismiss}
                            selectTextOnFocus={false}
                            placeholder="YOUR E-MAIL"
                            keyboardType='default'
                            autoCapitalize='none'
                            autoCorrect={false}
                            spellCheck={false}
                            style={gStyles.ip}
                            autoFocus={false}
                            numberOfLines={1}
                            multiline={false}
                            inputMode='text'
                            maxLength={200}
                            value={email}
                        />
                    </View>

                    {/* PASSWORD */}
                    <View style={gStyles.ipItem}>
                        <Image
                            source={require('../assets/slack/password.png')}
                            style={[gStyles.icon, {marginHorizontal:5, height: 20, width: 20}]}
                            resizeMode='contain'
                        />
                        <TextInput
                            placeholderTextColor={Colors.inputplaceholder}
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
                            spellCheck={false}
                            style={gStyles.ip}
                            autoFocus={false}
                            numberOfLines={1}
                            multiline={false}
                            value={password}
                            inputMode='text'
                            maxLength={200}
                        />
                    </View>

                    {/* LOG IN */}
                    <TouchableOpacity
                        onPress={() => loginHandler()} style={gStyles.smallBtn} activeOpacity={0.9} 
                    >
                        <Text style={gStyles.smallBtnText}>{`LOG IN`}</Text>
                    </TouchableOpacity>

                    {/* FORGOT */}
                    <TouchableOpacity
                        onPress={() => forgotHandler() } style={styles.forgotBtn} activeOpacity={0.9} 
                    >
                        <Text style={styles.forgotText}>{`Forgot Password`}</Text>
                    </TouchableOpacity>

                    {/* REGISTER */}
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
        </View>
    )
}

const styles =  StyleSheet.create({
    forgotBtn: { 
        alignSelf: 'flex-end', // center
        marginTop: 20,
        // width: '60%',
    },
    forgotText: {
        textDecorationLine: 'underline',
        color: Colors.buttonColor,
        alignSelf: 'flex-end', // center
        letterSpacing: 0.8,
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

    rotateImage: {
        transform: [{ rotate: '90deg' }]
    }
})

export default Slack_App

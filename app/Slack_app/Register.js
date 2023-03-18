import React, { useState, useLayoutEffect } from "react";
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

const Register = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [company, setCompany] = useState('')

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
        navigation.navigate('SlackApp')
    }

    const emailHandler = (text) => {
        setEmail(text)
    }
    const passwordHandler = (text) => {
        setPassword(text)
    }
    const companyHandler = (text) => {
        setCompany(text)
    }
    
    const registerHandler = () => {
        if (!email.length || !password.length || !company.length) {
            Alert.alert('Warnging Message', '\nPlease enter email, Password & company name first!')
        }
        else {
            Keyboard.dismiss();
        }
    }

    return (
        <View style={gStyles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <LogoBox />

                <View style={gStyles.bottomView}>

                    <Text style={gStyles.heading}>
                        {`Register New Account`}
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
                            placeholder="YOUR E-MAIL"
                            selectTextOnFocus={false}
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
                            style={[gStyles.icon, { marginHorizontal: 5, height: 20, width: 20 }]}
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

                    {/* Company */}
                    <View style={gStyles.ipItem}>
                        <Image
                            source={require('../assets/slack/company.jpg')}
                            style={[gStyles.icon, { marginHorizontal: 5, height: 20, width: 20, opacity: 0.7 }]}
                            resizeMode='contain'
                        />
                        <TextInput
                            placeholderTextColor={Colors.inputplaceholder}
                            onChangeText={(text) => companyHandler(text)}
                            onSubmitEditing={() => Keyboard.dismiss}
                            selectionColor={Colors.selectionColor}
                            onBlur={() => Keyboard.dismiss}
                            placeholder="COMPANY NAME"
                            selectTextOnFocus={false}
                            secureTextEntry={true}
                            keyboardType='default'
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={gStyles.ip}
                            spellCheck={false}
                            autoFocus={false}
                            numberOfLines={1}
                            multiline={false}
                            inputMode='text'
                            value={company}
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
                        <Text style={styles.note}>{`Note:  `}</Text>
                        {`Please enter valid email, password & after submit check your email for varification.`}
                    </Text>

                </View>
            </KeyboardAvoidingView>
        </View>
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
        lineHeight: 20,
        marginTop: 25,
        fontSize: 16,
    },
    note: {
        fontWeight: '700',
        lineHeight: 25,
        fontSize: 20,
    },
})

export default Register

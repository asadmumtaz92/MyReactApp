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
} from "react-native"

import { Colors } from "../styles/color"
import { gStyles } from "./styles/globle"
import {
    bgCover,
    at_sign,
} from './constant/images'

const Forgot = ({ navigation }) => {

    const [email, setEmail] = useState('')

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
    const forgotHandler = () => {
        if (!email.length ) {
            Alert.alert('Warnging Message', '\nPlease enter email first!')
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
                        {`Forgot Password`}
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

                    {/* SUBMIT */}
                    <TouchableOpacity
                        onPress={() => forgotHandler()} style={gStyles.largeBtn} activeOpacity={0.9}
                    >
                        <Text style={gStyles.largeBtnText}>{`SUBMIT`}</Text>
                    </TouchableOpacity>

                    {/* NOTE */}
                    <Text style={styles.text}>
                        <Text style={styles.note}>{`Note:  `}</Text>
                        {`Please enter your registered email & after submit check your email for varification.`}
                    </Text>

                </View>
            </KeyboardAvoidingView>
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    text: {
        color: Colors.buttonColor,
        marginHorizontal: 5,
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: 20,
        marginTop: 10,
        fontSize: 16,
    },
    note: {
        fontWeight: '700',
        lineHeight: 25,
        fontSize: 20,
    },
})

export default Forgot

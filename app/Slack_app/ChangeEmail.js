import React, { useState, useLayoutEffect } from "react"
import {
    KeyboardAvoidingView,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    TextInput,
    Keyboard,
    Image,
    View,
    Text,
} from "react-native"

import { Colors } from "../styles/color"
import { gStyles } from "./styles/globle"

import LogoBox from './components/logoBox'

import {
    back_sign,
    at_sign
} from './constant/images'

const ChangeEmail = ({ navigation }) => {

    const [newEmail, setNewEmail] = useState('')
    const [prevEmail, setPrevEmail] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            // headerRight: () => {
            //     return (
            //         <TouchableOpacity
            //             onPress={() => chnageEmailHandler()} activeOpacity={0.9}
            //             style={gStyles.navBtn}
            //         >
            //             <Text style={gStyles.navBtnText}>{`SAVE`}</Text>
            //         </TouchableOpacity>
            //     )
            // },
            headerLeft: () => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()} activeOpacity={0.9}
                        style={[gStyles.navBtn, styles.nav]}
                    >
                        <Image
                            source={back_sign} resizeMode='cover' style={styles.navImg}
                        />
                        <Text style={[gStyles.navBtnText, { fontSize: 16, }]}>{`BACK`}</Text>
                    </TouchableOpacity>
                )
            },
        })
    }, [navigation])

    const newEmailHandler = (text) => {
        setNewEmail(text)
    }
    const prevEmailHandler = (text) => {
        setPrevEmail(text)
    }

    const changeEmailHandler = () => {
        Keyboard.dismiss();
        console.log(
            'Old: ', prevEmail,
            '\nNew: ', newEmail
        )
    }

    return (
        <View style={gStyles.container}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.buttonColor}
                barStyle='light-content'
            />
            
            <LogoBox />

            <KeyboardAvoidingView style={{ justifyContent: 'flex-end' }}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <View style={gStyles.bottomView}>

                    {/* HEADING */}
                    <Text style={gStyles.heading}>
                        {`Change Email`}
                    </Text>

                    {/* PREVIOUS EMAIL */}
                    <View style={gStyles.ipItem}>
                        <Image
                            source={at_sign} style={gStyles.icon} resizeMode='contain'
                        />
                        <TextInput
                            placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                            onChangeText={(text) => prevEmailHandler(text)}
                            onSubmitEditing={() => Keyboard.dismiss}
                            selectionColor={Colors.selectionColor}
                            onBlur={() => Keyboard.dismiss}
                            placeholder='PREVIOUS E-MAIL'
                            keyboardType='email-address'
                            selectTextOnFocus={false}
                            autoCapitalize='none'
                            autoCorrect={false}
                            spellCheck={false}
                            style={gStyles.ip}
                            autoFocus={false}
                            numberOfLines={1}
                            multiline={false}
                            inputMode='email'
                            value={prevEmail}
                            maxLength={200}
                        />
                    </View>

                    {/* NEW EMAIL */}
                    <View style={gStyles.ipItem}>
                        <Image
                            source={at_sign} style={gStyles.icon} resizeMode='contain'
                        />
                        <TextInput
                            placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                            onChangeText={(text) => newEmailHandler(text)}
                            onSubmitEditing={() => Keyboard.dismiss}
                            selectionColor={Colors.selectionColor}
                            onBlur={() => Keyboard.dismiss}
                            keyboardType='email-address'
                            selectTextOnFocus={false}
                            placeholder='NEW E-MAIL'
                            autoCapitalize='none'
                            autoCorrect={false}
                            spellCheck={false}
                            style={gStyles.ip}
                            autoFocus={false}
                            numberOfLines={1}
                            multiline={false}
                            inputMode='email'
                            value={newEmail}
                            maxLength={200}
                        />
                    </View>

                    {/* SUBMIT */}
                    <TouchableOpacity
                        onPress={() => changeEmailHandler()} style={gStyles.largeBtn} activeOpacity={0.9}
                    >
                        <Text style={gStyles.largeBtnText}>{`SUBMIT`}</Text>
                    </TouchableOpacity>

                    {/* NOTE */}
                    <Text style={styles.text}>
                        <Text style={styles.note}>{`Note:  `}</Text>
                        {`Please enter your registered & new email. After submit check your email for varification.`}
                    </Text>

                </View>
                
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 0,
    },
    navImg: {
        marginRight: 2,
        height: 14,
        width: 14,
    },

    text: {
        color: Colors.buttonColor,
        marginHorizontal: 2,
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: 20,
        marginTop: 20,
        fontSize: 16,
    },
    note: {
        fontWeight: '700',
        lineHeight: 25,
        fontSize: 20,
    },
})

export default ChangeEmail

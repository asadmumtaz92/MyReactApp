import React, { useState } from "react"
import {
    KeyboardAvoidingView,
    ActivityIndicator,
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
    at_sign,
} from './constant/images'

import CustomModal from './utlz/CustomModal'

const ChangeEmail = ({ navigation }) => {

    const [newEmail, setNewEmail] = useState('')
    const [prevEmail, setPrevEmail] = useState('')
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [succes, setSucces] = useState(false)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const newEmailHandler = (text) => {
        setNewEmail(text)
    }
    const prevEmailHandler = (text) => {
        setPrevEmail(text)
    }
    const profileHandler = () => {
        navigation.navigate('MPW_Profile')
    }

    const changeEmailHandler = () => {
        setLoader(true)
        Keyboard.dismiss()
        console.log('Old: ', prevEmail, '\nNew: ', newEmail)

        if (!prevEmail.length || !newEmail.length) {
            setTimeout(() => {
                setTitle('Error Message')
                setDesc('Please enter valid current & new email first!')
                setError(true)
            }, 1000)
        }
        else {
            // console.log('Email: ', email)
            // try {
            //     fetch(`${API}/login`, {
            //         method: 'POST',
            //         body: JSON.stringify({
            //             email: email,
            //             password: password,
            //         }),
            //         headers: {
            //             'Content-type': 'application/json',
            //         },
            //     })
            //         .then(response => response.json())
            //         .then(response => {
            //             if (!response['errors']) {
            //                 console.log('User login Successfully!') // console.log('L85: ', response.success.token)
            //                 // if (response.success.token.length > 0) {
            //                 //     navigation.navigate('Reservations', {
            //                 //         token: response.success.token,
            //                 //     })
            //                 //     storeUserToken(response.success.token)
            //                 // }
            //                 setTimeout(() => {
            //                     setLoader(false)
            //                     navigation.navigate('Home')
            //                 }, 2000)
            //             }
            //         })
            //         .catch(error => {
            //             console.log('Login API Error: ', error)

            //             setTitle('Login Error')
            //             let tt = `Enter valid Email & Password...! ${error}`
            //             let er = error
            //             setDesc(tt)
            //             setError(true)
            //         })
            // } catch (err) {
            //     console.log('Login Try Catch Error: ', err)
            // }

            setTimeout(() => {
                setTitle('Success Message')
                setDesc(`Your email has been changed successfully!`)
                setSucces(true)
            }, 1000)
        }
    }

    const leftClickAble = () => {
        setSucces(false)

        setLoader(false)
        setTimeout(() => {
            profileHandler()
        }, 200)
    }

    return (
        <View style={gStyles.container}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.buttonColor}
                barStyle='light-content'
                StatusBarAnimation='fade'
            />

            <LogoBox />

            <KeyboardAvoidingView style={{ justifyContent: 'flex-end' }} behavior={Platform.OS == 'ios' ? 'padding' : 'height'} >
                <View style={gStyles.bottomView}>

                    {/* HEADING */}
                    <Text style={gStyles.heading}>{`CHANGE  EMAIL`}</Text>

                    {/* CURRENT EMAIL */}
                    <View style={gStyles.ipItem}>
                        <Image source={at_sign} style={gStyles.icon} resizeMode='contain' />
                        <TextInput
                            placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                            onChangeText={(text) => prevEmailHandler(text)}
                            onSubmitEditing={() => Keyboard.dismiss}
                            selectionColor={Colors.selectionColor}
                            onBlur={() => Keyboard.dismiss}
                            placeholder='CURRENT E-MAIL'
                            keyboardType='email-address'
                            selectTextOnFocus={false}
                            autoCapitalize='none'
                            autoCorrect={false}
                            spellCheck={false}
                            style={gStyles.ip}
                            autoFocus={false}
                            numberOfLines={1}
                            multiline={false}
                            value={prevEmail}
                            inputMode='email'
                            maxLength={200}
                        />
                    </View>

                    {/* NEW EMAIL */}
                    <View style={gStyles.ipItem}>
                        <Image source={at_sign} style={gStyles.icon} resizeMode='contain' />
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
                        disabled={loader ? true : false} activeOpacity={0.9}
                        onPress={() => changeEmailHandler()} style={gStyles.largeBtn}
                    >
                        {loader
                            ? <ActivityIndicator size={'small'} color={Colors.white} />
                            : <Text style={gStyles.largeBtnText}>{`SUBMIT`}</Text>
                        }
                    </TouchableOpacity>

                    {/* NOTE */}
                    <Text style={styles.text}>
                        <Text style={styles.note}>{`Note:  `}</Text>
                        {`Please enter your registered & new email. After submit check your email for varification.`}
                    </Text>

                </View>

                {/* MODAL FOR ERROR */}
                <>
                    {error &&
                        <CustomModal
                            title={title}
                            desc={desc}

                            clickAbleRight={() => {
                                setError(false)
                                setLoader(false)
                            }}
                            buttonRightText='ok'
                            // buttonRightStyle={{}}
                            // buttonRightTextStyle={{}}

                            // clickAbleLeft={() => { setLoader(false) }}
                            // buttonLeftText='no'
                            // buttonLeftStyle={{}}
                            // buttonLeftTextStyle={{}}

                            // image={lock_sign}
                            // imageStyle={{ width: 30, height: 30 }}
                        />
                    }
                </>

                {/* MODAL FOR SUCCESS */}
                <>
                    {succes &&
                        <CustomModal
                            title={title}
                            desc={desc}

                            clickAbleRight={leftClickAble}
                            buttonRightText='ok'
                            // buttonRightStyle={{}}
                            // buttonRightTextStyle={{}}

                            // clickAbleLeft={() => { setLoader(false) }}
                            // buttonLeftText='no'
                            // buttonLeftStyle={{}}
                            // buttonLeftTextStyle={{}}

                            // image={lock_sign}
                            // imageStyle={{ width: 30, height: 30 }}
                        />
                    }
                </>

            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    note: {
        fontWeight: '700',
        lineHeight: 25,
        fontSize: 20,
    },
    text: {
        color: Colors.buttonColor,
        marginHorizontal: 0,
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: 20,
        marginTop: 10,
        fontSize: 16,
    },
})

export default ChangeEmail

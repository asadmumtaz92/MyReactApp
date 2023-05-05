import React, { useState, useLayoutEffect, useEffect } from "react"
import {
    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    TextInput,
    StatusBar,
    Keyboard,
    Platform,
    Image,
    View,
    Text,
} from "react-native"

import { Colors } from "../styles/color"
import { gStyles } from "./styles/globle"

import {
    bgCover,
    at_sign,
    lock_sign,
    splash
} from './constant/images'

import CustomModal from './utlz/CustomModal'

const MyPerfectWords = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [splashShow, setSplashShow] = useState(true)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity
                        disabled={loader ? true : false}
                        onPress={() => registerHandler()} style={gStyles.navBtn} activeOpacity={0.9}
                    >
                        <Text style={gStyles.navBtnText}>{`REGISTER`}</Text>
                    </TouchableOpacity>
                )
            },
            
        })
    }, [navigation, loader])

    const emailHandler = (text) => {
        setEmail(text)
    }
    const passwordHandler = (text) => {
        setPassword(text)
    }
    const loginHandler = () => {
        setLoader(true)
        Keyboard.dismiss()

        if (!email.length || !password.length) {
            setTimeout(() => {
                setTitle('Login Error')
                setDesc('Please enter valid email and password first!')
                setError(true)
            }, 1000)
        }
        else {
            console.log('Email: ', email, '\nPassword: ', password)
            setTimeout(() => {
                setLoader(false)
                navigation.navigate('MPW_Home')
            }, 2000)

            // if (email == 'asadmumtaz92@gmail.com' && password === 'Qwerty@123') {
            //     setTimeout(() => {
            //         setLoader(false)
            //         navigation.navigate('MPW_Home')
            //     }, 2000)
            // }
            // else {
            //     setTimeout(() => {
            //         setTitle('Login Error')
            //         setDesc('Please enter the valid credentials!')
            //         setError(true)
            //     }, 1000)
            // }

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

            // setTimeout(() => {
            //     setLoader(false)
            //     navigation.navigate('Home')
            // }, 2000)
        }
    }
    const forgotHandler = () => {
        navigation.navigate('MPW_Forgot')
    }
    const registerHandler = () => {
        navigation.navigate('MPW_Register')
    }
    useEffect(() => {
        setTimeout(() => {
            navigation.setOptions({
                headerShown: true,
            })
            setSplashShow(false)
        }, 2000);
    },[])

    return (
        <>
            <StatusBar
                backgroundColor={Colors.buttonColor}
                StatusBarAnimation='fade'
                barStyle='light-content'
                animated={true}
                hidden={false}
            />
            {splashShow
                ? <ImageBackground source={splash} style={{ flex: 1 }} />
                : <ImageBackground source={bgCover} style={gStyles.bgCover}>
                    <KeyboardAvoidingView style={gStyles.bgCover} behavior={Platform.OS == 'ios' ? 'position' : loader ? 'position' : 'height'}>
                        <View style={gStyles.bottomView}>

                            {/* HEADING */}
                            <Text style={gStyles.heading}>{`WELCOME  BACK`}</Text>

                            {/* EMAIL */}
                            <View style={gStyles.ipItem}>
                                <Image source={at_sign} style={gStyles.icon} resizeMode='contain' />
                                <TextInput
                                    placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                                    onChangeText={(text) => emailHandler(text)}
                                    onSubmitEditing={() => {
                                        if (email.length > 5 && password.length > 4) {
                                            loginHandler()
                                        }
                                        Keyboard.dismiss()
                                    }}
                                    selectionColor={Colors.selectionColor}
                                    onBlur={() => Keyboard.dismiss}
                                    keyboardType='email-address'
                                    selectTextOnFocus={false}
                                    autoCapitalize='none'
                                    placeholder='E-MAIL'
                                    autoCorrect={false}
                                    style={gStyles.ip}
                                    spellCheck={false}
                                    numberOfLines={1}
                                    autoFocus={false}
                                    multiline={false}
                                    inputMode='email'
                                    maxLength={200}
                                    value={email}
                                />
                            </View>

                            {/* PASSWORD */}
                            <View style={gStyles.ipItem}>
                                <Image source={lock_sign} style={gStyles.icon} resizeMode='contain' />
                                <TextInput
                                    placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                                    onChangeText={(text) => passwordHandler(text)}
                                    onSubmitEditing={() => {
                                        if (email.length > 5 && password.length > 4) {
                                            loginHandler()
                                        }
                                        Keyboard.dismiss()
                                    }}
                                    selectionColor={Colors.selectionColor}
                                    onBlur={() => Keyboard.dismiss}
                                    keyboardType='email-address'
                                    selectTextOnFocus={false}
                                    secureTextEntry={true}
                                    placeholder='PASSWORD'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    style={gStyles.ip}
                                    spellCheck={false}
                                    autoFocus={false}
                                    numberOfLines={1}
                                    multiline={false}
                                    value={password}
                                    inputMode='none'
                                    maxLength={200}
                                />
                            </View>

                            {/* LOG IN */}
                            <TouchableOpacity
                                disabled={loader ? true : false} activeOpacity={0.9}
                                onPress={() => loginHandler()} style={gStyles.largeBtn}
                            >
                                {loader
                                    ? <ActivityIndicator size={'small'} color={Colors.white} />
                                    : <Text style={gStyles.largeBtnText}>{`LOG IN`}</Text>
                                }
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
                                        <Text style={gStyles.text}>{`Have no account yet?`}</Text>
                                        <TouchableOpacity
                                            onPress={() => registerHandler() }
                                            style={styles.regBtn} activeOpacity={0.9}
                                        >
                                            <Text style={styles.regText}>{`REGISTER`}</Text>
                                        </TouchableOpacity>
                                    </View> */}
                            </>
                        </View>

                        {/* MODAL FOR LOGIN ERROR */}
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
                    </KeyboardAvoidingView>
                </ImageBackground>
            }
        </>
    )
}

const styles = StyleSheet.create({
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
        fontSize: 16,
    },

    // regBox: {
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     flexDirection: 'row',
    //     marginTop: 30,
    // },
    // regBtn: {
    //     backgroundColor: Colors.buttonColor,
    //     paddingHorizontal: 12,
    //     paddingVertical: 7,
    //     borderRadius: 5,
    //     marginLeft: 10,
    // },
    // regText: {
    //     color: Colors.white,
    //     fontWeight: '600',
    //     fontSize: 14,
    // },
})

export default MyPerfectWords

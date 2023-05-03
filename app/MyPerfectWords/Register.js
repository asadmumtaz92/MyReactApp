import React, { useState, useLayoutEffect } from "react"
import {
    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    StatusBar,
    TextInput,
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
    user_sign,
} from './constant/images'

import CustomModal from './utlz/CustomModal'

const Register = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullname] = useState('')
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [succes, setSucces] = useState(false)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity
                        disabled={loader ? true : false}
                        onPress={() => loginHandler()} style={gStyles.navBtn} activeOpacity={0.9}
                    >
                        <Text style={gStyles.navBtnText}>{`LOG IN`}</Text>
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
    const fullnameHandler = (text) => {
        setFullname(text)
    }
    const loginHandler = () => {
        navigation.navigate('MPW_Login')
    }

    const registerHandler = () => {
        setLoader(true)
        Keyboard.dismiss()

        if (!email.length || !password.length || !fullname.length) {
            setTimeout(() => {
                setTitle('Register Error')
                setDesc('Please enter valid email, password & full name first!')
                setError(true)
            }, 1000)
        }
        else {
            console.log('Fullname: ', fullname, '\nEmail: ', email, '\nPassword: ', password)
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
                setDesc('Your account successfully created!')
                setSucces(true)
            }, 1000)
        }
    }

    const leftClickAble = () => {
        setSucces(false)

        setLoader(false)
        setTimeout(() => {
            loginHandler()
        }, 200)
    }

    return (
        <ImageBackground source={bgCover} style={gStyles.bgCover}>
            <StatusBar
                backgroundColor={Colors.buttonColor}
                statusBarAnimation='fade'
                barStyle='light-content'
                animated={true}
                hidden={false}
            />

            <KeyboardAvoidingView style={gStyles.bgCover}
                behavior={Platform.OS == 'ios' ? 'position' : loader ? 'position' : 'height'}
            >
                <View style={gStyles.bottomView}>

                    {/* HEADING */}
                    <Text style={gStyles.heading}>{`REGISTER  NEW  USER`}</Text>

                    {/* EMAIL */}
                    <View style={gStyles.ipItem}>
                        <Image source={at_sign} style={gStyles.icon} esizeMode='contain' />
                        <TextInput
                            placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                            onChangeText={(text) => emailHandler(text)}
                            onSubmitEditing={() => Keyboard.dismiss}
                            selectionColor={Colors.selectionColor}
                            onBlur={() => Keyboard.dismiss}
                            keyboardType='email-address'
                            selectTextOnFocus={false}
                            autoCapitalize='none'
                            placeholder='E-MAIL'
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
                        <Image source={lock_sign} style={gStyles.icon} resizeMode='contain' />
                        <TextInput
                            placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                            onChangeText={(text) => passwordHandler(text)}
                            onSubmitEditing={() => Keyboard.dismiss}
                            selectionColor={Colors.selectionColor}
                            onBlur={() => Keyboard.dismiss}
                            selectTextOnFocus={false}
                            secureTextEntry={true}
                            placeholder='PASSWORD'
                            keyboardType='default'
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

                    {/* FULL NAME */}
                    <View style={gStyles.ipItem}>
                        <Image source={user_sign} style={[gStyles.icon, { opacity: 0.6 }]} esizeMode='contain' />
                        <TextInput
                            placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                            onChangeText={(text) => fullnameHandler(text)}
                            onSubmitEditing={() => Keyboard.dismiss}
                            selectionColor={Colors.selectionColor}
                            onBlur={() => Keyboard.dismiss}
                            selectTextOnFocus={false}
                            placeholder='FULL NAME'
                            keyboardType='default'
                            autoCapitalize='words'
                            autoCorrect={false}
                            style={gStyles.ip}
                            spellCheck={false}
                            autoFocus={false}
                            numberOfLines={1}
                            multiline={false}
                            value={fullname}
                            inputMode='text'
                            maxLength={200}
                        />
                    </View>

                    {/* REGISTER */}
                    <TouchableOpacity
                        disabled={loader ? true : false} activeOpacity={0.9}
                        onPress={() => registerHandler()} style={gStyles.largeBtn}
                    >
                        {loader
                            ? <ActivityIndicator size={'small'} color={Colors.white} />
                            : <Text style={gStyles.largeBtnText}>{`REGISTER`}</Text>
                        }
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
                        {`Please enter valid email, password & full name. After submit check your email for varification.`}
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

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
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
        lineHeight: 18,
        fontSize: 15.4,
        marginTop: 10,
    },
})

export default Register

import React, { useState } from 'react'
import {
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TextInput,
    StatusBar,
    Keyboard,
    Alert,
    View,
} from 'react-native'

import { gStyles } from '../styles/globalStyle.js'
import { Colors } from '../styles/color.js'

import MyButton from './ui/MyButton.js'
import Title from './ui/Title'

const StartGameScreen = ({ pickedNumber }) => {

    const [enteredNumber, setEnteredNumber] = useState(null)

    // STORE NUMBER
    const numberInputHandler = (enteredNumber) => {
        setEnteredNumber(enteredNumber)
    }
    // RESET INPUT FEILD
    const resetGame = () => {
        setEnteredNumber(null)
    }

    const confirmGame = () => {
        const num = parseInt(enteredNumber)
        Keyboard.dismiss

        if (isNaN(num) || num < 1 || num > 99) {
            Alert.alert(
                'Invalid Number!',
                '\nNumber has to be a number between 0 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetGame}]
            )
            return;
        }
        else {
            pickedNumber(enteredNumber)
        }
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle='dark-content' />
            <KeyboardAvoidingView behavior='position'>
                <ScrollView>
                    <Title title={`Guess My Number`} />

                    <View style={gStyles.card}>

                        <Title title={`Enter a Number`} style={styles.title} />

                        <TextInput
                            onSubmitEditing={() => { Keyboard.dismiss; confirmGame()} }
                            onChangeText={(text) => { numberInputHandler(text) }}
                            placeholderTextColor={Colors.lightgray}
                            onBlur={() => { Keyboard.dismiss }}
                            selectionColor={Colors.lightgray} // for courser
                            selectTextOnFocus={true}
                            keyboardType='numeric'
                            autoCapitalize='none'
                            value={enteredNumber}
                            autoCorrect={false}
                            inputMode='numeric'
                            style={gStyles.ip}
                            numberOfLines={1}
                            multiline={false}
                            spellCheck={true}
                            autoFocus={false}
                            maxLength={2}
                        />

                        <View style={gStyles.btnBox}>
                            <MyButton
                                title="Reset" onPress={resetGame}
                            />
                            <MyButton
                                title="Confirm" onPress={confirmGame}
                            />
                        </View>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        color: Colors.bgColor,
        marginBottom: 5,
        marginTop: 0,
    },
})

export default StartGameScreen

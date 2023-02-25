import React, { useState, useLayoutEffect } from 'react'
import {
    KeyboardAvoidingView,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    StyleSheet,
    TextInput,
    Keyboard,
    Text,
} from 'react-native'

import { Colors } from '../styles/color'

const { width } = Dimensions.get('window')

const AddNote = (props) => {

    const { storeMyNote } = props.route.params

    const [title, setTitle] = useState(null)
    const [note, setNote] = useState(null)

    const titleInputHandler = (text) => {
        setTitle(text)
    }
    const noteInputHandler = (text) => {
        setNote(text)
    }
    const saveData = () => {
        storeMyNote(Date.now(), title, note)
    }

    // for navigation header
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return (
                    title && note && <TouchableOpacity onPress={saveData} activeOpacity={0.9} style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Text style={{ color: Colors.white, fontWeight: '600', fontSize: 16 }}>SAVE</Text>
                    </TouchableOpacity>
                )
            },
        })
    }, [props.navigation, title, note])

    return (
        <SafeAreaView style={styles.contanier}>
            
            <TextInput
                onChangeText={(text) => { titleInputHandler(text) }}
                selectionColor={Colors.buttonColor} // for courser
                onSubmitEditing={() => Keyboard.dismiss}
                style={[styles.ip, { marginTop: 10 }]}
                placeholder={`Write your title...`}
                placeholderTextColor={'#30303088'}
                onBlur={() => Keyboard.dismiss}
                selectTextOnFocus={false}
                keyboardType='default'
                autoCapitalize='none'
                autoCorrect={false}
                numberOfLines={1}
                multiline={false}
                spellCheck={true}
                autoFocus={true}
                inputMode='text'
                maxLength={200}
                value={title}
            />
                
            <KeyboardAvoidingView behavior='position' style={{ marginTop: 1, flex: 1}}>

                {title && 
                    <TextInput
                        onSubmitEditing={() => Keyboard.dismiss}
                        onChangeText={(text) => { noteInputHandler(text) }}
                        placeholderTextColor='#30303088'//{Colors.black}
                        onBlur={() => { Keyboard.dismiss }}
                        selectionColor={Colors.buttonColor} // for courser
                        style={[styles.ip, { flex:1 }]}
                        selectTextOnFocus={false}
                        keyboardType='default'
                        autoCapitalize='none'
                        value={note}
                        autoCorrect={false}
                        inputMode='text'
                        numberOfLines={1}
                        multiline={true}
                        // spellCheck={true}
                        autoFocus={false}
                        maxLength={2000}
                        placeholder={`Enter note title`}
                    />
                }
                
            </KeyboardAvoidingView>
               
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.white,
        alignItems: 'center',
        minWidth: '100%',
        flex: 1,
    },
    ip: {
        backgroundColor: '#30303022',
        textAlign: 'justify',
        color: Colors.black,
        width: width * 0.95,
        marginBottom: 10,
        borderRadius: 5,
        fontSize: 16,
        padding: 10,
    },
})

export default AddNote

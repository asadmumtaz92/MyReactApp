import React, { useState, useLayoutEffect } from 'react'
import {
    KeyboardAvoidingView,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    StyleSheet,
    TextInput,
    Keyboard,
    Platform,
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
                    title && note && <TouchableOpacity onPress={saveData} activeOpacity={0.9}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Text style={{ color: Colors.white, fontWeight: '600', fontSize: 16 }}>SAVE</Text>
                    </TouchableOpacity>
                )
            },
        })
    }, [props.navigation, title, note])

    return (
        <SafeAreaView style={styles.contanier}>
            <KeyboardAvoidingView style={{ marginTop: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TextInput
                    selectionColor={Colors.selectionColor} // for courser
                    style={[styles.ip, { marginTop: 10, height: 44, }]}
                    onChangeText={(text) => titleInputHandler(text) }
                    placeholderTextColor={Colors.inputplaceholder}
                    onSubmitEditing={() => Keyboard.dismiss }
                    placeholder={`Write your title...`}
                    onBlur={() => Keyboard.dismiss }
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
                {title && 
                    <TextInput
                        selectionColor={Colors.selectionColor} // for courser
                        onChangeText={(text) => noteInputHandler(text) }
                        placeholderTextColor={Colors.inputplaceholder}
                        onSubmitEditing={() => Keyboard.dismiss }
                        onBlur={() => Keyboard.dismiss }
                        placeholder={`Enter note title`}
                        style={[styles.ip, { flex:1 }]}
                        selectTextOnFocus={false}
                        keyboardType='default'
                        autoCapitalize='none'
                        autoCorrect={true}
                        spellCheck={false}
                        autoFocus={false}
                        multiline={true}
                        maxLength={2000}
                        inputMode='text'
                        value={note}
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
        backgroundColor: Colors.inputBG,
        textAlignVertical: 'top',
        textAlign: 'justify',
        color: Colors.black,
        width: width * 0.95,
        letterSpacing: 0.5,
        marginBottom: 10,
        borderRadius: 5,
        fontSize: 16,
        padding: 10,
    },
})

export default AddNote

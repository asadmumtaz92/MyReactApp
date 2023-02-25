import React, { useState, useLayoutEffect } from 'react'
import {
    KeyboardAvoidingView,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    StyleSheet,
    ScrollView,
    TextInput,
    Keyboard,
    Text,
    View,
} from 'react-native'

import { Colors } from '../styles/color'
const { width } = Dimensions.get('window')

const EditNote = (props) => {

    const { data, updateMyNeote } = props.route.params

    const [title, setTitle] = useState(data.title)
    const [note, setNote] = useState(data.note)
    const uniqueId = data.uniqueId
    const [isEdit, setIsEdit] = useState(false)

    const titleInputHandler = (text) => {
        setTitle(text)
    }
    const noteInputHandler = (text) => {
        setNote(text)
    }

    const editNoteHandler = () => {
        if (isEdit) {
            console.log('run')
            updateMyNeote(uniqueId, title, note)
        }
        setIsEdit(!isEdit)
    }

    // for navigation header
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return ( title 
                    && <TouchableOpacity
                        onPress={() => editNoteHandler()} activeOpacity={0.9}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Text style={{ color: Colors.white, fontWeight: '600', fontSize: 16 }}>
                            {isEdit ? 'SAVE' : 'EDIT'}
                        </Text>
                    </TouchableOpacity>
                )
            },
        })
    }, [props.navigation, title, note, isEdit])

    return (
        <SafeAreaView style = { [styles.contanier, isEdit == true && { alignItems: 'center' }]} >
            <KeyboardAvoidingView style={{ marginTop: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : 'positions'}
            >
                {isEdit &&
                    <TextInput
                        onChangeText={(text) => { titleInputHandler(text) }}
                        selectionColor={Colors.selectionColor} // for courser
                        style={[styles.ip, { marginTop: 10, height: 44, }]}
                        placeholderTextColor={Colors.inputplaceholder}
                        onSubmitEditing={() => Keyboard.dismiss}
                        placeholder={`Write your title...`}
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
                }

                {title && isEdit 
                    && < TextInput
                        onChangeText={(text) => { noteInputHandler(text) }}
                        selectionColor={Colors.selectionColor} // for courser
                        placeholderTextColor={Colors.inputplaceholder}
                        onSubmitEditing={() => Keyboard.dismiss}
                        onBlur={() => Keyboard.dismiss}
                        placeholder={`Enter note title`}
                        style={[styles.ip, { flex: 1 }]}
                        selectTextOnFocus={false}
                        keyboardType='default'
                        autoCapitalize='none'
                        autoCorrect={false}
                        spellCheck={false}
                        autoFocus={false}
                        maxLength={2000}
                        multiline={true}
                        inputMode='text'
                        value={note}
                    />
                }
            </KeyboardAvoidingView>
            
            {!isEdit 
                && <View style={styles.box}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title} >{title}</Text>
                    </View>
                    <ScrollView>
                        <Text style={styles.note} >{note}</Text>
                    </ScrollView>
                </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.white,
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
    box: {
        flex: 1,
    },
    titleBox: {
        borderBottomColor: Colors.buttonColor,
        borderBottomWidth: 0.9,
        padding: 5,
    },
    title: {
        textTransform: 'capitalize',
        color: Colors.buttonColor,
        fontWeight: '600',
        textAlign: 'left',
        fontSize: 18,
    },
    note: {
        color: Colors.black,
        fontWeight: '400',
        textAlign: 'left',
        fontSize: 16,
        padding: 8,
    },
})

export default EditNote

// {/* <SafeAreaView style={[styles.contanier, isEdit == true && { alignItems: 'center' }]}> */ }

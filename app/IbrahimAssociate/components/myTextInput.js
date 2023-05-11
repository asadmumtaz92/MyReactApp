import React, { useState } from 'react'
import {
    StyleSheet,
    TextInput,
    View,
    Text,
} from 'react-native'
import { Colors } from '../../styles/color'

const myTextInput = ({
    label,
    value='',
    textInputHandler,
    countlength = 0,
    myStyle,
    multiline = false,
    ...props
}) => {

    const [val, setVal] = useState(value)

    const saveVal = (text) => {
        setVal(text)
        textInputHandler(text)
    }

    // console.log('...props.children', ...props?.children)

    return (
        <View style={[styles.item, { marginBottom: label == 'Title:' ? 5 : label == 'Description:' ? 5 : 25 }]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                onChangeText={(text) => saveVal(text)}
                multiline={multiline && true}
                style={[styles.ip, myStyle]}
                selectionColor={Colors.crm}
                selectTextOnFocus={false}
                keyboardType='default'
                autoCapitalize='none'
                autoCorrect={false}
                spellCheck={false}
                autoFocus={false}
                inputMode='text'
                value={val}
                // {...props.children}
            />
            {countlength > 0
                && <Text style={[styles.counter, { color: val.length > countlength ? Colors.red : '#00000055', }]}>
                    {`${val.length}/${countlength}`}
                </Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        marginHorizontal: 10,
        marginBottom: 25,
    },
    label: {
        color: Colors.black,
        fontWeight: '700',
        marginBottom: 5,
        marginLeft: 3,
        fontSize: 18,
        opacity: 0.6,
    },
    ip: {
        backgroundColor: Colors.white,
        color: Colors.inputColor,
        textAlignVertical: 'top',
        paddingHorizontal: 7,
        fontWeight: '500',
        borderRadius: 8,
        borderWidth: 0,
        fontSize: 17,
        minHeight: 45,

        elevation: 3,
        shadowColor: Colors.black,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
    },
    counter: {
        alignSelf: 'flex-end',
        marginRight: 3,
        marginTop: 2,
    },
})

export default myTextInput

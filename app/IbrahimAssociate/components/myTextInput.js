import React, { useState } from 'react'
import {
    TextInput,
    View,
    Text,
} from 'react-native'
import { Colors } from '../../styles/color'
import { gStyles } from '../styles/globle'

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
        <View style={{ marginHorizontal: 10, marginBottom: 25, marginBottom: label == 'Title:' ? 5 : label == 'Description:' ? 5 : 25 }}>
            <Text style={gStyles.label}>{label}</Text>
            <TextInput
                placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                onChangeText={(text) => saveVal(text)}
                multiline={multiline && true}
                style={[gStyles.ip, myStyle]}
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
                && <Text style={[gStyles.counter, { color: val.length > countlength ? Colors.red : '#00000055', }]}>
                    {`${val.length}/${countlength}`}
                </Text>
            }
        </View>
    )
}

export default myTextInput

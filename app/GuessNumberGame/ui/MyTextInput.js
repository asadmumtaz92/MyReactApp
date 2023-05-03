import React, { useState } from 'react'
import {
    TextInput,
    Keyboard,
} from 'react-native'

import { gStyles } from '../../styles/globalStyle'

const MyTextInput = ({ placeholder, onSubmit, ...props }) => {

    const [val, setVal] = useState(null)

    const sendData = () => {
        console.log('sendData: ', val)
        onSubmit(val)
    }

    return (
        <TextInput
            onSubmitEditing={() => { Keyboard.dismiss }}
            onChangeText={(text) => { setVal(text) }}
            onBlur={() => { Keyboard.dismiss; sendData() }}
            placeholderTextColor='lightgray'
            selectionColor='lightgray' // color for courser
            placeholder={placeholder}
            selectTextOnFocus={true}
            keyboardType='numeric'
            autoCapitalize='none'
            autoCorrect={false}
            inputMode='numeric'
            style={gStyles.ip}
            numberOfLines={1}
            multiline={false}
            spellCheck={true}
            autoFocus={false}
            maxLength={2}
            value={val}
        />
    )
}

export default MyTextInput

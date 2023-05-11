import React from 'react'
import {
    View,
} from 'react-native'

import { gStyles } from './styles/globle'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CreatePostForm from './components/createPostForm'

const CreatePost = () => {

    return (
        <View style={gStyles.container}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <CreatePostForm
                    create={true}
                />
            </KeyboardAwareScrollView>
        </View>
    )
}

export default CreatePost

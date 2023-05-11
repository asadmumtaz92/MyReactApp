import React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'
import { Colors } from '../styles/color'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CreatePostForm from './components/createPostForm'

const CreatePost = () => {

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <CreatePostForm create={true} />
            </KeyboardAwareScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    submitBtn: {
        backgroundColor: Colors.crm,
        marginHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 8,
        marginBottom: 20
    },
    submitText: {
        color: Colors.white,
        alignSelf: 'center',
        letterSpacing: 1.9,
        fontWeight: '700',
        fontSize: 18,
    },
})

export default CreatePost

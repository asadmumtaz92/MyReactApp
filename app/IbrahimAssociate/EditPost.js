import React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'
import { Colors } from '../styles/color'

import { connect } from 'react-redux'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import EditPostForm from './components/createPostForm'

const EditPost = (props) => {

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <EditPostForm create={false} data={props?.IB_ASSO_Reducer?.selectedPost} />
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



const mapStateToProps = ({ IB_ASSO_Reducer }) => ({ IB_ASSO_Reducer })

export default connect(mapStateToProps, {
    // setSelectedPost,
})(EditPost)

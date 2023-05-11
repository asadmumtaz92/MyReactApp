import React from 'react'
import {
    View,
} from 'react-native'
import { gStyles } from './styles/globle'

import { connect } from 'react-redux'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import EditPostForm from './components/createPostForm'

const EditPost = (props) => {

    return (
        <View style={gStyles.container}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <EditPostForm
                    create={false}
                    data={props?.IB_ASSO_Reducer?.selectedPost}
                />
            </KeyboardAwareScrollView>
        </View>
    )
}

const mapStateToProps = ({ IB_ASSO_Reducer }) => ({ IB_ASSO_Reducer })

export default connect(mapStateToProps, {
    // setSelectedPost,
})(EditPost)

import React, { useEffect, useState, useLayoutEffect } from 'react'
import {
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    View,
} from 'react-native'

import { Colors } from '../styles/color'
import { gStyles } from './styles/globle'
import { connect } from 'react-redux'

// import { BASE_URL, API } from './enviroments/index'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import PostCardDetail from './components/postCardDetail'

const PostDetail = (props) => {

    // HOOKS
    const [data, setData] = useState({})
    const [postID, setPostID] = useState()

    // GET DATA
    useEffect(() => {
        setTimeout(() => {
            setData(props?.IB_ASSO_Reducer?.selectedPost)
            setPostID(props?.IB_ASSO_Reducer?.selectedPost?.id)
        }, 1000)
    }, [])
    
    const editButtonHandler = () => {
        props?.navigation.navigate('IB_Edit')
    }

    // HEADER TOP RIGHT ICON
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity
                        activeOpacity={0.9} style={gStyles.navBtn}
                        onPress={() => editButtonHandler()}
                    >
                        <FontAwesome5 name="edit" style={gStyles.icon} />
                    </TouchableOpacity>
                )
            },
        })
    }, [props?.navigation])

    // useEffect(() => {
    //     const getDetail = () => {
    //         fetch(`API/${postID}`)
    //             .then(response => response.json())
    //             .then(response => {
    //                 if (!response['errors']) {
    //                     setData(response)
    //                 }
    //             })
    //             .catch(error => {
    //                 console.log('API fetch data failed:', error);
    //             });
    //     }
    //     getDetail()
    // }, [])

    return (
        <View style={gStyles.container}>
            <StatusBar barStyle='light-content' backgroundColor={Colors.crm} />

            {data.title
                ? <ScrollView showsVerticalScrollIndicator={false}>
                    <PostCardDetail PostData={data} />
                </ScrollView>
                : <View style={gStyles.loaderView}>
                    <ActivityIndicator color={Colors.crm} size={'large'} style={{ marginTop: -50 }} />
                </View>
            }
        </View>
    )
}

const mapStateToProps = ({ IB_ASSO_Reducer }) => ({ IB_ASSO_Reducer })

export default connect(mapStateToProps, {
    // setSelectedPost,
})(PostDetail)

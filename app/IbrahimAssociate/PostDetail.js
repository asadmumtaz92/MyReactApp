import React, { useEffect, useState, useLayoutEffect } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    ScrollView,
    StatusBar,
    Platform,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

import { Colors } from '../styles/color'
import { connect } from 'react-redux'

// import { BASE_URL, API } from './enviroments/index'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
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
                        activeOpacity={0.9} style={styles.navBtn}
                        onPress={() => editButtonHandler()}
                    >
                        <FontAwesome5 name="edit" style={styles.editIcon} />
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
        <View style={styles.contanier}>
            <StatusBar barStyle='light-content' backgroundColor={Colors.crm} />

            {data.title
                ? <ScrollView showsVerticalScrollIndicator={false}>
                    <PostCardDetail PostData={data} />
                </ScrollView>
                : <View style={styles.loaderView}>
                    <ActivityIndicator color={Colors.crm} size={'large'} style={{ marginTop: -50 }} />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.white,
        minWidth: '100%',
        flex: 1,
    },
    editIcon: {
        color: Colors.white,
        fontSize: 22,
    },
    loaderView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    flatlist: {
        paddingBottom: Platform.select({
            android: 5,
            ios: 10,
        }),
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    navBtn: {
        padding: 5,
        zIndex: 1
    },
    searchIcon: {
        color: Colors.black,
        fontWeight: '300',
        fontSize: 20,
    },
    ip: {
        borderBottomColor: Colors.crm,
        backgroundColor: Colors.white,
        color: Colors.inputColor,
        borderBottomWidth: 0.5,
        fontWeight: '500',
        paddingLeft: 10,
        borderWidth: 0,
        fontSize: 16,
        height: 45,
        padding: 0,
    },
    errorView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: Colors.black,
        alignSelf: 'center',
        fontWeight: '500',
        marginTop: 10,
        fontSize: 22,
        opacity: 0.5,
    },
})

const mapStateToProps = ({ IB_ASSO_Reducer }) => ({ IB_ASSO_Reducer })

export default connect(mapStateToProps, {
    // setSelectedPost,
})(PostDetail)

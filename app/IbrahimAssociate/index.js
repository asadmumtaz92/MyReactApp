import React, { useEffect, useState, useLayoutEffect } from 'react'
import {
    ActivityIndicator,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    TextInput,
    Keyboard,
    FlatList,
    View,
    Text,
} from 'react-native'

import { Colors } from '../styles/color'
import { gStyles } from './styles/globle'
import { connect } from 'react-redux'
 
// import { BASE_URL, API } from './enviroments/index'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import PostCard from './components/postCard'

const bgImage = require('./assets/splash.png')

const IbrahimAssociate = (props) => {

    // HOOKS
    const [visible, setVisible] = useState(false)
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [errorText, setErrorText] = useState('')
    const [splashShow, setSplashShow] = useState(true)

    // HEADER TOP ICON
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity
                        onPress={() => searchButtonHandler()} activeOpacity={0.9} style={gStyles.navBtn}
                    >
                        {visible
                            ? <SimpleLineIcons name="close" style={gStyles.icon} />
                            : <FontAwesome5 name="search" style={gStyles.icon} />
                        }
                    </TouchableOpacity>
                )
            },
        })
    }, [props?.navigation, visible])

    // GET DATA & HIDE SPLASH SCREEN
    useEffect(() => {
        setTimeout(() => {
            props?.navigation.setOptions({
                headerShown: true,
            })
            setSplashShow(false)
        }, 2000);

        setTimeout(() => {
            setFilteredData(props?.IB_ASSO_Reducer?.allPost)
        }, 1000)
    }, [])

    // SHOW & HIDE SEARCH
    const searchButtonHandler = () => {
        if (visible) { // for disable
            setVisible(!visible)
            setSearch('')
            let res = props?.IB_ASSO_Reducer?.allPost
            setFilteredData(res)
        }
        else { // for enable
            setVisible(!visible)
        }
    }

    // SAVE SEARCH VALUSE
    const searchInputHandler = (text) => {
        setSearch(text)
    }

    // SEARCH POST
    useEffect(() => {
        const SearchPost = () => {
            const result = props?.IB_ASSO_Reducer?.allPost.filter(item => item?.title.toLowerCase().includes(search.toLowerCase()))

            if (result.length > 0) {
                let res = search.length > 0 ? result : props?.IB_ASSO_Reducer?.allPost
                setFilteredData(res)
                setErrorText('')
            } else {
                setErrorText('Result not found.')
            }
        }
        SearchPost()
    }, [search, visible])

    // useEffect(() => {
    //     const getDetail = () => {
    //         fetch(API)
    //             .then(response => response.json())
    //             .then(response => {
    //                 if (!response['errors']) {
    //                     setFilteredData(response)
    //                 }
    //             })
    //             .catch(error => {
    //                 console.log('API fetch data failed:', error);
    //             });
    //     }
    //     getDetail()
    // }, [])

    const renderItem = (item) => {
        const navigate = () => {
            props.navigation.navigate('IB_PostDetail')
        }
        if (item?.item?.visibility == 'Public') {
            return <PostCard PostData={item?.item} navigate={navigate} />
        }
    }

    const createPost = () => {
        setTimeout(() => {
            props?.navigation.navigate('IB_Create')
        }, 200);
    }

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor={Colors.crm} />
            {splashShow
                ? <ImageBackground source={bgImage} style={{ flex: 1 }} />
                : <View style={gStyles.container}>
                    <TouchableOpacity onPress={createPost} style={gStyles.createPostView} activeOpacity={0.96}>
                        <SimpleLineIcons name="plus" style={gStyles.icon} />
                        <Text style={gStyles.createPostText}>{`CREATE POST`}</Text>
                    </TouchableOpacity>

                    {visible &&
                        <TextInput
                            onSubmitEditing={() => { Keyboard.dismiss(); setVisible(false) }}
                            onBlur={() => { Keyboard.dismiss(); setVisible(false) }}
                            onChangeText={(text) => searchInputHandler(text)}
                            placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                            selectionColor={Colors.selectionColor}
                            placeholder='SEARCH POST...'
                            selectTextOnFocus={false}
                            style={gStyles.ipSearch}
                            keyboardType='default'
                            autoCapitalize='none'
                            autoCorrect={false}
                            spellCheck={false}
                            inputMode='search'
                            numberOfLines={1}
                            multiline={false}
                            autoFocus={true}
                            value={search}
                            maxLength={50}
                        />
                    }

                    <View style={{flex:1}}>
                        {errorText
                            ? <View style={gStyles.errorView}>
                                <Text style={gStyles.errorText}>{errorText}</Text>
                            </View>
                            : filteredData.length
                                ? <FlatList
                                    contentContainerStyle={gStyles.flatlist}
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={(_, index) => index}
                                    renderItem={renderItem}
                                    data={filteredData}
                                />
                                : <View style={gStyles.loaderView}>
                                    <ActivityIndicator color={Colors.crm} size={'large'} style={{ marginTop: -50 }} />
                                </View>
                        }
                    </View>
                </View>
            }
        </>
    )
}

const mapStateToProps = ({ IB_ASSO_Reducer }) => ({ IB_ASSO_Reducer })

export default connect(mapStateToProps, {
    // setSelectedPost,
})(IbrahimAssociate)

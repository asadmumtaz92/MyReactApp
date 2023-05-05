import React, { useEffect, useState, useLayoutEffect } from 'react'
import {
    ActivityIndicator,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    TextInput,
    Platform,
    Keyboard,
    FlatList,
    View,
    Text,
    ImageBackground,
} from 'react-native'

import { Colors } from '../styles/color'
import { connect } from 'react-redux'
 
// import { BASE_URL, API } from './enviroments/index'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import PostCard from './components/postCard'

const bgImage = require('./assets/ibrahimAss.png')

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
                        onPress={() => searchButtonHandler()} activeOpacity={0.9} style={styles.navBtn}
                    >
                        {visible
                            ? <SimpleLineIcons name="close" style={styles.searchIcon} />
                            : <FontAwesome5 name="search" style={styles.searchIcon} />
                        }
                    </TouchableOpacity>
                )
            },
        })
    }, [props?.navigation, visible])

    useEffect(() => {
        setTimeout(() => {
            props?.navigation.setOptions({
                headerShown: true,
            })
            setSplashShow(false)
        }, 2000);
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

    // GET DATA
    useEffect(() => {
        setTimeout(() => {
            setFilteredData(props?.IB_ASSO_Reducer?.allPost)
        }, 1000)
    }, [])

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

        return <PostCard PostData={item?.item} navigate={navigate} />
    }

    return (
        <>
            {splashShow
                ? <ImageBackground source={bgImage} style={{ flex: 1 }} />
                : <View style={styles.contanier}>
                    <ImageBackground source={bgImage} style={{flex:1}} />
                    <StatusBar barStyle='light-content' backgroundColor={Colors.primery} />

                    {visible &&
                        <TextInput
                            onSubmitEditing={() => { Keyboard.dismiss(); setVisible(false) }}
                            onBlur={() => { Keyboard.dismiss(); setVisible(false) }}
                            onChangeText={(text) => searchInputHandler(text)}
                            placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                            selectionColor={Colors.selectionColor}
                            selectTextOnFocus={false}
                            placeholder="SEARCH POST..."
                            keyboardType='default'
                            autoCapitalize='none'
                            autoCorrect={false}
                            spellCheck={false}
                            style={styles.ip}
                            inputMode='search'
                            numberOfLines={1}
                            multiline={false}
                            autoFocus={true}
                            value={search}
                            maxLength={50}
                        />
                    }
                    <View>
                        {errorText
                            ? <View style={styles.errorView}>
                                <Text style={styles.errorText}>{errorText}</Text>
                            </View>
                            : filteredData.length
                                ? <FlatList
                                    contentContainerStyle={styles.flatlist}
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={(_, index) => index}
                                    renderItem={renderItem}
                                    data={filteredData}
                                />
                                : <View style={styles.loaderView}>
                                    <ActivityIndicator color={Colors.crm} size={'large'} style={{ marginTop: -50 }} />
                                </View>
                        }
                    </View>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.white,
        minWidth: '100%',
        flex: 1,
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
        color: Colors.white,
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
})(IbrahimAssociate)

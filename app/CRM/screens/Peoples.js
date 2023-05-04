import React, { 
    useLayoutEffect,
    useEffect,
    useState,
} from 'react'
import {
    ActivityIndicator,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    TextInput,
    Keyboard,
    Text,
    View,
} from 'react-native'

import { Colors } from '../styles/color'
import { gStyles } from '../styles/globle'

import { connect } from 'react-redux'

import PeopleList from '../components/peopleList'
import BottomTab from '../components/BottomTab'

import PeopleDetail from '../components/peopleDetail'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Peoples = (props) => {

    const [visible, setVisible] = useState(false)
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [errorText, setErrorText] = useState('')

    const searchButtonHandler = () => {
        if (visible) { // for disable
            setVisible(!visible)
            let res = props?.peopleReducer?.peopleList
            setFilteredData(res)
        }
        else { // for enable
            setVisible(!visible)
        }
    }

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity
                        onPress={() => searchButtonHandler()} activeOpacity={0.9}
                        style={gStyles.navBtn}
                    >
                        {visible 
                            ? <SimpleLineIcons name="close" style={gStyles.searchIcon} />
                            : <FontAwesome5 name="search" style={gStyles.searchIcon}/>
                        }
                    </TouchableOpacity>
                )
            },
        })
    }, [props?.navigation, visible])
    // SAVE SEARCH VALUSE
    const searchInputHandler = (text) => {
        setSearch(text)
    }

    useEffect(() => {
        SearchPeople()
    }, [search, visible])

    useEffect(() => {
        setTimeout(() => {
            setFilteredData(props?.peopleReducer?.peopleList)
        }, 1500)
    }, [])

    // SEARCH SHOP
    const SearchPeople = () => {
        const result = props?.peopleReducer?.peopleList.filter(item => item?.firstname.toLowerCase().includes(search.toLowerCase()))

        // if data found through first name
        if(result.length > 0) {
            let res = search.length > 0 ? result : props?.peopleReducer?.peopleList
            setFilteredData(res)
            setErrorText('')
        }
        // find data through last name
        else {
            let result2 = props?.peopleReducer?.peopleList.filter(item => item?.lastname.toLowerCase().includes(search.toLowerCase()))

            if (result2.length) {
                let res2 = search.length > 0 ? result2 : props?.peopleReducer?.peopleList
                setFilteredData(res2)
                setErrorText('')
            }
            else {
                setErrorText('Result not found.')
            }
        }
    }

    const [showDetail, setShowDetail] = useState(false)
    const showPeoDetail = () => {
        setShowDetail(true)
    }
    const hidePeoDetail = () => {
        setShowDetail(false)
    }

    return (
        <View style={styles.contanier}>
            <StatusBar barStyle='light-content' backgroundColor={Colors.primery} />
            
            {visible && 
                <TextInput
                    onSubmitEditing={() => { Keyboard.dismiss(); setVisible(false) }}
                    onBlur={() => { Keyboard.dismiss(); setVisible(false) }}
                    onChangeText={(text) => searchInputHandler(text)}
                    placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                    selectionColor={Colors.selectionColor}
                    selectTextOnFocus={false}
                    placeholder="SEARCH..."
                    keyboardType='default'
                    autoCapitalize='none'
                    autoCorrect={false}
                    spellCheck={false}
                    style={gStyles.ip}
                    inputMode='search'
                    numberOfLines={1}
                    multiline={false}
                    autoFocus={true}
                    value={search}
                    maxLength={20}
                />
            }
            
            <View style={{ marginHorizontal: 10, flex: 1 }}>
                {errorText 
                    ? <View style={gStyles.errorView}>
                        <Text style={gStyles.errorText}>{errorText}</Text>
                    </View>
                    : filteredData.length
                        ? <PeopleList data={filteredData} showPeoDetail={showPeoDetail} />
                        : <ActivityIndicator size='large' color={Colors.primery} style={{ flex: 1 }} />
                }
            </View>

            {showDetail && <PeopleDetail hidePeoDetail={hidePeoDetail} />}

            {/* BOOTOM TABS */}
            <BottomTab />

        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.white,
        flex: 1,
    },
})

const mapStateToProps = ({ peopleReducer }) => ({ 
    peopleReducer,
})

export default connect(mapStateToProps, {

})(Peoples)

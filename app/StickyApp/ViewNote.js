import React, { useState, useEffect } from 'react'
import {
    ActivityIndicator,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native'

import { Colors } from '../styles/color'
import List from './components/List'

const ViewNote = ({route, navigation}) => {

    const [myNotes, setMyNote] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        let myStoredNotes = route.params.myStoredNotes

        setTimeout(() => {
            setMyNote(myStoredNotes)
            setLoader(false)
        }, 800)
    }, [])

    const EditNoteHandler = (data) => {
        navigation.navigate('EditNote', { data: data, updateMyNeote: route.params.updateMyNeote })
    }

    return (
        <SafeAreaView style={styles.contanier}>
            {loader 
                ? <ActivityIndicator color={Colors.buttonColor} size='small'  style={{ marginTop: 20 }}/>
                : myNotes.length > 0
                    ? <List data={myNotes} onPress={EditNoteHandler} />
                    : <View style={styles.noDataBox}>
                        <Text style={styles.noDataText}>{`You Don't Have Any Sticky Note.`}</Text>
                    </View>
                }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.white,
        minWidth: '100%',
        flex: 1,
    },
    noDataBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
        marginTop: -30,
        flex: 1,
    },
    noDataText: {
        color: Colors.buttonColor,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 22,
    },
})

export default ViewNote

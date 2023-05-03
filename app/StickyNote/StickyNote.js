import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native'

import { Colors } from '../styles/color'
import Card from './components/Card'

const StickyNote = ({ navigation }) => {

    const [myNotes, setMyNote] = useState([])

    // ADD NEW NOTE
    const storeMyNote = (id, title, note) => {
        console.log('SAVED: \nTitle:', title, '\nNote:', note, '\nID:', id)
        setMyNote((currentNote) => [
            ...currentNote,
            {
                id: myNotes.length,
                uniqueId: id,
                title: title,
                note: note,
            },
        ])
        setTimeout(() => {
            navigation.goBack()
        }, 500)
    }
    // UPDATE EXISTING NOTE
    const updateMyNote = (uniqueId, title, note) => {
        console.log('Updtae: \nTitle:', title, '\nNote:', note, '\nID:', uniqueId)

        // setMyNote((currentNote) => [
        //     ...currentNote,
        //     {
        //         id: myNotes.length,
        //         uniqueId: uniqueId,
        //         title: title,
        //         note: note,
        //     },
        // ])
        setTimeout(() => {
            navigation.navigate('StickyNote')
        }, 500)
    }

    const addNoteHandler = () => {
        navigation.navigate('AddNote', { storeMyNote: storeMyNote })
    }
    const viewNoteHandler = () => {
        navigation.navigate('ViewNote', { myStoredNotes: myNotes, updateMyNote: updateMyNote })
    }

    return (
        <SafeAreaView style={styles.contanier}>
            <Card title='CreATE note' onPress={addNoteHandler} />
            <Card title='view noteS' onPress={viewNoteHandler} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100%',
        flex: 1,
    },
})

export default StickyNote

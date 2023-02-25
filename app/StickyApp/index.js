import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native'

import { Colors } from '../styles/color'
import Card from './components/Card'

const Index = ({ navigation }) => {

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
        }, 200)
    }
    // UPDATE EXISTING NOTE
    const updateMyNeote = (uniqueId, title, note) => {
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
            navigation.navigate('StickyApp')
        }, 200)
    }

    const addNoteHandler = () => {
        navigation.navigate('AddNote', { 'storeMyNote': storeMyNote })
    }
    const viewNoteHandler = () => {
        navigation.navigate('ViewNote', { myStoredNotes: myNotes, updateMyNeote: updateMyNeote })
    }

    return (
        <SafeAreaView style={styles.contanier}>
            <Card title='Add new note' onPress={addNoteHandler} />
            <Card title='view all note' onPress={viewNoteHandler} />
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

export default Index

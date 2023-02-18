import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    Alert,
    View,
} from 'react-native'

import { Colors } from '../styles/color'
import { gStyles } from '../styles/globalStyle'

import Instruction from './ui/Instruction'
import MyButton from './ui/MyButton'
import GuessBox from './ui/GuessBox'
import Title from './ui/Title'
import Item from './ui/Item'

let minBoundary = 1
let maxBoundary = 100

const genrateRandomNumber = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if (rndNum === exclude) {
        return genrateRandomNumber(min, max, exclude)
    }
    else {
        return rndNum
    }
}

const GameScreen = ({ choosenNumber, gameOvers, storeDatas, handleNoOfRound=() => { } }) => {

    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])

    const initialRandomNum = genrateRandomNumber(1, 100, choosenNumber)
    const [currentGuess, setCurrentGuess] = useState(initialRandomNum)
    
    const checkNumber = (direction) => {

        if ((direction === 'lower' && currentGuess < choosenNumber) ||
            (direction === 'greater' && currentGuess > choosenNumber)
        ) {
            Alert.alert(`Don't lie!`,
                '\nYou know that this is wrong...',
                [{text: 'Sorry!', style:'cancel'}]
            )
            return; 
        } 
        
        if (direction === 'lower') {
            maxBoundary = currentGuess
        }
        else {
            minBoundary = currentGuess + 1
        }

        const newRndNum = genrateRandomNumber(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNum)
        storeData(newRndNum)
    }

    const [guessedData, setGuessedData] = useState([])
    const storeData = (newRndNum) => {
        setGuessedData((currentGoal) => [
            { id: guessedData.length, num: newRndNum },
            ...currentGoal,
        ])
        storeDatas(newRndNum);

        (() => {
            let ll = guessedData.length
            handleNoOfRound(ll)
        })()
    }

    useEffect(() => {
        if (choosenNumber == currentGuess) {
            gameOvers()
        }
    }, [choosenNumber, currentGuess])

    return (
        <SafeAreaView style={{flex:1}}>

            <Title title={`Opponent's Guess`} />

            <GuessBox currentGuess={currentGuess} />

            <View style={[gStyles.card, { marginTop: '10%'}]}>

                <Instruction text={`Higher or lower?`} />

                <View style={[gStyles.btnBox]}>
                    <MyButton
                        title='-' onPress={checkNumber.bind(this, 'lower')}
                        textStyle={styles.textStyle}
                    />
                    <MyButton
                        title='+' onPress={checkNumber.bind(this, 'greater')}
                        textStyle={styles.textStyle}
                    />
                </View>

            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.logBox}
                data={guessedData}
                keyExtractor={item => item.id}
                renderItem={(item)=> {
                    return (
                        <Item id={item.item.id} num={item.item.num} />
                    )
                }}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        paddingVertical: 7,
        fontWeight: '900',
        fontSize: 20,
    },
    logBox: {
        alignSelf: 'center',
        marginTop: 20,
        width: '90%',
        flex: 1,
    },
})

export default GameScreen

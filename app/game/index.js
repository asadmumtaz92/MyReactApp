import React, { useState } from 'react'
import {
    ImageBackground,
    StyleSheet,
    Platform,
    View,
} from 'react-native'

import { Colors } from '../styles/color'

import Title from '../game/ui/Title'
import StartGameScreen from './StartScreen'
import GameScreen from './GameScreen'
import GameOverScree from './GameOverScree'

let background = require('../assets/background.png')
let background2 = require('../assets/background2.jpg')

const Index = () => {

    const [choosenNumber, setChoosenNumber] = useState(null)
    const [gameOver, setGameOver] = useState(false)
    const handleUserNumber = (number) => {
        setChoosenNumber(number)
    }

    const [guessedData, setGuessedData] = useState([])
    const storeData = (newRndNum) => {
        setGuessedData((currentGoal) => [
            { id: guessedData.length, num: newRndNum },
            ...currentGoal,
        ])
    }

    const reStartGame = () => {
        setChoosenNumber(null)
        setGameOver(false)
        setGuessedData([])
    }
    const gameOvers = () => {
        setGameOver(true)
    }

    let screen;
    if (choosenNumber == null) {
        screen = <StartGameScreen pickedNumber={handleUserNumber} />
    }
    else if (choosenNumber != null) {
        screen = <GameScreen choosenNumber={choosenNumber} gameOvers={gameOvers} storeDatas={storeData} />
    }
    if (gameOver == true) {
        screen = <GameOverScree reStartGame={reStartGame} choosenNumber={choosenNumber} noOfRounds={guessedData.length} />
    }

    return (
        <ImageBackground
            source={gameOver == true ? background2 : background} resizeMode="cover"
            style={styles.contanier} imageStyle={styles.backgroundImage}
        >
            <View style={styles.view}>

                <>{screen}</> 

                {choosenNumber != null && gameOver == false
                    && <Title style={{ marginTop: 5 }} title={`Your Choosen Number is: ${choosenNumber}`} />
                }
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.bgColor,
        minWidth: '100%',
        width: '100%',
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.65,
    },
    view: {
        marginBottom: Platform.OS == 'ios' ? 20 : 5,
        flex: 1,
    },
})

export default Index

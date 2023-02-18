import React, { useState } from 'react'
import {
    ImageBackground,
    StyleSheet,
    View,
} from 'react-native'

import { gStyles } from './app/styles/globalStyle'
import { Colors } from './app/styles/color'

import Title from './app/game/ui/Title'

import StartGameScreen from './app/game/StartScreen'
import GameScreen from './app/game/GameScreen'
import GameOverScree from './app/game/GameOverScree'

let background = require('./app/assets/background.png')
const background2 = require('./app/assets/sea.jpg')

const App = () => {

    const [choosenNumber, setChoosenNumber] = useState(null)
    const [gameOver, setGameOver] = useState(false)
    
    const handleUserNumber = (number) => {
        setChoosenNumber(number)
    }
    
    const [guessedData, setGuessedData] = useState([])
    const storeData = ( newRndNum ) => {
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
        // background = background2
        screen = <GameOverScree reStartGame={reStartGame} choosenNumber={choosenNumber} noOfRounds={guessedData.length} />
    }

    return (
        <ImageBackground 
            source={gameOver == true ? background2 : background} resizeMode="cover"
            style={styles.contanier} imageStyle={styles.backgroundImage}
        >
            <View style={styles.view}>

                {screen}

                {choosenNumber != null && gameOver == false
                    && <Title style={{paddingTop: 0}} title={`Your Choosen Number is: ${choosenNumber}`} />
                }
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.bgColor,
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.65,
    },
    view: {
        marginBottom: 15,
        flex: 1,
    },
})

export default App

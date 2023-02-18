import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    Image,
    View,
} from 'react-native'

const { width, height } = Dimensions.get('window')

import MyButton from './ui/MyButton'
import Title from './ui/Title'
import Summary from './ui/Summary'

const overImage = require('../assets/gameOver.png')

const GameOverScreen = ({ reStartGame, choosenNumber, noOfRounds }) => {

    return (
        <SafeAreaView style={styles.container}>

            <Title style={{ fontSize: 33}} title={`GAME OVER`} />

            <Image source={overImage} style={styles.image} resizeMode="contain" />

            <View style={styles.btnBox}>
                <MyButton
                    title="Start New Game" onPress={reStartGame}
                />
            </View>

            <Summary choosenNumber={choosenNumber} noOfRounds={noOfRounds} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    image: {
        height: width * 0.8,
        width: width * 0.9,
    },
    btnBox: {
        marginTop: 20,
        width: '60%',
        marginTop: 5,
        height: 44,
    },
})

export default GameOverScreen

import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    Image,
    View,
} from 'react-native'

const width = Dimensions.get('window').width

import MyButton from './ui/MyButton'
import Title from './ui/Title'
import Summary from './ui/Summary'

const overImage = require('../assets/gameOver.png')

const GameOverScreen = ({ reStartGame, choosenNumber, noOfRounds }) => {

    return (
        <SafeAreaView style={styles.container}>

            <Title style={{ fontSize: width < 390 ? 27 : 33}} title={`GAME OVER`} />

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
        height: width < 390 ? 250 : 350,
        width: width < 390 ? 250 : 350,
    },
    btnBox: {
        width: width < 390 ? '70%' : '60%',
        marginTop: 5,
        height: 40,
    },
})

export default GameOverScreen

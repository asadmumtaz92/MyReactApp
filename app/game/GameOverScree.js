import React from 'react'
import {
    useWindowDimensions, // for auto update height & width of devices 
    SafeAreaView,
    StyleSheet,
    Dimensions,
    Platform, 
    Image,
    View,
} from 'react-native'

import MyButton from './ui/MyButton'
import Summary from './ui/Summary'

const overImage = require('../assets/gameOver.png')
const width = Dimensions.get('window').width

const GameOverScreen = ({ reStartGame, choosenNumber, noOfRounds }) => {

    return (
        <SafeAreaView style={styles.container}>

            <Image source={overImage} style={styles.image} resizeMode="cover" />

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
        width: width < 390 ? '70%' : '60%',
        marginTop: Platform.select({
            android: 6,
            ios: 5,
        }),
        height: 40,
    },
})

export default GameOverScreen

import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    StatusBar,
    Image,
    View,
    useWindowDimensions,
    Platform, // for auto update height & width of devices 
} from 'react-native'

const width = Dimensions.get('window').width

import MyButton from './ui/MyButton'
import Title from './ui/Title'
import Summary from './ui/Summary'

const overImage = require('../assets/gameOver.png')

const GameOverScreen = ({ reStartGame, choosenNumber, noOfRounds }) => {

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle='light-content' />
            
            <Title style={{ fontSize: width < 390 ? 27 : 33}} title={`GAME OVER`} />

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
        marginTop: Platform.select({
            ios: 5,
            android: 6,
        }),
        width: width < 390 ? '70%' : '60%',
        height: 40,
    },
})

export default GameOverScreen

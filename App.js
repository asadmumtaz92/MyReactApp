import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    ScrollView,
} from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Header from './app/components/Header'
import FlexBox from './app/components/FlexBox'
import GoalInput from './app/components/GoalInput'
import GoalItem from './app/components/GoalItem'

const image_1 = require('./app/assets/snapcode.png')

const App = () => {

    const [courseGoal, setCourseGoal] = useState([])
    const onSubmit = (text) => {
        setCourseGoal((currentGoal) => [
            ...currentGoal,
            { text: text, id: courseGoal.length },
        ])
    }
    const deletGoal = (id) => {
        setCourseGoal((currentGoal) => {
            return currentGoal.filter((goal) => goal.id !== id )
        })
    }

    return (
        <SafeAreaView style={{flex:1}}>

            <Header title='REACT NATIVE COURSE' />

            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10, paddingHorizontal:10}}>
                <Image source={image_1} style={styles.image} resizeMode='cover' />
                <Image source={image_1} style={styles.image} resizeMode='contain' />
                <Image source={image_1} style={styles.image} resizeMode='center' />
                <Image source={image_1} style={styles.image} resizeMode='stretch' />
            </View>
            
            <View style={[styles.contanier]}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <FlexBox />

                    <GoalInput 
                        placeholder='Enter your goal...'
                        onAddGoal={onSubmit}
                    />

                    {courseGoal.map(item => {
                        return (
                            <GoalItem
                                text={item.text}
                                id={item.id}
                                onDelete={deletGoal}
                                key={item.id}
                            />
                        )
                    })}
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contanier: {
        paddingHorizontal: 20,
        width: '100%',
        flex: 1,
    },
    image: {
        height: 50,
        width: 50,
    },
})

export default App

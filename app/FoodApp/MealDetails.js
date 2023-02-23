import React, { useState, useEffect, useLayoutEffect} from 'react'
import {
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image,
    Alert,
    Text,
    View,
} from 'react-native'

import { Colors } from '../styles/color'

const heart = require('../assets/heart.png')
const back_white = require('../assets/back_white.png')

import MealShortDetail from './components/MealShortDetail'
import List from './components/List'
import PairItem from './components/PairItem'

const { width } = Dimensions.get('window')

const MealDetails = ({ route, navigation }) => {

    const [displayMeal, setDisplayMeal] = useState([])

    useEffect(() => {
        const item = route.params.itemData

        setTimeout(() => {
            setDisplayMeal(item)
        }, 800)

        navigation.setOptions({
            headerTitle: item.title,
        })

    }, [])
    
    const headerButtonPressHandler = () => {
        Alert.alert('Message!', '\n' + displayMeal.title + ' is added')
    }

    // for navigation header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => { 
                return (
                    <TouchableOpacity onPress={headerButtonPressHandler} activeOpacity={0.8} >
                        <Image source={heart} style={{height: 30, width: 30}} />
                    </TouchableOpacity>
                )
            },
            headerLeft: () => {
                return (
                    <TouchableOpacity onPress={() => { navigation.goBack()}} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center'}} >
                        <Image source={back_white} style={{ height: 15, width: 10, marginRight: 5 }} />
                        <Text style={{color: Colors.white,fontWeight: '600', fontSize: 16}}>Back</Text>
                    </TouchableOpacity>
                )
            },
        })
    }, [navigation, headerButtonPressHandler])

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {!displayMeal.title
                    ? <ActivityIndicator color={Colors.buttonColor} size='small' style={{ marginTop: 20 }} />
                    : <View style={styles.box}>
                        <Image source={{ uri: displayMeal.imageUrl }} style={styles.img} resizeMode="cover" />
                        
                        <MealShortDetail
                            title={displayMeal.title}
                            duration={displayMeal.duration}
                            complexity={displayMeal.complexity}
                            affordability={displayMeal.affordability}
                        />
                        
                        <List
                            key='Ingredients'
                            title='Ingredients'
                            data={displayMeal.ingredients}
                        />

                        <List
                            key='Steps'
                            title='Steps'
                            data={displayMeal.steps}
                        />

                        <View style={styles.otherView}>
                            <PairItem key='Gluten' title='Gluten Meal' val={displayMeal.isGlutenFree}/>
                            <PairItem key='Vegan' title='Vegan Meal' val={displayMeal.isVegan} />
                            <PairItem key='Vegetarian' title='Vegetarian Meal' val={displayMeal.isVegetarian} />
                            <PairItem key='Lactose' title='Lactose Meal' val={displayMeal.isLactoseFree} />
                        </View>

                    </View>
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    box: {
        backgroundColor: Colors.white,
        marginBottom: 20,
        width: width,
    },
    img: {
        height: width * 0.65,
        width: width,
    },
    otherView: {
        borderColor: Colors.buttonColor,
        paddingHorizontal: 10,
        marginHorizontal: 30,
        borderTopWidth: 2,
        paddingTop: 10,
        marginTop: 20,
    },
});

export default MealDetails

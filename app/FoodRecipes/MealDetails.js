import React, { useState, useEffect } from 'react'
import {
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Dimensions,
    StatusBar,
    Image,
    View,
} from 'react-native'

import { Colors } from '../styles/color'
import { connect, useDispatch } from 'react-redux'
import { addFavoriteMeal } from '../redux/actions/foodRecipe'

import MealShortDetail from './components/MealShortDetail'
import List from './components/List'
import PairItem from './components/PairItem'
import Header from './components/Header'

const { width } = Dimensions.get('window')

const MealDetails = ({ navigation, ...props }) => {

    const dispatch = useDispatch()
    const [displayMeal, setDisplayMeal] = useState([])
    const [fvrt, setFvrt] = useState(false)

    useEffect(() => {
        const data = props?.foodRecipeReducer?.selected_meal

        setTimeout(() => {
            setDisplayMeal(data)
            props?.foodRecipeReducer?.favoriteMeals.filter((items) => {
                if (data.id == items?.id) {
                    setFvrt(true)
                }
            })
            navigation.setOptions({ headerTitle: data.title })
        }, 800)

    }, [])
    
    const rightFun = () => {
        if (fvrt) {
            const fvMeal = props?.foodRecipeReducer?.favoriteMeals.filter((item) => item.id != displayMeal.id)
            dispatch(props?.addFavoriteMeal(fvMeal))
            setTimeout(() => {
                navigation.goBack()
            }, 500)
            // Alert.alert('Message!', '\n' + displayMeal.title + ' is removed from Favorite Meals.')
        }
        else {
            let fvMeal = [props?.foodRecipeReducer?.selected_meal, ...props?.foodRecipeReducer?.favoriteMeals]
            dispatch(props?.addFavoriteMeal(fvMeal))
            // Alert.alert('Message!', '\n' + displayMeal.title + ' is added as your Favorite Meals.')
        }
        setFvrt(!fvrt)
    }
    const leftFun = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={[styles.container, displayMeal.title && { backgroundColor: Colors.primery }]}>
            <StatusBar 
                barStyle={displayMeal.title ? 'light-content' : 'dark-content'}
            />

            <Header
                leftFun={leftFun}
                title={displayMeal.title}
                rightFun={rightFun}
                status={displayMeal.title ? fvrt : null}
            />

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {!displayMeal.title
                    ? <ActivityIndicator color={Colors.primery} size='small' style={{ marginTop: 20 }} />
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

        </SafeAreaView>
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
        borderColor: Colors.primery,
        paddingHorizontal: 10,
        marginHorizontal: 30,
        borderTopWidth: 2,
        paddingTop: 10,
        marginTop: 20,
    },
})

const mapStateToProps = ({ foodRecipeReducer }) => ({ foodRecipeReducer })

export default connect(mapStateToProps, {
    addFavoriteMeal,
})(MealDetails)

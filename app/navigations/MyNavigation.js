// LINK:  https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/31197710#overview
// LINK:  https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/31197712#overview
import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    Text,
} from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { Colors } from '../styles/color'

import AppRoute from '../AppRoute'

// GAME NAVIGATIONS
import Game from '../game/index'

// FOOD RECIPE NAVIGATIONS
import FoodRecipes from '../FoodRecipes/index'
import MealsScreen from '../FoodRecipes/MealsScreen'
import MealDetails from '../FoodRecipes/MealDetails'
import MyFavoriteMeals from '../FoodRecipes/MyFavoriteMeals'

// STICKY NAVIGATIONS
import StickyApp from '../StickyApp/index'
import AddNote from '../StickyApp/AddNote'
import ViewNote from '../StickyApp/ViewNote'
import EditNote from '../StickyApp/EditNote'

// SLACK APP
import Login from '../Slack_app/index'
import Register from '../Slack_app/Register'
import Forgot from '../Slack_app/Forgot'
import Home from '../Slack_app/Home'
import Profile from '../Slack_app/Profile'
import AboutApp from '../Slack_app/AboutApp'
import ChangeEmail from '../Slack_app/ChangeEmail'
import ChangePassword from '../Slack_app/ChangePassword'

const Stack = createNativeStackNavigator()

const myNav = () => {

    const myLink = (title, onPress, img) => {
        return (
            title != null && < TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.link} >
                {img != null && <Image source={img} style={styles.img} />}
                {title && <Text style={styles.linkText}>{title}</Text>}
            </TouchableOpacity >
        )
    }
    const myTitle = (title) => {
        return (
            title && <Text style={styles.title}>{title}</Text>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{
                    headerTitleStyle: styles.headerTitleStyle,
                    headerStyle: styles.headerStyle,
                    headerBackTitleVisible: false, // hide backScreen name
                    headerTintColor: Colors.white,
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerShown: true,
                    headerBackVisible: false, // hide back arrrow icon
                }}
            >
                <Stack.Screen
                    name='AppRoute'
                    component={AppRoute}
                    options={{
                        // title: 'INITIAL SCREEN',
                        headerTitle: () => myTitle(`Initial Screen`),
                        headerLeft: () => myLink('', () => { console.log('left') }),
                        headerRight: () => myLink('', () => { console.log('right') }),
                    }}
                />

                {/* GAME */}
                <Stack.Screen
                    name='Game'
                    component={Game}
                    options={{
                        headerTitle: () => myTitle(`GAME APP`),
                    }}
                />

                {/* Food Recipes APP */}
                <Stack.Screen
                    name='FoodRecipes'
                    component={FoodRecipes}
                    options={{
                        headerTitle: () => myTitle(`FOOD RECIPES`),
                    }}
                />
                <Stack.Screen
                    name='MealsScreen'
                    component={MealsScreen}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
                    // options={({ route, navigation }) => {
                    //     const item = route.params.item
                    //     return {
                    //         // headerTitle: () => myTitle(item.title),
                    //     }
                    // }}
                />
                <Stack.Screen
                    name='MealDetails'
                    component={MealDetails}
                    options={{
                        headerTitle: () => myTitle(' '),
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='MyFavoriteMeals'
                    component={MyFavoriteMeals}
                    options={{
                        headerTitle: () => myTitle('Favorite Meals'),
                    }}
                />

                {/* STICKY NOTE APP */}
                <Stack.Screen
                    name='StickyApp'
                    component={StickyApp}
                    options={{
                        headerTitle: () => myTitle('Sticky Notes'),
                    }}
                />
                <Stack.Screen
                    name='AddNote'
                    component={AddNote}
                    options={{
                        headerTitle: () => myTitle('Add Note'),
                    }}
                />
                <Stack.Screen
                    name='ViewNote'
                    component={ViewNote}
                    options={{
                        headerTitle: () => myTitle('View Note'),
                    }}
                />
                <Stack.Screen
                    name='EditNote'
                    component={EditNote}
                    options={{
                        headerTitle: () => myTitle('Edit Note'),
                    }}
                />

                {/* SLACK APP */}
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
                />
                <Stack.Screen
                    name='Register'
                    component={Register}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
                />
                <Stack.Screen
                    name='Forgot'
                    component={Forgot}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
                />
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
                />
                <Stack.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
                />
                <Stack.Screen
                    name='AboutApp'
                    component={AboutApp}
                    options={{
                        headerTitle: () => myTitle('About App'),
                    }}
                />
                <Stack.Screen
                    name='ChangePassword'
                    component={ChangePassword}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
                />
                <Stack.Screen
                    name='ChangeEmail'
                    component={ChangeEmail}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
    },
    title: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '500',
        fontSize: 16,
    },
    link: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    img: {
        marginRight: 8,
    },
    linkText: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '500',
        fontSize: 14,
    },
    headerStyle: {
        backgroundColor: Colors.primery,
    },
    headerTitleStyle: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '500',
        fontSize: 16,
    },
})

export default myNav

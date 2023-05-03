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

// IBRAHIM ASSOCIATE NAVIGATIONS


// MY PERFECT WORDS NAVIGATIONS


// BLOG NAVIGATIONS
import Blog from '../Blog/index'
import BlogDetail from '../Blog/BlogDetail'


// STICKY NOTES NAVIGATIONS


// KITCHEN RECIPE NAVIGATIONS DONE
import KitchenRecipe from '../KitchenRecipe/index'
import AllMealsScreen from '../KitchenRecipe/AllMealsScreen'
import MealDetails from '../KitchenRecipe/MealDetails'
import MyFavoriteMeals from '../KitchenRecipe/MyFavoriteMeals'


// FOOD DELIVERY NAVIGATIONS


// CRM NAVIGATIONS


// GUESS NUMBER GAME NAVIGATIONS DONE
import GuessNumberGame from '../GuessNumberGame/index'



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

// DataDriven
// import DataDriven from '../DataDriven/index'
// import DealItemDetail from '../DataDriven/DealItemDetail'

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
                initialRouteName='AppRoute'
                screenOptions={{
                    headerBackTitleVisible: false, // hide back Screen title
                    headerBackVisible: true, // hide back arrrow icon
                    headerTitleStyle: styles.headerTitleStyle,
                    headerStyle: styles.headerStyle,
                    headerTintColor: Colors.white,
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerShown: true,
                }}
            >
                {/* =============================
                    APP ROUTE
                ============================= */}
                <Stack.Screen
                    name='AppRoute'
                    component={AppRoute}
                    options={{
                        headerTitle: () => myTitle(`my apps`),
                        headerLeft: () => myLink('', () => { console.log('left') }),
                        headerRight: () => myLink('', () => { console.log('right') }),
                    }}
                />

                {/* =============================
                    KITCHEN RECIPE APP
                ============================= */}
                <Stack.Screen
                    name='KitchenRecipe'
                    component={KitchenRecipe}
                    options={{
                        headerTitle: () => myTitle(`Kitchen RECIPES`),
                    }}
                />
                <Stack.Screen
                    name='AllMealsScreen'
                    component={AllMealsScreen}
                    options={{
                        headerTitle: () => myTitle(''),
                    }}
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

                {/* =============================
                    GAME APP
                ============================= */}
                <Stack.Screen
                    name='GuessNumberGame'
                    component={GuessNumberGame}
                    options={{
                        headerTitle: () => myTitle(`guess number GAME`),
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

                {/* DataDriven */}
                <Stack.Screen
                    name='Blog'
                    component={Blog}
                    options={{
                        headerTitle: () => myTitle('latest Blog post'),
                    }}
                />
                <Stack.Screen
                    name='BlogDetail'
                    component={BlogDetail}
                    options={{
                        headerTitle: () => myTitle(''),
                        headerBackVisible: true,
                        headerShown: true,
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

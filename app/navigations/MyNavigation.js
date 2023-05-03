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

// APP ROUTE NAVIGATIONS
import AppRoute from '../AppRoute'


// IBRAHIM ASSOCIATE NAVIGATIONS


// MY PERFECT WORDS NAVIGATIONS
import MPW_Login from '../MyPerfectWords/index'
import MPW_Register from '../MyPerfectWords/Register'
import MPW_Forgot from '../MyPerfectWords/Forgot'
import MPW_Home from '../MyPerfectWords/Home'
import MPW_Profile from '../MyPerfectWords/Profile'
import MPW_AboutApp from '../MyPerfectWords/AboutApp'
import MPW_ChangeEmail from '../MyPerfectWords/ChangeEmail'
import MPW_ChangePassword from '../MyPerfectWords/ChangePassword'


// BLOG NAVIGATIONS DONE
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
                initialRouteName='MPW_Login'
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
                    APP ROUTE DONE
                ============================= */}
                <>
                    <Stack.Screen
                        name='AppRoute'
                        component={AppRoute}
                        options={{
                            headerTitle: () => myTitle(`my apps`),
                            headerLeft: () => myLink('', () => { console.log('left') }),
                            headerRight: () => myLink('', () => { console.log('right') }),
                        }}
                    />
                </>
                {/* =============================
                    IBRAHIM ASSOCIATES APP
                ============================= */}


                {/* =============================
                    MY PERFECT WORDS APP
                ============================= */}
                <>
                    <Stack.Screen
                        name='MPW_Login'
                        component={MPW_Login}
                        options={{
                            headerTitle: () => myTitle(''),
                        }}
                    />
                    <Stack.Screen
                        name='MPW_Register'
                        component={MPW_Register}
                        options={{
                            headerTitle: () => myTitle(''),
                        }}
                    />
                    <Stack.Screen
                        name='MPW_Forgot'
                        component={MPW_Forgot}
                        options={{
                            headerTitle: () => myTitle(''),
                        }}
                    />
                    <Stack.Screen
                        name='MPW_Home'
                        component={MPW_Home}
                        options={{
                            headerTitle: () => myTitle(''),
                            headerBackVisible: false,
                        }}
                    />
                    <Stack.Screen
                        name='MPW_Profile'
                        component={MPW_Profile}
                        options={{
                            headerTitle: () => myTitle(''),
                        }}
                    />
                    <Stack.Screen
                        name='MPW_AboutApp'
                        component={MPW_AboutApp}
                        options={{
                            headerTitle: () => myTitle('About App'),
                        }}
                    />
                    <Stack.Screen
                        name='MPW_ChangePassword'
                        component={MPW_ChangePassword}
                        options={{
                            headerTitle: () => myTitle(''),
                        }}
                    />
                    <Stack.Screen
                        name='MPW_ChangeEmail'
                        component={MPW_ChangeEmail}
                        options={{
                            headerTitle: () => myTitle(''),
                        }}
                    />
                </>
                {/* =============================
                    BLOG APP DONE
                ============================= */}
                <>
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
                </>
                {/* =============================
                    APP ROUTE
                ============================= */}
                {/* =============================
                    APP ROUTE
                ============================= */}
                {/* =============================
                    APP ROUTE
                ============================= */}
                {/* =============================
                    APP ROUTE
                ============================= */}
                {/* =============================
                    APP ROUTE
                ============================= */}


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

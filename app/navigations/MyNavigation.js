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
import Game from '../game/index'

import Food from '../FoodApp/index'
import MealsOverview from '../FoodApp/MealsOverviewScreen'
import MealDetails from '../FoodApp/MealDetails'

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
                initialRouteName='AppRoute'
                screenOptions={{
                    headerTitleStyle: styles.headerTitleStyle,
                    headerStyle: styles.headerStyle,
                    headerBackTitleVisible: false, // hide backScreen name
                    headerTintColor: Colors.white,
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerShown: true,
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
                <Stack.Screen
                    name='Game'
                    component={Game}
                    options={{
                        headerTitle: () => myTitle(`GAME APP`),
                    }}
                />
                
                <Stack.Screen
                    name='Food'
                    component={Food}
                    options={{
                        headerTitle: () => myTitle(`FOOD APP`),
                    }}
                />
                <Stack.Screen
                    name='MealsOverview'
                    component={MealsOverview}
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
                        headerTitle: () => myTitle('Meal Details'),
                    }}
                />

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
        backgroundColor: Colors.buttonColor,
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
import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Image,
    Text,
    View,
} from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { Colors } from './app/styles/color'

import AppRoute from './app/AppRoute'
import Game from './app/game/index'
import Food from './app/FoodApp/index'
import MealsOverview from './app/FoodApp/MealsOverviewScreen'
import MealDetails from './app/FoodApp/MealDetails'

const Stack = createNativeStackNavigator()

const App = () => {

    const myLink = (title, onPress, img) => {
        return (
            title !=null && < TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.link} >
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
        <View style={styles.contanier}>
            <StatusBar barStyle='light-content' />

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
                            headerRight: () => myLink('',() => {console.log('right')}),
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
                </Stack.Navigator>
            </NavigationContainer>  
        </View>

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
        marginRight: 8
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

export default App

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
const Stack = createNativeStackNavigator()

import { Colors } from '../styles/color'

// APP ROUTE NAVIGATIONS
import AppRoute from '../AppRoute'


// IBRAHIM ASSOCIATE NAVIGATIONS
import IbrahimAssociate from '../IbrahimAssociate/index'
import IB_PostDetail from '../IbrahimAssociate/PostDetail'
import IB_Create from '../IbrahimAssociate/CreatePost'
import IB_Edit from '../IbrahimAssociate/EditPost'


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
import StickyNote from '../StickyNote/StickyNote'
import AddNote from '../StickyNote/AddNote'
import ViewNote from '../StickyNote/ViewNote'
import EditNote from '../StickyNote/EditNote'


// KITCHEN RECIPE NAVIGATIONS DONE
import KitchenRecipe from '../KitchenRecipe/index'
import AllMealsScreen from '../KitchenRecipe/AllMealsScreen'
import MealDetails from '../KitchenRecipe/MealDetails'
import MyFavoriteMeals from '../KitchenRecipe/MyFavoriteMeals'


// FOOD DELIVERY NAVIGATIONS


// CRM NAVIGATIONS
import CRM_People from '../CRM/screens/Peoples'
import CRM_Companies from '../CRM/screens/companies'


// GUESS NUMBER GAME NAVIGATIONS DONE
import GuessNumberGame from '../GuessNumberGame/index'


// VECTOR ICONS
import VectorIcons from '../VectorIcons/index'
import VI_AntDesign from '../VectorIcons/screens/AntDesign'
import VI_Entypo from '../VectorIcons/screens/Entypo';
import VI_EvilIcons from '../VectorIcons/screens/EvilIcons'
import VI_Feather from '../VectorIcons/screens/Feather'
import VI_FontAwesome5 from '../VectorIcons/screens/Fontawesome5'
import VI_FontAwesome5Brands from '../VectorIcons/screens/fontAwesome5Brands'
import VI_FontAwesome5Regular from '../VectorIcons/screens/FontAwesome5Regular'
import VI_FontAwesome5Solid from '../VectorIcons/screens/FontAwesome5Solid'
import VI_Fontisto from '../VectorIcons/screens/Fontisto'
import VI_Foundation from '../VectorIcons/screens/Foundation'
import VI_IonicIcons from '../VectorIcons/screens/IonicIcons'
import VI_MaterialCommunityIcons from '../VectorIcons/screens/MaterialCommunityIcons'
import VI_MaterialIcons from '../VectorIcons/screens/MaterialIcons'
import VI_OctIcons from '../VectorIcons/screens/OctIcons'
import VI_SimpleLineIcons from '../VectorIcons/screens/SimpleLineIcons'
import VI_Zocial from '../VectorIcons/screens/Zocial'

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
                initialRouteName='App_Route'
                screenOptions={{
                    headerBackTitleVisible: false, // hide back Screen title
                    // headerBackVisible: true, // hide back arrrow icon
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
                <>
                    <Stack.Screen
                        name='IbrahimAssociate'
                        component={IbrahimAssociate}
                        options={{
                            headerTitle: () => myTitle(`Ibrahim Associate`),
                            headerStyle: { backgroundColor: Colors.crm },
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name='IB_PostDetail'
                        component={IB_PostDetail}
                        options={{
                            headerTitle: () => myTitle(`Post detail`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='IB_Create'
                        component={IB_Create}
                        options={{
                            headerTitle: () => myTitle(`Create Post`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='IB_Edit'
                        component={IB_Edit}
                        options={{
                            headerTitle: () => myTitle(`Edit Post`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                </>

                {/* =============================
                    MY PERFECT WORDS APP
                ============================= */}
                <>
                    <Stack.Screen
                        name='MPW_Login'
                        component={MPW_Login}
                        options={{
                            headerTitle: () => myTitle(''),
                            headerShown: false,
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
                    BLOG APP
                ============================= */}
                <>
                    <Stack.Screen
                        name='Blog'
                        component={Blog}
                        options={{
                            headerTitle: () => myTitle('latest post'),
                        }}
                    />
                    <Stack.Screen
                        name='BlogDetail'
                        component={BlogDetail}
                        options={{
                            headerTitle: () => myTitle(''),
                        }}
                    />
                </>
                {/* =============================
                    STICKY NOTES APP
                ============================= */}
                <>
                    <Stack.Screen
                        name='StickyNote'
                        component={StickyNote}
                        options={{
                            headerTitle: () => myTitle('Sticky Note'),
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
                            headerTitle: () => myTitle(''),
                        }}
                    />
                </>
                {/* =============================
                    KITCHEN RECIPE APP
                ============================= */}
                <>
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
                </>
                {/* =============================
                    BAHRIA DELIVERY APP
                ============================= */}
                <></>
                {/* =============================
                    CRM APP
                ============================= */}
                <>
                    <Stack.Screen
                        name='CRM_Peoples'
                        component={CRM_People}
                        options={{
                            headerTitle: () => myTitle(`Peoples`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='CRM_Companies'
                        component={CRM_Companies}
                        options={{
                            headerTitle: () => myTitle(`Companies`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                </>
                {/* =============================
                    GUESS NUMBER GAME APP
                ============================= */}
                <>
                    <Stack.Screen
                        name='GuessNumberGame'
                        component={GuessNumberGame}
                        options={{
                            headerTitle: () => myTitle(`guess number GAME`),
                        }}
                    />
                </>
                {/* =============================
                    VECTOR ICONS APP
                ============================= */}
                <>
                    <Stack.Screen
                        name='VectorIcons'
                        component={VectorIcons}
                        options={{
                            headerTitle: () => myTitle(`Vector Icons List`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />

                    <Stack.Screen
                        name='VI_AntDesign'
                        component={VI_AntDesign}
                        options={{
                            headerTitle: () => myTitle(`AntDesign Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='VI_Entypo'
                        component={VI_Entypo}
                        options={{
                            headerTitle: () => myTitle(`Entypo Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='VI_EvilIcons'
                        component={VI_EvilIcons}
                        options={{
                            headerTitle: () => myTitle(`Evil Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='VI_Feather'
                        component={VI_Feather}
                        options={{
                            headerTitle: () => myTitle(`Feather Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='VI_FontAwesome5'
                        component={VI_FontAwesome5}
                        options={{
                            headerTitle: () => myTitle(`FontAwesome5 Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='VI_FontAwesome5Brands'
                        component={VI_FontAwesome5Brands}
                        options={{
                            headerTitle: () => myTitle(`FontAwesome Brand Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='VI_FontAwesome5Regular'
                        component={VI_FontAwesome5Regular}
                        options={{
                            headerTitle: () => myTitle(`FontAwesome Regular Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='VI_FontAwesome5Solid'
                        component={VI_FontAwesome5Solid}
                        options={{
                            headerTitle: () => myTitle(`FontAwesome Solid Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='VI_Fontisto'
                        component={VI_Fontisto}
                        options={{
                            headerTitle: () => myTitle(`Fontisto Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='VI_Foundation'
                        component={VI_Foundation}
                        options={{
                            headerTitle: () => myTitle(`Foundation Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='VI_IonicIcons'
                        component={VI_IonicIcons}
                        options={{
                            headerTitle: () => myTitle(`Ionic Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='VI_MaterialCommunityIcons'
                        component={VI_MaterialCommunityIcons}
                        options={{
                            headerTitle: () => myTitle(`Material Community Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='VI_MaterialIcons'
                        component={VI_MaterialIcons}
                        options={{
                            headerTitle: () => myTitle(`Material Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='VI_OctIcons'
                        component={VI_OctIcons}
                        options={{
                            headerTitle: () => myTitle(`Oct Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='VI_SimpleLineIcons'
                        component={VI_SimpleLineIcons}
                        options={{
                            headerTitle: () => myTitle(`Simple Line Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                    <Stack.Screen
                        name='VI_Zocial'
                        component={VI_Zocial}
                        options={{
                            headerTitle: () => myTitle(`Zocial Icons`),
                            headerStyle: { backgroundColor: Colors.crm },
                        }}
                    />
                </>
                
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

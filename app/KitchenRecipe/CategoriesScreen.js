import React, { useLayoutEffect } from 'react'
import {
    TouchableOpacity,
    FlatList,
    Image,
 } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { connect, useDispatch } from 'react-redux'

import { setSelectedCategory } from '../redux/actions/kitchenRecipeReducer'
import CategoryGridTile from './components/CategoryGridTile'

const favorite = require('./assets/favorite.png')

const CategoriesScreen = (props) => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const headerButtonPressHandler = () => {
        navigation.navigate('MyFavoriteMeals')
    }

    // for navigation header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity onPress={headerButtonPressHandler} activeOpacity={0.8} >
                        <Image source={favorite} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                )
            },
        })
    }, [navigation, headerButtonPressHandler])

    const renderCategoryItem = (itemData) => {

        const pressHandler = () => {
            dispatch(props?.setSelectedCategory(itemData.item))
            navigation.navigate('AllMealsScreen')
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }

    return (
        <FlatList
            contentContainerStyle={{ paddingBottom: 20 }}
            data={props.kitchenRecipeReducer.mealCategory}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

const mapStateToProps = ({ kitchenRecipeReducer }) => ({ kitchenRecipeReducer })

export default connect(mapStateToProps, {
    setSelectedCategory,
})(CategoriesScreen)

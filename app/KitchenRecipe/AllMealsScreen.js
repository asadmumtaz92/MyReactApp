import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    FlatList,
    View,
} from 'react-native'

import { Colors } from '../styles/color'
import MealItem from './components/MealItem'

import { connect } from 'react-redux'

const AllMealsScreen = ({ navigation, ...props }) => {

    const [displayMeal, setDisplayMeal] = useState([])

    useEffect(() => {
        setTimeout(() => {
            navigation.setOptions({
                headerTitle: props?.kitchenRecipeReducer?.selected_category?.title,
            })

            const result = props?.kitchenRecipeReducer?.meals.filter((items) => {
                return items.categoryIds.indexOf(props?.kitchenRecipeReducer?.selected_category?.id) >= 0
            })
            setDisplayMeal(result)
        }, 500)
    }, [])

    const renderItem = (item) => {
        return <MealItem itemData={item.item} />
    }

    return (
        <View style={styles.container}>
            {!displayMeal.length 
                ? <ActivityIndicator color={Colors.primery} size='small' style={{ marginTop: 20 }} />
                : <FlatList
                    data={displayMeal}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
})

const mapStateToProps = ({ kitchenRecipeReducer }) => ({ kitchenRecipeReducer })

export default connect(mapStateToProps, {
})(AllMealsScreen)

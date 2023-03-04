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

const MealsScreen = ({ navigation, ...props }) => {

    const [displayMeal, setDisplayMeal] = useState([])

    useEffect(() => {
        setTimeout(() => {
            navigation.setOptions({
                headerTitle: props?.foodRecipeReducer?.selected_category?.title,
            })

            const result = props?.foodRecipeReducer?.meals.filter((items) => {
                return items.categoryIds.indexOf(props?.foodRecipeReducer?.selected_category?.id) >= 0
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

const mapStateToProps = ({ foodRecipeReducer }) => ({ foodRecipeReducer })

export default connect(mapStateToProps, {
})(MealsScreen)

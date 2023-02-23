import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    FlatList,
    View,
} from 'react-native'

import { Colors } from '../styles/color'
import MealItem from './components/MealItem'
import { MEALS } from './constantData/dummy_data'

const MealsOverviewScreen = ({ route, navigation }) => {

    const [displayMeal, setDisplayMeal] = useState([])

    useEffect(() => {
        const item = route.params.item

        navigation.setOptions({
            headerTitle: item.title,
        })
        setTimeout(() => {
            const result = MEALS.filter((items) => {
                return items.categoryIds.indexOf(item.id) >= 0
            })
            setDisplayMeal(result)
        }, 800)

    }, [])

    const renderItem = (item) => {
        let itemData = item.item
        return <MealItem itemData={itemData} />
    }

    return (
        <View style={styles.container}>
            {!displayMeal.length 
                ? <ActivityIndicator color={Colors.buttonColor} size='small' style={{ marginTop: 20 }} />
                : <FlatList
                    data={displayMeal}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            }
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
});

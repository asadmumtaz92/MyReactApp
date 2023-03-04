import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    FlatList,
    View,
    Text,
} from 'react-native'

import { useIsFocused } from '@react-navigation/native'
import { connect } from 'react-redux'

import { Colors } from '../styles/color'
import MealItem from './components/MealItem'

const MyFavoriteMeal = ({ navigation, ...props }) => {

    const [displayMeal, setDisplayMeal] = useState([])
    const [loader, setLoader] = useState(false)
    const isFocused = useIsFocused()

    useEffect(() => {
        if (isFocused) {
            setLoader(true)

            setTimeout(() => {
                setDisplayMeal(props?.foodRecipeReducer?.favoriteMeals)
                setLoader(false)
            }, 500)
        }
    }, [isFocused])

    const renderItem = (item) => {
        return <MealItem itemData={item.item} />
    }

    return (
        <View style={styles.container}>
            {loader
                ? <ActivityIndicator color={Colors.primery} size='small' style={{ marginTop: 20 }} />
                : displayMeal.length > 0
                    ? <FlatList
                        data={displayMeal}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                    : <View style={styles.noDataBox}>
                        <Text style={styles.noDataText}>{`You Don't Have Any Favorite Meal Yet.`}</Text>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    noDataBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
        marginTop: -30,
        flex: 1,
    },
    noDataText: {
        color: Colors.primery,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 22,
    },
})

const mapStateToProps = ({ foodRecipeReducer }) => ({ foodRecipeReducer })

export default connect(mapStateToProps, {
})(MyFavoriteMeal)

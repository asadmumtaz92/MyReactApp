import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native'
import { Colors } from '../styles/color'

import CategoriesScreen from './CategoriesScreen.js'

const Index = () => {

    return (
        <SafeAreaView style={styles.contanier}>
            
            <CategoriesScreen />
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.foodBG,
        minWidth: '100%',
    },
})

export default Index

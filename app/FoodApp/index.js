import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
} from 'react-native'

import { gStyles } from '../styles/globalStyle'
import { Colors } from '../styles/color'

import CategoriesScreen from './CategoriesScreen.js'

const Index = () => {

    return (
        <SafeAreaView style={styles.contanier}>

            <StatusBar barStyle='light-content' />
            
            <CategoriesScreen />
            
            <>
                {/* <View style={styles.view}>

                    <Text style={[gStyles.title, { marginTop: 0, }]}>
                        {`This is Food App`}
                    </Text>

                    <CategoriesScreen />

                </View> */}
            </>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: '#24180f',//Colors.white,
        minWidth: '100%',
    },
})

export default Index

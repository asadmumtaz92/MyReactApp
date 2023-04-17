import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native'

import { Colors } from './styles/color'
import { StatusBar } from 'react-native'

import { connect, useDispatch } from 'react-redux'
import { addition, substruction } from './redux/actions/calculator'

const AppRoute = (props) => {

    const dispatch = useDispatch()

    const changeScreen = (appStatus) => {
        props.navigation.navigate(appStatus)
    }

    return (
        <View style={styles.contanier}>
            <StatusBar barStyle='light-content' />

            <View style={styles.view}>
                <>
                    {/* <TouchableOpacity onPress={() => dispatch(addition()) } style={styles.btn} activeOpacity={0.9}>
                        <Text style={styles.btnText}>ADD</Text>
                    </TouchableOpacity>

                    <Text>Counter val is: { props?.calculatorReducer?.counter}</Text>

                    <TouchableOpacity onPress={() => dispatch(substruction()) } style={styles.btn} activeOpacity={0.9}>
                        <Text style={styles.btnText}>MINUS</Text>
                    </TouchableOpacity> */}
                </>

                <TouchableOpacity onPress={() => changeScreen('Login')} style={styles.btn} activeOpacity={0.9}>
                    <Text style={styles.btnText}>Slack App</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => changeScreen('Game')} style={styles.btn} activeOpacity={0.9}>
                    <Text style={styles.btnText}>GAME</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={() => changeScreen('FoodDelivery')} style={styles.btn} activeOpacity={0.9}>
                    <Text style={styles.btnText}>Food Recipes</Text>
                </TouchableOpacity> */}

                <TouchableOpacity onPress={() => changeScreen('FoodRecipes')} style={styles.btn} activeOpacity={0.9}>
                    <Text style={styles.btnText}>food Delivery</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => changeScreen('StickyApp')} style={styles.btn} activeOpacity={0.9}>
                    <Text style={styles.btnText}>STICKT NOTE</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => changeScreen('DataDriven')} style={styles.btn} activeOpacity={0.9}>
                    <Text style={styles.btnText}>Data Driven</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100%',
        width: '100%',
        flex: 1,
    },
    btn: {
        backgroundColor: Colors.primery,
        alignSelf: 'center',
        marginVertical: 13,
        borderRadius: 5,
        width: '60%',
    },
    btnText: {
        textTransform: 'uppercase',
        color: Colors.white,
        paddingVertical: 13,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 18,
    },
})

const mapStateToProps = ({ calculatorReducer }) => ({ calculatorReducer })

export default connect(mapStateToProps, {
    addition,
    substruction,
})(AppRoute)

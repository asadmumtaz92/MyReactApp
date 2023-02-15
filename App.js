import React, { useState, useEffect, Component } from 'react'
import {
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    TextInput,
    Keyboard,
    FlatList,
    Text,
    View,
} from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const App = () => {

    const [goal, setGoal] = useState('')
    const [courseGoal, setCourseGoal] = useState([])

    const goalInputHandler = (enteredText) => {
        setGoal(enteredText)
    }
    const onSubmit = () => {
        console.log(goal)
        setCourseGoal((currentGoal) => [...currentGoal, {text: goal, id: courseGoal.length}])
        setGoal('')
    }

    return (
        <SafeAreaView>

            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {`REACT NATIVE COURSE`}
                </Text>
            </View>

            <View style={[styles.contanier, {marginBottom: 40}]}>

                <KeyboardAwareScrollView >
                    
                    <Text style={styles.title}>{`Flex Box Layout`}</Text>
                    <View style={styles.mainBox}>
                        <View style={[styles.box, { backgroundColor: 'red' }]}><Text>1</Text></View>
                        <View style={[styles.box, { backgroundColor: 'green' }]}><Text>2</Text></View>
                        <View style={[styles.box, { backgroundColor: 'blue' }]}><Text>3</Text></View>
                        <View style={[styles.box, { backgroundColor: 'yellow' }]}><Text>4</Text></View>
                    </View>

                    <>
                        <Text style={styles.title}>{`Add Course Goal`}</Text>
                        <View style={styles.goalBox}>
                            <TextInput
                                placeholder='Enter your course goal...'
                                placeholderTextColor={'#cccccc'}
                                style={styles.textInput}
                                value={goal}
                                // onChangeText={text => {
                                //     goalInputHandler(text)
                                // }}
                                onChangeText={goalInputHandler}
                                numberOfLines={1}
                                multiline={false}
                                autoFocus={false}
                                onSubmitEditing={() => {
                                    Keyboard.dismiss
                                }}
                                onBlur={() => { Keyboard.dismiss }}
                                textContentType='name'
                            />

                            {goal.length > 0 
                                ? <TouchableOpacity
                                    style={styles.button} activeOpacity={0.7}
                                    onPress={() => { onSubmit(goal) }}
                                >
                                    <Text style={styles.buttonText}>{`Add Me`}</Text>
                                </TouchableOpacity>
                                : null
                            }
                        </View>
                        <View style={{ marginTop: 10, borderTopWidth: 0.6, marginBottom: 30 }}>
                            <Text>DATA SHOW WITH MAP</Text>
                            {courseGoal.map((item, index) => {
                                return( <TouchableOpacity
                                        style={styles.itemButton} activeOpacity={0.7}
                                        key={index} onPress={() => {
                                            console.log('Index # ', index)
                                        }} 
                                    >
                                    <Text style={styles.itemText}>{index+1}. {item.text}</Text>
                                </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={{ marginTop: 10, borderTopWidth: 0.6, marginBottom: 30 }}>
                            <Text>DATA SHOW WITH FLATLIST</Text>
                            <FlatList
                                data={courseGoal}
                                keyExtractor={(item, index)=>{return item.id}}
                                renderItem={(item) => {
                                    let text = item.item.text
                                    let id = item.item.id
                                    return (
                                        <TouchableOpacity
                                            style={styles.itemButton} activeOpacity={0.7}
                                            key={id} onPress={() => {
                                                console.log('Index # ', id)
                                            }}
                                        >
                                            <Text style={styles.itemText}>{id+1}. {text}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                                // scrollEnabled={false}
                            />
                        </View>
                    </>

                    {/* <Text style={styles.title}>{`Make Components`}</Text> */}

                </KeyboardAwareScrollView>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contanier: {
        paddingHorizontal: 20,
        width: '100%',
    },
    header: {
        backgroundColor: 'black',
        paddingVertical: 10,
        width: '100%',
    },
    headerText: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
    },
    title: {
        alignSelf: 'center',
        marginBottom: 10,
        fontWeight: '500',
        marginTop: 20,
        color: '#000',
        fontSize: 18,
    },
    // FLEX BOX
    mainBox: {
        justifyContent: 'space-between', // flex-start | flex-end | space-between | space-around | space-evenly | center
        paddingHorizontal: 20,
        alignItems: 'center', // baseline | stretch | center
        flexDirection: 'row', // 'row' | 'row-reverse' | 'column' | 'column-reverse'
        
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 70,
    },
    // Add Course Goal
    goalBox: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        paddingBottom: 20,
        width: '90%',
    },
    textInput: {
        paddingVertical: 5,
        borderWidth: 0.4,
        paddingLeft: 10,
        borderRadius: 8,
        height: 40,
        flex: 1,
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#0f0',
        paddingHorizontal: 15, 
        borderRadius: 8,
        marginLeft: 10,
        height: 40, 
    },
    buttonText: {
        fontWeight:'600',
        color: '#000',
    },
    itemButton:{
        backgroundColor: 'blue',
        paddingVertical: 10,
        alignSelf: 'center', 
        borderRadius: 5,
        marginTop: 15,
        width: '100%',
    },
    itemText: { 
        paddingHorizontal: 10,
        color: '#FFF',
        fontSize: 17,
    },
})

export default App

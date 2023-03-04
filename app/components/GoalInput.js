import React, { useState } from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Keyboard,
    Text,
    View,
} from 'react-native'

const GoalInput = props =>  {

    const [courseGoalText, setCourseGoalText] = useState('')

    const goalInputHandler = (text) => {
        setCourseGoalText(text)
    }

    const addCourseGoal = () => {
        props.onAddGoal(courseGoalText)
        setTimeout(() => {
            setCourseGoalText('')
        }, 100)
    }

    return (
        <View>
            <Text style={styles.title}>{`Add Course Goal`}</Text>
            <View style={styles.ipBox}>
                <TextInput
                    placeholder={props.placeholder}
                    placeholderTextColor={'#CCCCCC'}
                    style={styles.textInput}
                    value={courseGoalText}
                    // onChangeText={text => {
                    //     goalInputHandler(text)
                    // }} OR
                    onChangeText={goalInputHandler}
                    numberOfLines={1}
                    multiline={false}
                    autoFocus={false}
                    onSubmitEditing={() => {
                        Keyboard.dismiss
                        addCourseGoal()
                    }}
                    onBlur={() => { Keyboard.dismiss }}
                    textContentType='name'
                />

                {courseGoalText.length > 0
                    ? <TouchableOpacity
                        style={styles.button} activeOpacity={0.7}
                        onPress={() => { addCourseGoal() }}
                    >
                        <Text style={styles.buttonText}>{`Add Goal`}</Text>
                    </TouchableOpacity>
                    : null
                }
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        marginBottom: 10,
        fontWeight: '500',
        marginTop: 20,
        color: '#000',
        fontSize: 18,
    },
    ipBox: {
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
        fontWeight: '600',
        color: '#000',
    },
})

export default GoalInput

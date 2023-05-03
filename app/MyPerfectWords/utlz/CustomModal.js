import React, { useState } from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Modal,
    Image,
    View,
    Text,
} from 'react-native'

import { Colors } from '../../styles/color'

const CustomModal = ({
    title = '',
    desc = '',

    clickAbleLeft = () => { },
    buttonLeftText = '',
    buttonLeftStyle = {},
    buttonLeftTextStyle = {},
    
    clickAbleRight = () => { },
    buttonRightText = '',
    buttonRightStyle = {},
    buttonRightTextStyle = {},

    image = '',
    imageStyle = {},

}) => {

    const [modalVisible, setModalVisible] = useState(true)

    return (
        <View style={styles.centeredView}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible) }
            >
                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        {image
                            && <Image source={image} style={[styles.image, imageStyle && imageStyle]}/>
                        }
                        {title 
                            && <Text style={styles.title}>{title}</Text>
                        }
                        {desc 
                            && <Text style={styles.desc}>{desc}</Text>
                        }

                        <View style={styles.buttonBox}>
                            {buttonLeftText
                                && <TouchableOpacity
                                    style={[styles.button, buttonLeftStyle && buttonLeftStyle]}
                                    onPress={() => {
                                        clickAbleLeft(); setModalVisible(false)
                                    }}
                                >
                                    <Text style={[styles.buttonText, buttonLeftTextStyle && buttonLeftTextStyle]}>
                                        {buttonLeftText}
                                    </Text>
                                </TouchableOpacity>
                            }

                            {buttonRightText 
                                && <TouchableOpacity
                                    style={[styles.button, buttonRightStyle && buttonRightStyle]}
                                    onPress={() => {
                                        clickAbleRight(); setModalVisible(false)
                                    }}
                                >
                                    <Text style={[styles.buttonText, buttonRightTextStyle && buttonRightTextStyle]}>
                                        {buttonRightText}
                                    </Text>
                                </TouchableOpacity>
                            }
                        </View>

                    </View>

                </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    modalView: {
        width: Dimensions.get('window').width - 70,
        backgroundColor: Colors.white,
        paddingHorizontal: 15,
        paddingVertical: 30,
        borderRadius: 15,

        shadowColor: Colors.black,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 3,
    },
    image: {
        alignSelf: 'center',
        marginBottom: 10,
        maxHeight: 45,
        maxWidth: 45,
    },
    title: {
        color: Colors.primery,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: 15,
        fontSize: 22,
    },
    desc: {
        color: Colors.black,
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: 4,
        fontWeight: '400',
        marginBottom: 20,
        lineHeight: 22,
        fontSize: 16,
    },
    buttonBox: {
        justifyContent:'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: Colors.primery,
        paddingHorizontal: 30,
        paddingVertical: 8,
        alignSelf: 'center',
        borderRadius: 8,

        shadowColor: Colors.black,
        shadowOpacity: 0.4,
        shadowRadius: 2,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        elevation: 3,
    },
    buttonText: {
        color: Colors.white,
        fontWeight: '700',
        fontSize: 18,
        textAlign: 'center',
        textTransform:'uppercase',
    },
})

export default CustomModal

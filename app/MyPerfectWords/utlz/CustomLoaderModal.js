import React, { useState } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Modal,
    View,
} from 'react-native'

import { Colors } from '../../styles/color'

const CustomLoaderModal = () => {

    const [modalVisible, setModalVisible] = useState(true)

    return (
        <View style={styles.centeredView}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible) }
            >
                <View style={styles.centeredView}>

                    <ActivityIndicator size='large' color={Colors.primery} />

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
})

export default CustomLoaderModal

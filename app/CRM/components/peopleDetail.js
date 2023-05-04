import React from "react"
import {
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    Modal,
    View,
    Text,
} from 'react-native'

import { Colors } from '../styles/color'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

import { connect } from 'react-redux'

const PeopleDetail = (props) => {

    const peopleData = props?.peopleReducer?.selectedPeople

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={() => props?.hidePeoDetail()}
        >
            <TouchableOpacity
                style={{ height: deviceHeight / 100 * 19, }}
                onPress={() => props?.hidePeoDetail()}
                activeOpacity={0.99}
            />

            <View style={styles.centeredView}>

                <View style={styles.modalView}>
                    <TouchableOpacity
                        style={styles.closeBtn}
                        onPress={() => props?.hidePeoDetail()}
                        activeOpacity={0.99}
                    >
                        <SimpleLineIcons name="close" style={{ fontSize: 20, color: Colors.primery, borderRadius: 20, }} />
                    </TouchableOpacity>

                    <View style={styles.imageBox}>
                        {peopleData?.image ?
                            <Image
                                source={{ uri: peopleData?.image}}
                                style={styles.compImg}
                                resizeMode="contain"
                            />
                            : <View style={styles.imageAltBox}>
                                <Text style={[styles.imageAltText,]}>
                                    {`${peopleData?.firstname.substring(0, 1)}${peopleData?.lastname.substring(0, 1)}`}
                                </Text>
                            </View>
                        }
                    </View>

                    <View style={styles.detailBox}>
                        <Text style={styles.username}>
                            {`${peopleData.firstname} ${peopleData.lastname}`}
                        </Text>
                        <View style={styles.detailBoxItem}>
                            <Text style={styles.desc}>{`Designation:`}</Text>
                            <Text style={styles.detail}>{`${peopleData?.desig}`}</Text>
                        </View>
                        <View style={styles.detailBoxItem}>
                            <Text style={styles.desc}>{`Company:`}</Text>
                            <Text style={styles.detail}>{`${peopleData?.company}`}</Text>
                        </View>
                        <View style={styles.detailBoxItem}>
                            <Text style={styles.desc}>{`Phone #:`}</Text>
                            <Text style={styles.detail}>{`${peopleData?.phone}`}</Text>
                        </View>
                        <View style={styles.detailBoxItem}>
                            <Text style={styles.desc}>{`Project:`}</Text>
                            <Text style={styles.detail}>{`${peopleData?.project}`}</Text>
                        </View>
                    </View>
                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    modalView: {
        borderTopColor: Colors.primery,
        backgroundColor: Colors.white,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        width: deviceWidth,
        borderTopWidth: 5,
        height: '100%',
    },
    closeBtn: {
        backgroundColor: '#FFFFFF33',
        position: 'absolute',
        borderRadius: 20,
        padding: 3,
        zIndex: 2,
        right: 3,
        top: 2,
    },
    compImg: {
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        width: deviceWidth,
        minHeight: 250,
        maxHeight: 250,
        marginTop: 10,
        width: '100%',
        height: 250,
    },
    username: {
        textTransform: 'uppercase',
        color: Colors.black,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 12,
        fontWeight: '700',
        marginBottom: 20,
        marginTop: 25,
        fontSize: 20,
    },
    imageBox: {
        justifyContent:'center',
        alignItems: 'center',
        height: 250,
    },
    imageAltBox: {
        backgroundColor: Colors.lightgray,
        borderRadius: 10,
        padding: 50,
    },
    imageAltText: {
        textTransform: 'uppercase',
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 50,
    },
    detailBox: {
        paddingHorizontal: 20, 
        paddingBottom: 30,
    },
    detailBoxItem: {
        borderBottomWidth: 0.2,
        flexDirection: 'row',
        marginVertical: 7,
        paddingBottom: 4,
    },
    desc: {
        fontWeight: '700',
        fontSize: 16,
        flex: 1,
    },
    detail: {
        fontWeight: '300',
        fontSize: 16,
        flex: 2,
    },
})

const mapStateToProps = ({ peopleReducer }) => ({ peopleReducer })

export default connect(mapStateToProps, {

})(PeopleDetail)

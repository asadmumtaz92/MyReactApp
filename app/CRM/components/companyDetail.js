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

const CompaniesDetail = (props) => {

    const companyData = props?.companiesReducer?.selectedCompany
    // console.log('companyData:', companyData)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={() => props?.hidePeoDetail()}
        >
            <TouchableOpacity
                style={{ height: deviceHeight / 100 * 19, backgroundColor: '#00000009'}}
                onPress={() => props?.hidePeoDetail()}
                activeOpacity={0.99}
            />

            <View style={styles.centeredView}>

                <View style={styles.modalView}>
                    <TouchableOpacity
                        style={styles.closeBtn}
                        onPress={() => props?.hideCompDetail()}
                        activeOpacity={0.99}
                    >
                        <SimpleLineIcons name="close" style={{ fontSize: 20, color: Colors.primery, borderRadius: 20, }} />
                    </TouchableOpacity>

                    <View style={styles.imageBox}>
                        {companyData?.image ?
                            <Image
                                source={{ uri: companyData?.image }}
                                style={styles.compImg}
                                resizeMode="cover"
                            />
                            : <View style={styles.imageAltBox}>
                                <Text style={[styles.imageAltText,]}>
                                    {companyData?.name.substring(0, 2)}
                                </Text>
                            </View>
                        }
                    </View>

                    <View style={styles.detailBox}>
                        <Text style={styles.username}>
                            {`${companyData?.name}`}
                        </Text>
                        <Text style={[ {textAlign: 'center'}]}>{`${companyData?.companyTag}`}</Text>

                        <View style={styles.detailBoxItem}>
                            <Text style={styles.desc}>{`Phone #:`}</Text>
                            <Text style={styles.detail}>{`${companyData?.phone}`}</Text>
                        </View>
                        <View style={styles.detailBoxItem}>
                            <Text style={styles.desc}>{`Location:`}</Text>
                            <Text style={styles.detail}>{`${companyData?.location}`}</Text>
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
        justifyContent: 'center',
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

const mapStateToProps = ({ companiesReducer }) => ({ companiesReducer })

export default connect(mapStateToProps, {

})(CompaniesDetail)

{/* <Image source={{ uri: 'https://www.servcorp.com/media/29481/180427_servecorp_444_w-lake_st_4230.jpg'}} style={styles.compImg} /> */}

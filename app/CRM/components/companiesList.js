import React from "react"
import {
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
    View,
    Text,
} from 'react-native'

import { Colors } from '../styles/color'

import FontAwesome5 from 'react-native-vector-icons/EvilIcons'

import { connect, useDispatch } from 'react-redux'
import { setCompanyDetail } from '../redux/actions/companies'

const CompaniesList = (props) => {

    // console.log('props: ', props?.companiesReducer?.selectedCompany)

    const dispatch = useDispatch()

    const renderItem = (items) => {
        let item = items?.item

        const detailHandler = () => {
            dispatch(props?.setCompanyDetail(item))
            props?.showCompDetail()
        }

        return (
            <TouchableOpacity
                key={item.id} style={styles.card} activeOpacity={0.9}
                onPress={detailHandler}
            >
                <View style={styles.topBox}>
                    <View>
                        {item?.image
                            ? <Image source={{ uri: item?.image }} style={styles.image} resizeMode="cover" />
                            : <View style={styles.imageTextBox}>
                                <Text style={styles.imageText}>
                                    {`${item?.name.substring(0, 2)}`}
                                </Text>
                            </View>
                        }
                    </View>

                    <View style={styles.nameBox}>
                        <Text style={styles.name}>
                            {item?.name}
                        </Text>
                        <Text style={styles.desig}>
                            {item?.phone}
                        </Text>
                    </View>
                </View>

                <View style={styles.bottomBox}>
                    <FontAwesome5 name='location' style={styles.icons} />
                    <Text style={styles.company}>{item?.location}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={props.data}
            contentContainerStyle={styles.flatlist}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            // bounces={false}
            showsVerticalScrollIndicator={false}
        />
    )
}

const styles = StyleSheet.create({
    flatlist: {
        paddingBottom: 10,
        marginBottom: 10,
    },
    card: {
        backgroundColor: Colors.white,
        flexDirection: 'column',
        marginHorizontal: 5,
        borderRadius: 10,
        marginTop: 20,

        shadowColor: Colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 5,
    },
    topBox: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        borderRadius: 8,
        height: 90,
        width: 90,
    },
    imageTextBox: {
        backgroundColor: Colors.lightgray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        height: 90,
        width: 90,

    },
    imageText: {
        textTransform: 'uppercase',
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 30,

    },
    nameBox: {
        marginLeft: 15,
    },
    name: {
        fontWeight: '700',
        fontSize: 22,
    },
    desig: {
        color: '#00000088', // Colors.gray,
        textAlign: 'left',
        letterSpacing: 0.7,
        fontWeight: '400',
        fontSize: 15,
    },
    bottomBox: {
        flexDirection: 'row',
        backgroundColor: Colors.primery,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        justifyContent: 'center',
        paddingVertical: 10,

        shadowColor: Colors.primery,
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 3,
    },
    icons: {
        color: Colors.white,
        alignSelf: 'center',
        // marginRight: 3,
        fontSize: 24,
    },
    company: {
        textTransform: 'uppercase',
        color: Colors.white,
        textAlign: 'center',
        letterSpacing: 0.7,
        fontWeight: '600',
        fontSize: 16,
    },
})


const mapStateToProps = ({ companiesReducer }) => ({ companiesReducer })

export default connect(mapStateToProps, {
    setCompanyDetail,
})(CompaniesList)

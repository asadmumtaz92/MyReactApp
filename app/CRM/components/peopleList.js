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

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { connect, useDispatch } from 'react-redux'
import { setPeopleDetail } from '../redux/actions/peoples'

const PeopleList = ( props ) => {
    // console.log()

    const dispatch = useDispatch()

    const renderItem = (items) => {
        let item = items?.item

        const detailHandler = () => {
            dispatch(props?.setPeopleDetail(item))
            props?.showPeoDetail()
        }

        return (
            <TouchableOpacity
                key={item.id} style={styles.card} activeOpacity={0.9}
                onPress={detailHandler}
            >
                <View style={styles.topBox}>
                    <View>
                        {item?.image
                            ? <Image source={{uri: item?.image}} style={styles.image} resizeMode="cover" />
                            : <View style={styles.imageTextBox}>
                                <Text style={styles.imageText}>
                                    {`${item?.firstname.substring(0, 1)}${item?.lastname.substring(0, 1)}`}
                                </Text>
                            </View>
                        }
                    </View>

                    <View style={styles.nameBox}>
                        <Text style={styles.name}>
                            {item?.firstname} {item?.lastname}
                        </Text>
                        <Text style={styles.desig}>
                            {item?.desig}
                        </Text>
                    </View>
                </View>

                <View style={styles.bottomBox}>
                    <FontAwesome5 name='building' style={styles.icons} />
                    <Text style={styles.company}>{item?.company}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={props.data}
            contentContainerStyle={styles.flatlist}
            keyExtractor={(item) => item.id }
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

        shadowColor: Colors.primery,
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            height: 0,
            width:0,
        },
        elevation: 3,
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
        textTransform:'capitalize',
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
        marginRight: 8,
        fontSize: 18,
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

const mapStateToProps = ({ peopleReducer }) => ({ peopleReducer })

export default connect(mapStateToProps, {
    setPeopleDetail,
})(PeopleList)

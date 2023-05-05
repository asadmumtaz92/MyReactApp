import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    View,
    Text,
} from 'react-native'

import { Colors } from '../../styles/color'

import { connect, useDispatch } from 'react-redux'
import { setSelectedPost } from '../../redux/actions/IbrahimAssociate'

import Title from './title'

const PostCard = ({ PostData, navigate }) => {

    const dispatch = useDispatch()

    const navigateHandler = (item) => {
        dispatch(setSelectedPost(item))
        setTimeout(() => {
            navigate()
        }, 100);
    }

    const strong = (data) => {
        return <Text style={{ fontWeight: '700', fontSize: 18 }}>{data} </Text>
    }

    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => { navigateHandler(PostData) }}  activeOpacity={0.9}>
                <Image source={{ uri: PostData.image[0] }} style={styles.image} resizeMode='cover' />

                <View style={styles.detailView}>
                    <Title title={PostData?.title} />
                    {/* <Text style={styles.desc} numberOfLines={2}>{PostData?.desc}</Text> */}
                    <View style={styles.section}>
                        <View style={styles.bottomView}>
                            <Text style={[styles.text,styles.left]}>{strong('Type:')} {PostData?.type}</Text>
                            <Text style={[styles.text,styles.right]}>{strong('Sector:')} {PostData?.sector}</Text>
                        </View>
                        <View style={[styles.bottomView, { marginTop: 10 }]}>
                            <Text style={[styles.text,styles.left]}>{strong('Demand:')} {PostData?.demand}</Text>
                            <Text style={[styles.text,styles.right]}>{strong('Size:')} {PostData?.size}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.white,
        marginBottom: 20,
        borderRadius: 8,
        width: '100%',

        elevation: 3,
        shadowColor: Colors.black,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
    },
    image: {
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        width: '100%',
        height: 200,
    },
    detailView: {
        backgroundColor: Colors.white,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    title: {
        textTransform: 'capitalize',
        color: Colors.black,
        letterSpacing: 0.9,
        fontWeight: '700',
        lineHeight: 22,
        fontSize: 18,
    },
    desc: {
        marginVertical: 10,
        color: Colors.gray,
        fontWeight: '500',
        fontSize: 15,
    },
    section: {
        backgroundColor: Colors.white,
        paddingVertical: 10,
    },
    bottomView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text: {
        color: Colors.black,
        fontWeight: '500',
        fontSize: 16,
        flex: 1,
    },
    left: {
        textAlign: 'left',
    },
    right: {
        textAlign: 'right',
    },
})

const mapStateToProps = ({ IB_ASSO_Reducer }) => ({ IB_ASSO_Reducer })

export default connect(mapStateToProps, {
    setSelectedPost
})(PostCard)


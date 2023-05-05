import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Linking,
    View,
    Text,
} from 'react-native'

import { Colors } from '../../styles/color'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import ImageSlider from './ImageSlider'
import Title from './title'
import PairList from './pairList'


const PostCardDetail = ({ PostData }) => {

    const myLink = (link, icon, text) => {
        return (
            <TouchableOpacity
                onPress={() => Linking.openURL({link})}
                style={styles.link} activeOpacity={0.9}
            >
                <FontAwesome5 name={icon} style={{ fontSize: 30, marginRight: 10 }} />
                <Text style={styles.share}>{text}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            {/* IMAGE SLIDER */}
            <ImageSlider imageData={PostData?.image}/>
            
            {/* POST DETAIL */}
            <View style={styles.detailView}>
                <Title title={PostData?.title} />
                <Text style={styles.desc}>{PostData?.title}. {PostData?.desc}</Text>

                {/* CONTACT  &  SHARE */}
                <View style={styles.shareView}>
                    {myLink('tel:+923336663896', 'mobile', '+92 3336663896')}
                    {myLink('tel:+923336663896', 'whatsapp', 'Share')}
                </View>
                
                {/* DETAIL LIST */}
                <PairList title='TYPE:' value={PostData?.type} />
                <PairList title='SECTOR:' value={PostData?.sector} />
                <PairList title='SIZE:' value={PostData?.size} />
                <PairList title='DEMAND:' value={PostData?.demand} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        marginBottom: 20,
        width: '100%',
    },
    detailView: {
        backgroundColor: Colors.white,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    desc: {
        color: Colors.black,
        marginVertical: 15,
        letterSpacing: 1.5,
        fontWeight: '300',
        lineHeight: 25,
        fontSize: 18,
    },
    shareView: {
        justifyContent: 'space-between',
        borderColor: Colors.gray,
        borderBottomWidth: 0.6,
        paddingHorizontal: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
        paddingBottom: 15,
        width: '100%',
    },
    link: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    share: {
        color: Colors.black,
        fontWeight: '700',
        textAlign: 'left',
        fontSize: 18,
    },

    bottomView: {
        borderColor: Colors.gray,
        borderBottomWidth: 0.6,
        paddingHorizontal: 4,
        flexDirection: 'row',
        marginVertical: 8,
        paddingBottom: 5,
    },
    heading: {
        color: Colors.black,
        fontWeight: '700',
        textAlign: 'left',
        fontSize: 18,
        flex: 2,
    },
    text: {
        color: Colors.black,
        fontWeight: '500',
        fontSize: 16,
        flex: 3,
    },
})

export default PostCardDetail

import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    ScrollView,
    StatusBar,
    Image,
    View,
    Text,
} from 'react-native'

import { Colors } from '../styles/color'

import { connect, } from 'react-redux'
import { setSelectedDeal } from '../redux/actions/dataDriven'
import { BAKESALE_API } from './enviroments/index'

import { priceDisplay } from './utlz/index'
import ImageSlider from './components/ImageSlider'

const BlogDetail = (props) => {

    const [data, setData] = useState()
    const [loader, setLoader] = useState(false)

    const getDetail = () => {
        setLoader(true)
        fetch(`${BAKESALE_API}/${props?.dataDrivenReducer?.selectedDeal?.key}`)
            .then(response => response.json())
            .then(response => {
                if (!response['errors']) {
                    setData(response)
                    setLoader(false)
                }
            })
            .catch(error => {
                console.log('API fetch data failed:', error);
            });
    }

    useEffect(() => {
        getDetail()
    }, [])

    return (
        <>
            <StatusBar barStyle={'light-content'} hidden={false} />
            {loader
                ? <View style={styles.loaderView}>
                    <ActivityIndicator color={Colors.primery} size={'large'} />
                </View>
                : <View style={styles.container}>

                    {/* IMAGE SLIDER */}
                    {data?.media && <ImageSlider imageData={data?.media} />}
                        
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={styles.detailView}>
                            {data?.title && <Text style={styles.title}>{data?.title}</Text>}

                            <View style={styles.midleView}>
                                <View style={styles.leftView}>
                                    {data?.price && <Text style={styles.price}>{priceDisplay(data?.price)}</Text>}
                                    {data?.cause?.name && <Text style={styles.cause}>{data?.cause?.name}</Text>}
                                </View>

                                <View style={styles.rightView}>
                                    {data?.user?.avatar && <Image source={{ uri: data?.user?.avatar }} style={styles.avatar} resizeMode='cover' />}
                                    {data?.user?.name && <Text style={styles.username}>{data?.user?.name}</Text>}
                                </View>
                            </View>

                            {data?.description && <Text style={styles.desc}>{data?.description}</Text>}

                        </View>

                    </ScrollView>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    loaderView: {
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        backgroundColor: Colors.white,
        minWidth: '100%',
        flex: 1,
    },
    detailView: {
        marginHorizontal: 20,
    },
    title: {
        textTransform: 'capitalize',
        color: Colors.primery,
        fontWeight: '700',
        textAlign: 'left',
        marginTop: 15,
        fontSize: 19,
    },
    midleView: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 25,
    },
    leftView: { 
        justifyContent: 'flex-start', 
        flex: 1,
    },
    rightView: { 
        justifyContent: 'center', 
        flex: 1,
    },
    cause: {
        color: Colors.black,
        fontWeight: '400',
        marginTop: 15,
        fontSize: 16,
    },
    price: {
        color: Colors.black,
        fontWeight: '500',
        fontSize: 16,
    },
    avatar: {
        borderColor: Colors.gray,
        alignSelf: 'center',
        borderRadius: 60,
        marginBottom: 5,
        borderWidth: 1,
        height: 60,
        width: 60,
    },
    username: {
        color: Colors.black,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 16,
    },
    desc: {
        color: Colors.black,
        textAlign: 'left',
        marginTop: 10,
        fontSize: 16,
    },
})

const mapStateToProps = ({ dataDrivenReducer }) => ({ dataDrivenReducer })

export default connect(mapStateToProps, {
    setSelectedDeal,
})(BlogDetail)

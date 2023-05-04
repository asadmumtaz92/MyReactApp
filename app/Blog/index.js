import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    FlatList,
    Platform,
    View,
} from 'react-native'

import { Colors } from '../styles/color'
import { BAKESALE_API } from './enviroments/index' 
import DealItem from './components/blogItem'

const Blog = (props) => {
    
    const [allDeals, setAllDeals] = useState()
    const [loader, setLoader] = useState(false)

    const getDetail = () => {
        setLoader(true)
        fetch(BAKESALE_API)
            .then(response => response.json())
            .then(response => {
                if (!response['errors']) {
                    setAllDeals(response)
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

    const renderItem = (item) => {
        const navigate = () => {
            props.navigation.navigate('BlogDetail')
        }

        return <DealItem dealData={item?.item} navigate={navigate}/>
    }

    return (
        <View style={styles.contanier}>
            {loader
                ? <View style={styles.loaderView}>
                    <ActivityIndicator color={Colors.primery} size={'large'} />
                </View>
                : <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: Platform.select({
                            android: 5,
                            ios: 15
                        })
                    }}
                    data={allDeals}
                    keyExtractor={item => item.key}
                    renderItem={renderItem}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100%',
        flex: 1,
    },
})

export default Blog

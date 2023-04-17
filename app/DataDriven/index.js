import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    FlatList,
    Platform,
    View,
} from 'react-native'

import { Colors } from '../styles/color'
import { BAKESALE_API } from '../enviroments/index' 
import DealItem from './components/dealItem'

const DataDriven = (props) => {
    
    const [allDeals, setAllDeals] = useState()

    useEffect(() => {
        fetch(BAKESALE_API)
            .then(response => response.json())
            .then(response => {
                if (!response['errors']) {
                    setAllDeals(response)
                }
            })
            .catch(error => {
                console.log('API fetch data failed:', error);
            });
    }, [])

    const renderItem = (item) => {
        const navigate = () => {
            props.navigation.navigate('DealItemDetail')
        }

        return <DealItem dealData={item?.item} navigate={navigate}/>
    }

    return (
        <View style={styles.contanier}>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: Platform.select({
                        android: 5,
                        ios: 15
                    })
                }}
                data={allDeals}
                keyExtractor={item => item.key }
                renderItem={renderItem}
            />
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

export default DataDriven
import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Platform,
    FlatList,
    Linking,
    Image,
    View,
    Text,
} from 'react-native'

import { Colors } from './styles/color'
import { StatusBar } from 'react-native'

import { connect, useDispatch } from 'react-redux'
import { addition, substruction } from './redux/actions/calculator'
import { Projects } from './constantData/index'

const AppRoute = (props) => {

    const dispatch = useDispatch()
    console.log('Check for Auto build on APP Center!')

    const renderItem = (items) => {
        const item = items.item

        const changeScreen = (appStatus) => {
            props.navigation.navigate(appStatus)
        }

        return (
            <TouchableOpacity
                onPress={() => item.navName && changeScreen(item.navName)}
                style={styles.project} activeOpacity={0.8}
            >
                <View style={styles.imageBox}>
                    <Image source={item.image} style={styles.image} resizeMode='contain' />
                </View>

                <View style={styles.detailBox}>
                    <Text numberOfLines={1} style={styles.title }>{item.title}</Text>
                    <Text numberOfLines={3} style={styles.desc}>{item.title}. { item.desc}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.contanier}>
            <StatusBar barStyle='light-content' backgroundColor={Colors.primery}/>

            {/* LIST OF ALL PROJECTS */}
            <FlatList 
                contentContainerStyle={styles.flatList}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.title}
                renderItem={renderItem}
                data={Projects}
                numColumns={1}
            />

            <View>
                <> 
                    {/* <TouchableOpacity onPress={() => dispatch(addition()) } style={styles.btn} activeOpacity={0.9}>
                        <Text style={styles.btnText}>ADD</Text>
                    </TouchableOpacity>

                    <Text>Counter val is: { props?.calculatorReducer?.counter}</Text>

                    <TouchableOpacity onPress={() => dispatch(substruction()) } style={styles.btn} activeOpacity={0.9}>
                        <Text style={styles.btnText}>MINUS</Text>
                    </TouchableOpacity> */}
                </>

            </View>

            {/* FOOTER */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Design & Developed by </Text>
                <TouchableOpacity onPress={async () => await Linking.openURL('https://www.linkedin.com/in/asadmumtaz92/')} >
                    <Text style={styles.footerLink}>ASAD MUMTAZ</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    flatList: {
        paddingBottom: Platform.select({
            android: 30,
            ios: 40,
        }),
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    project: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 8,
        width: '100%',
        flex: 1,

        elevation: 3,
        shadowColor: Colors.black,
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: {
            height: 0,
            width: 0,
        }
    },
    imageBox: {
        padding: 5
    },
    image: {
        borderRadius: 5,
        height: 100,
        width: 100,
    },
    detailBox: {
        justifyContent: 'center' ,
        flexDirection: 'column',
        padding: 8,
        flex: 1,
    },
    title: {
        textTransform: 'uppercase',
        color: Colors.black,
        fontWeight: '700',
        textAlign: 'left',
        paddingRight: 7,
        fontSize: 18,
    },
    desc: {
        color: Colors.black,
        fontStyle: 'italic',
        fontWeight: '200',
        fontSize: 14,
        marginTop: 8,
    },

    // FOOTER STYLE 
    footer: {
        paddingVertical: Platform.select({
            android: 10,
            ios: 15,
        }),
        backgroundColor: Colors.white,
        borderColor: Colors.primery,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderTopWidth: 0.5,
        flexDirection: 'row',
        width: '100%',
        bottom: 0,
    },
    footerText: {
        color: Colors.black,
        fontWeight: '200',
        fontSize: 14
    },
    footerLink: {
        textDecorationLine: 'underline',
        color: Colors.primery,
        paddingHorizontal: 2,
        fontWeight: '400',
        fontSize: 14,
    },
})

const mapStateToProps = ({ calculatorReducer }) => ({ calculatorReducer })

export default connect(mapStateToProps, {
    addition,
    substruction,
})(AppRoute)

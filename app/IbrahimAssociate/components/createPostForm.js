import React, { useEffect, useState } from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    View,
    Text,
    FlatList,
} from 'react-native'
import { Colors } from '../../styles/color'
import { gStyles } from '../styles/globle'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const checkbox_active = require('../assets/icons/checkbox_active.png')
const checkbox_inactive = require('../assets/icons/checkbox_inactive.png')
import MyTextInput from './myTextInput'

const CreatePostComp = ({
    props,
    create = true,
    data = {},
}) => {

    const [title, setTitle] = useState(create ? '' : data?.title)
    const [desc, setDesc] = useState(create ? '' : data?.desc)
    const [city, setCity] = useState(create ? '' : data?.city)
    const [society, setSociety] = useState(create ? '' : data?.society)
    const [sector, setSector] = useState(create ? '' : data?.sector)
    const [size, setSize] = useState(create ? '' : data?.size)
    const [demand, setDemand] = useState(create ? '' : data?.demand)
    const [contact, setContact] = useState(create ? '' : data?.contact)

    const [category, setCategory] = useState(create ? '' : data?.category)
    const [chkCategory, setChkCategory] = useState(create ? '' : data?.category)
    const [type, setType] = useState(create ? '' : data?.type)
    const [chkType, setChkType] = useState(create ? '' : data?.type)
    const [visibility, setVisibility] = useState(create ? '' : data?.visibility)
    const [chkVisibility, setChkVisibility] = useState(create ? 'Private' : data?.visibility)

    const [finalData, setFinalData] = useState(create ? '' : data)
    const [images, setImages] = useState(create ? '' : data?.images)


    const titleInputHandler = (text) => {
        setTitle(text)
    }
    const descInputHandler = (text) => {
        setDesc(text)
    }
    const cityInputHandler = (text) => {
        setCity(text)
    }
    const societyInputHandler = (text) => {
        setSociety(text)
    }
    const sectorInputHandler = (text) => {
        setSector(text)
    }
    const sizeInputHandler = (text) => {
        setSize(text)
    }
    const demandInputHandler = (text) => {
        setDemand(text)
    }
    const contactInputHandler = (text) => {
        setContact(text)
    }
    const categoryInputHandler = (text) => {
        setCategory(text)
        setTimeout(() => {
            if (chkCategory == text) {
                setChkCategory('')
                setCategory('')
            }
            else {
                setChkCategory(text)
                setCategory(text)
            }
        }, 100);
    }
    const typeInputHandler = (text) => {
        setType(text)
        setTimeout(() => {
            if (chkType == text) {
                setChkType('')
                setType('')
            }
            else {
                setChkType(text)
                setType(text)
            }
        }, 100);
    }
    const visibilityInputHandler = (text) => {
        setVisibility(text)
        setTimeout(() => {
            if (chkVisibility == text) {
                setChkVisibility('')
                setVisibility('')
            }
            else {
                setChkVisibility(text)
                setVisibility(text)
            }
        }, 100);
    }
    // update value in state/hooks
    useEffect(() => {
        let FinalData = {
            title: title,
            desc: desc,
            city: city,
            society: society,
            sector: sector,
            size: size,
            demand: demand,
            contact: contact,
            category: category,
            type: type,
            visibility: visibility,
            images: images,
        }
        setFinalData(FinalData)
    }, [title, desc, city, society, sector, size, demand, contact, category, type, visibility, images])

    const buttonPressHandler = () => {

        if (title?.length < 10 || desc?.length < 20 || city?.length < 5 || society?.length < 5 || sector?.length < 1 || size?.length < 5 || demand?.length < 5 || contact?.length < 11 || category?.length < 10 || type?.length < 4 || visibility.length < 6) {
            alert('\nPlease fill all fields first!')
        }
        else {
            if (create) {
                alert('\nCreated Sucseccfully!')
                console.log("L:132==> \nCreated data: ", finalData)
            }
            else {
                // onSubmit()
                alert('\nUpdated Sucseccfully!')
                console.log("L:137==> Updated data: ", finalData)
            }
        }
    }
    
    const renderImager = (item) => {
        return (
            <View style={{ marginHorizontal: 5 }}>
                <TouchableOpacity
                    style={styles.deleteLink} activeOpacity={0.8}
                    onPress={() => {}}
                >
                    <SimpleLineIcons name="trash" style={styles.deleteIcon} />
                </TouchableOpacity>
                <Image source={{ uri: item?.item }} style={styles.image} />
            </View>
        )
    }

    return (
        <View style={{ paddingVertical: 10 }}>
            {/* TITLE */}
            <MyTextInput
                label='Title:'
                textInputHandler={titleInputHandler}
                countlength={100}
                value={title}
            />

            {/* DESCRIPTION */}
            <MyTextInput
                label='Description:'
                textInputHandler={descInputHandler}
                countlength={1000}
                value={desc}
                myStyle={{
                    maxHeight: Dimensions.get('window').height * 0.4,
                    height: Dimensions.get('window').height * 0.25,
                    padding: 8,
                }}
                multiline={true}
            />

            {/* City */}
            <MyTextInput
                label='City:'
                textInputHandler={cityInputHandler}
                value={city}
            />

            {/* Society */}
            <MyTextInput
                label='Society:'
                textInputHandler={societyInputHandler}
                value={society}
            />

            {/* Sector */}
            <MyTextInput
                label='Sector:'
                textInputHandler={sectorInputHandler}
                value={sector}
            />

            {/* Size */}
            <MyTextInput
                label='Size:'
                textInputHandler={sizeInputHandler}
                value={size}
            />

            {/* DEMAND */}
            <MyTextInput
                label='Demand:'
                textInputHandler={demandInputHandler}
                value={demand}
            />

            {/* Owner Contact */}
            <MyTextInput
                label='Mobile No:'
                textInputHandler={contactInputHandler}
                value={contact}
            />

            {/* Category */}
            <View style={styles.type}>
                <TouchableOpacity
                    onPress={() => categoryInputHandler('Residencial')}
                    activeOpacity={0.9} style={styles.chkbox}
                >
                    <Image source={chkCategory == 'Residencial' ? checkbox_active : checkbox_inactive} style={styles.img} />
                    <Text style={[gStyles.label, { marginLeft: 10, marginBottom: 0, }]}>Residencial</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => categoryInputHandler('Commercial')}
                    activeOpacity={0.9} style={styles.chkbox}
                >
                    <Image source={chkCategory == 'Commercial' ? checkbox_active : checkbox_inactive} style={styles.img} />
                    <Text style={[gStyles.label, { marginLeft: 10, marginBottom: 0, }]}>Commercial</Text>
                </TouchableOpacity>
            </View>

            {/* TYPE */}
            <View style={styles.type}>
                <TouchableOpacity
                    onPress={() => typeInputHandler('Sale')}
                    activeOpacity={0.9} style={styles.chkbox}
                >
                    <Image source={chkType == 'Sale' ? checkbox_active : checkbox_inactive} style={styles.img} />
                    <Text style={[gStyles.label, { marginLeft: 10, marginBottom: 0, }]}>Sale</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => typeInputHandler('Rent')}
                    activeOpacity={0.9} style={styles.chkbox}
                >
                    <Image source={chkType == 'Rent' ? checkbox_active : checkbox_inactive} style={styles.img} />
                    <Text style={[gStyles.label, { marginLeft: 10, marginBottom: 0, }]}>Rent</Text>
                </TouchableOpacity>
            </View>

            {/* PUBLIC/PRIVATE */}
            <View style={styles.type}>
                <TouchableOpacity
                    onPress={() => visibilityInputHandler('Private')}
                    activeOpacity={0.9} style={styles.chkbox}
                >
                    <Image source={chkVisibility == 'Private' ? checkbox_active : checkbox_inactive} style={styles.img} />
                    <Text style={[gStyles.label, { marginLeft: 10, marginBottom: 0, }]}>Private</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => visibilityInputHandler('Public')}
                    activeOpacity={0.9} style={styles.chkbox}
                >
                    <Image source={chkVisibility == 'Public' ? checkbox_active : checkbox_inactive} style={styles.img} />
                    <Text style={[gStyles.label, { marginLeft: 10, marginBottom: 0, }]}>Public</Text>
                </TouchableOpacity>
            </View>

            {/* IMAGES */}
            <View style={styles.mediaBox}>
                <Text style={gStyles.label}>{`Attached Media:`}</Text>
                {create
                    ? <View></View>
                    : <FlatList
                        data={images}
                        horizontal={true}
                        renderItem={renderImager}
                        keyExtractor={(_, index) => index}
                        showsHorizontalScrollIndicator={false}
                    />
                }
            </View>

            {/* SUBMIT BUTTON */}
            <TouchableOpacity
                style={styles.submitBtn} activeOpacity={0.95}
                onPress={buttonPressHandler}
            >
                <Text style={styles.submitText}>{`${create ? 'SUBMIT': 'UPDATE'}`}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    type: {
        justifyContent: 'space-between',
        marginHorizontal: 10,
        flexDirection: 'row',
        marginBottom: 30,
    },
    chkbox: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    img: {
        height: 25,
        width: 25,
    },
    mediaBox: {
        marginBottom: 20,
        marginTop: -5,
        margin: 5,
    },
    deleteLink: {
        backgroundColor: Colors.white90,
        position: 'absolute',
        borderRadius: 7,
        fontSize: 20,
        padding: 5,
        zIndex: 1,
        right: 5,
        top: 4,
    },
    deleteIcon: {
        color: Colors.red,
        fontSize: 18,
    },
    image: {
        borderRadius: 5,
        height: 150,
        width: 150,
    },
    submitBtn: {
        backgroundColor: Colors.crm,
        marginHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 8,
        marginBottom: 20
    },
    submitText: {
        color: Colors.white,
        alignSelf: 'center',
        letterSpacing: 1.9,
        fontWeight: '700',
        fontSize: 18,
    },
})

export default CreatePostComp

import React from 'react'
import {
    Dimensions,
    StyleSheet,
    FlatList,
    Animated,
    Image,
    View,
} from 'react-native'

import { Colors } from '../../styles/color'

const { width, height } = Dimensions.get('window')
const ITEM_WIDTH = width
const ITEM_HEIGHT = height * 0.35
const DOT_SIZE = 6
const DOT_SPACING = 6
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING

const ImageSlider = ({ imageData, showDot = true }) => {

    const ScrollX = React.useRef(new Animated.Value(0)).current

    return (
        <View style={styles.imageView}>
            <Animated.FlatList
                keyExtractor={(_, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                snapToInterval={ITEM_WIDTH}
                decelerationRate='fast'
                horizontal={true}
                data={imageData}
                bounces={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: ScrollX } } }],
                    { useNativeDriver: true },
                )}
                renderItem={(item) => <Image source={{ uri: item.item }} style={styles.image} resizeMode='stretch' />}
            />
            <View style={styles.divider} />

            {showDot && imageData.length > 1
                && <View style={styles.pagination}>
                    {imageData.map((item, index) => <View key={index} style={[styles.dot]} />)}

                    <Animated.View
                        style={[styles.dotIndicator, {
                            transform: [{
                                translateX: Animated.divide(ScrollX, ITEM_WIDTH).interpolate({
                                    inputRange: [0, 1], outputRange: [0, DOT_INDICATOR_SIZE],
                                })
                            }]
                        }]}
                    />
                </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    imageView: {
        height: ITEM_HEIGHT + 8,
        overflow: 'hidden',
    },
    image: {
        height: ITEM_HEIGHT,
        width: ITEM_WIDTH,
    },
    divider: {
        width: '100%',
        height: 10,
    },
    pagination: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 8,
    },
    dot: {
        backgroundColor: Colors.crm,
        borderRadius: DOT_SIZE,
        marginLeft: DOT_SPACING,
        height: DOT_SIZE,
        width: DOT_SIZE,
    },
    dotIndicator: {
        borderRadius: DOT_INDICATOR_SIZE,
        height: DOT_INDICATOR_SIZE,
        width: DOT_INDICATOR_SIZE,
        borderColor: Colors.crm,
        position: 'absolute',
        top: -DOT_SIZE / 2,
        left: DOT_SIZE / 2,
        borderWidth: 1,
    },
})

export default ImageSlider

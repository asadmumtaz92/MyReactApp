import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

import { Colors } from '../../styles/color'

const List = ({ title, data }) => {

    return (
        <View style={styles.view}>
            <Text style={styles.heading}>{title}</Text>
            {data.map((item, index) => {
                return (
                    <View style={styles.dataBox} key={index}>
                        <View style={styles.circle} />
                        <Text key={index} style={styles.text}>{item}</Text>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: Colors.white,
        marginHorizontal: 20,
        marginTop: 10,
    },
    heading: {
        color: Colors.buttonColor,
        fontWeight: '700',
        marginBottom: 5,
        fontSize: 19,
    },
    dataBox: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 30,
    },
    circle: {
        backgroundColor: Colors.buttonColor,
        marginRight: 10,
        borderRadius: 5,
        height: 8,
        width: 8,
    },
    text: {
        color: Colors.buttonColor,
        fontWeight: '500',
        marginVertical: 4,
        fontSize: 14,
        flex: 1,
    },
});

export default List

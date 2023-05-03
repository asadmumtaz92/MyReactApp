import {
    Text
} from 'react-native'

import { gStyles } from '../../styles/globalStyle'

const Title = ({ title, style }) => {

    return (
        <Text style={[gStyles.title, style]}>
            {title}
        </Text>
    )
}

export default Title

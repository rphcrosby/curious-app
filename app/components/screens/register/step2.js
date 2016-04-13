import React, {
    Component,
    View,
    Text
} from 'react-native'
import { connect } from 'react-redux'

let Step2 = ({ dispatch }) => {
    return (
        <View>
            <Text>LOL</Text>
        </View>
    )
}

Step2 = connect()(Step2)

export default Step2;

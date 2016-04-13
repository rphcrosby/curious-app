import React, {
    Component,
    View,
    Text
} from 'react-native'
import { connect } from 'react-redux'

let RegisterConfirmation = ({ dispatch }) => {
    return (
        <View>
            <Text>LOL</Text>
        </View>
    )
}

RegisterConfirmation = connect()(RegisterConfirmation)

export default RegisterConfirmation;

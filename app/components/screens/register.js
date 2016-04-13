import React, {
    Component,
    View,
    TextInput,
    Text
} from 'react-native'
import { connect } from 'react-redux'
import {
    typeRegisterUsername,
    typeRegisterEmail,
    typeRegisterPassword,
    typeRegisterPasswordConfirmation
} from '../../actions/screens/register'
import { sendUserCreate } from '../../actions/api/user/create'

const mapStateToProps = (state) => {
    return {
        user: state.api.user,
        register: state.screens.register
    };
}

class Register extends Component
{
    componentDidUpdate() {
        if (this.props.user.user !== null) {
            this.props.navigator.push({ id: 'registerconfirmation' })
        }
    }

    render() {
        const { register, dispatch } = this.props
        return (
            <View style={{ padding: 50 }}>
                <Text style={{ fontSize: 12 }}>Username</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => dispatch(typeRegisterUsername(text))}
                    value={register.username}
                />
                <Text style={{ fontSize: 12, marginBottom: 20, marginTop: 10, color: 'red' }}>{ register.errors.username }</Text>

                <Text style={{ fontSize: 12 }}>Email</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => dispatch(typeRegisterEmail(text))}
                    value={register.email}
                />
                <Text style={{ fontSize: 12, marginBottom: 20, marginTop: 10, color: 'red' }}>{ register.errors.email }</Text>

                <Text style={{ fontSize: 12 }}>Password</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => dispatch(typeRegisterPassword(text))}
                    value={register.password}
                />
                <Text style={{ fontSize: 12, marginBottom: 20, marginTop: 10, color: 'red' }}>{ register.errors.password }</Text>

                <Text style={{ fontSize: 12 }}>Confirm Password</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => dispatch(typeRegisterPasswordConfirmation(text))}
                    value={register.password_confirmation}
                />
                <Text style={{ fontSize: 12, marginBottom: 20, marginTop: 10, color: 'red' }}>{ register.errors.password_confirmation }</Text>

                <Text
                    style={{ height: 40, textAlign: 'center', backgroundColor: 'gray'}}
                    onPress={() => dispatch(sendUserCreate())}
                >
                    Submit
                </Text>
            </View>
        )
    }
}

Register = connect(mapStateToProps)(Register)

export default Register;

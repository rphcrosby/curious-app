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
import forms from '../../stylesheets/forms'

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
            <View style={forms.form}>
                <Text style={forms.text_label}>USERNAME</Text>
                <View style={forms.text_wrapper}>
                    <TextInput
                        style={forms.text_input}
                        onChangeText={(text) => dispatch(typeRegisterUsername(text))}
                        value={register.username}
                        autoCapitalize={'none'}
                        keyboardType={'numbers-and-punctuation'}
                    />
                </View>
                <Text style={forms.text_error}>{ register.errors.username }</Text>

                <Text style={forms.text_label}>EMAIL</Text>
                <View style={forms.text_wrapper}>
                    <TextInput
                        style={forms.text_input}
                        onChangeText={(text) => dispatch(typeRegisterEmail(text))}
                        value={register.email}
                        autoCapitalize={'none'}
                        keyboardType={'email-address'}
                    />
                </View>
                <Text style={forms.text_error}>{ register.errors.email }</Text>

                <Text style={forms.text_label}>PASSWORD</Text>
                <View style={forms.text_wrapper}>
                    <TextInput
                        style={forms.text_input}
                        onChangeText={(text) => dispatch(typeRegisterPassword(text))}
                        value={register.password}
                        autoCapitalize={'none'}
                        secureTextEntry={true}
                    />
                </View>
                <Text style={forms.text_error}>{ register.errors.password }</Text>

                <Text style={forms.text_label}>CONFIRM PASSWORD</Text>
                <View style={forms.text_wrapper}>
                    <TextInput
                        style={forms.text_input}
                        onChangeText={(text) => dispatch(typeRegisterPasswordConfirmation(text))}
                        value={register.password_confirmation}
                        autoCapitalize={'none'}
                        secureTextEntry={true}
                    />
                </View>
                <Text style={forms.text_error}>{ register.errors.password_confirmation }</Text>

                <Text
                    style={forms.proceed}
                    onPress={() => dispatch(sendUserCreate())}
                >
                    PROCEED
                </Text>
            </View>
        )
    }
}

Register = connect(mapStateToProps)(Register)

export default Register;

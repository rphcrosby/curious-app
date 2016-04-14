// Import react components
import React, {
    Component,
    View,
    TextInput,
    Text
} from 'react-native'
import { connect } from 'react-redux'

// Import screen actions
import {
    resetLoginForm,
    typeLoginUsername,
    typeLoginPassword
} from '../../actions/screens/login'

// Import API actions
import { sendUserAuthentication } from '../../actions/api/authentication'

// Import stylesheets
import screens from '../../stylesheets/screens'
import forms from '../../stylesheets/forms'

/**
 * Determine what parts of the state to pass to the component
 *
 * @param object state
 */
const mapStateToProps = (state) => {
    return {
        user: state.api.user,
        login: state.screens.login
    };
}

class Login extends Component
{
    goToRegister() {
        this.props.dispatch(resetLoginForm())
        this.props.navigator.push({ id: 'register.step1' })
    }

    render() {
        const { login, dispatch } = this.props
        return (
            <View style={screens.login.screen}>
                <View style={[forms.form, screens.login.form]}>
                    <Text style={forms.text_label}>USERNAME</Text>
                    <View style={forms.text_wrapper}>
                        <TextInput
                            style={forms.text_input}
                            onChangeText={(text) => dispatch(typeLoginUsername(text))}
                            value={login.username}
                            autoCapitalize={'none'}
                            keyboardType={'numbers-and-punctuation'}
                        />
                    </View>
                    <Text style={forms.text_error}></Text>

                    <Text style={forms.text_label}>PASSWORD</Text>
                    <View style={forms.text_wrapper}>
                        <TextInput
                            style={forms.text_input}
                            onChangeText={(text) => dispatch(typeLoginPassword(text))}
                            value={login.password}
                            autoCapitalize={'none'}
                            secureTextEntry={true}
                        />
                    </View>
                    <Text style={forms.text_error}>{ login.error }</Text>

                    <View style={forms.form_buttons}>
                        <Text style={forms.back} onPress={() => this.goToRegister()}>
                            REGISTER
                        </Text>

                        <Text style={forms.proceed} onPress={() => dispatch(sendUserAuthentication())}>
                            LOGIN
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

Login = connect(mapStateToProps)(Login)

export default Login;

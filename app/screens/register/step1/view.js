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
    resetRegisterForm,
    typeRegisterUsername,
    typeRegisterEmail,
    typeRegisterPassword,
    typeRegisterPasswordConfirmation
} from './actions'

// Import API actions
import { sendUserCreate } from '../../../api/user/actions/create'
import { sendUserAuthentication } from '../../../api/authentication/actions'
import { sendUserMe } from '../../../api/user/actions/get'

// Import stylesheets
import screens from '../../../stylesheets/screens'
import forms from '../../../stylesheets/forms'

/**
 * Determine what parts of the state to pass to the component
 *
 * @param object state
 */
const mapStateToProps = (state) => {
    return {
        authentication: state.api.authentication,
        user: state.api.user,
        step1: state.screens.step1
    };
}

class Step1 extends Component
{
    /**
     * When the state updates, check whether we should be progressing to the
     * next screen or not
     *
     */
    componentDidUpdate() {

        // If this user exists it means that step 1 of the registration completed
        if (this.props.user.user !== null) {

            // If the user is not authenticated here then the next step is to authenticate them
            if (this.props.authentication.status === 'AUTHENTICATION_STATE_CLIENT_CONNECTED') {

                this.props.dispatch(sendUserAuthentication(
                    this.props.step1.username,
                    this.props.step1.password
                ))

            // Once the user is connected then we can progress
            } else if (this.props.authentication.status === 'AUTHENTICATION_STATE_USER_CONNECTED') {

                // If the user isn't authenticated but we don't have their details then fetch them
                if (this.props.authentication.user === null) {

                    this.props.dispatch(sendUserMe())
                } else {

                    // If we have authenticated the user and have their details then progress to step 3
                    this.props.navigator.replace({ id: 'register.step2' })
                }
            }
        }
    }

    /**
     * This shows the user a status on the registration page when it's submitted. It's not strictly
     * accurate, but it beats a loading circle.
     *
     */
    getStatus() {
        if (this.props.authentication.status === 'AUTHENTICATION_STATE_CONNECTING') {
            return 'CREATING USER'
        } else if (this.props.authentication.status === 'AUTHENTICATION_STATE_USER_CONNECTED') {
            return 'AUTHENTICATING USER'
        }
    }

    /**
     * Sends the user back to the login page if they click the back button from
     * the register page
     *
     */
    backToRegistration() {
        this.props.dispatch(resetRegisterForm())
        this.props.navigator.pop()
    }

    render() {
        const { step1, dispatch } = this.props
        return (
            <View style={screens.register.screen}>
                <View style={[forms.form, screens.register.form]}>
                    <Text style={forms.text_label}>USERNAME</Text>
                    <View style={forms.text_wrapper}>
                        <TextInput
                            style={forms.text_input}
                            onChangeText={(text) => dispatch(typeRegisterUsername(text))}
                            value={step1.username}
                            autoCapitalize={'none'}
                            keyboardType={'numbers-and-punctuation'}
                        />
                    </View>
                    <Text style={forms.text_error}>{ step1.errors.username }</Text>

                    <Text style={forms.text_label}>EMAIL</Text>
                    <View style={forms.text_wrapper}>
                        <TextInput
                            style={forms.text_input}
                            onChangeText={(text) => dispatch(typeRegisterEmail(text))}
                            value={step1.email}
                            autoCapitalize={'none'}
                            keyboardType={'email-address'}
                        />
                    </View>
                    <Text style={forms.text_error}>{ step1.errors.email }</Text>

                    <Text style={forms.text_label}>PASSWORD</Text>
                    <View style={forms.text_wrapper}>
                        <TextInput
                            style={forms.text_input}
                            onChangeText={(text) => dispatch(typeRegisterPassword(text))}
                            value={step1.password}
                            autoCapitalize={'none'}
                            secureTextEntry={true}
                        />
                    </View>
                    <Text style={forms.text_error}>{ step1.errors.password }</Text>

                    <Text style={forms.text_label}>CONFIRM PASSWORD</Text>
                    <View style={forms.text_wrapper}>
                        <TextInput
                            style={forms.text_input}
                            onChangeText={(text) => dispatch(typeRegisterPasswordConfirmation(text))}
                            value={step1.password_confirmation}
                            autoCapitalize={'none'}
                            secureTextEntry={true}
                        />
                    </View>
                    <Text style={forms.text_error}>{ step1.errors.password_confirmation }</Text>

                    <View style={forms.form_buttons}>
                        <Text style={forms.back} onPress={() => this.backToRegistration()}>
                            BACK
                        </Text>
                        <Text style={forms.proceed} onPress={() => dispatch(sendUserCreate())}>
                            PROCEED
                        </Text>
                    </View>

                    <View>
                        <Text style={forms.status}>{ this.getStatus() }</Text>
                    </View>
                </View>
            </View>
        )
    }
}

Step1 = connect(mapStateToProps)(Step1)

export default Step1;

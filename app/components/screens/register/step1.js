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
    typeRegisterUsername,
    typeRegisterEmail,
    typeRegisterPassword,
    typeRegisterPasswordConfirmation
} from '../../../actions/screens/register'

// Import API actions
import { sendUserCreate } from '../../../actions/api/user/create'

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
        user: state.api.user,
        register: state.screens.register
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
        if (this.props.user.user !== null) {
            this.props.navigator.push({ id: 'register.step2' })
        }
    }

    render() {
        const { register, dispatch } = this.props
        return (
            <View style={screens.register}>
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
            </View>
        )
    }
}

Step1 = connect(mapStateToProps)(Step1)

export default Step1;

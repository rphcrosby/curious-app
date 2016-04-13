import React, { StyleSheet } from 'react-native';

const forms = StyleSheet.create({
    form: {
        paddingTop: 200,
        paddingLeft: 50,
        paddingRight: 50
    },
    form_buttons: {
        flex: 1,
        flexDirection: 'row'
    },
    text_wrapper: {
        height: 40,
        borderBottomColor: '#CFD6DE',
        borderBottomWidth: 1
    },
    text_input: {
        height: 40,
        color: '#547190'
    },
    text_label: {
        fontWeight: 'bold',
        color: '#CFD6DE',
        fontSize: 12
    },
    text_error: {
        textAlign: 'right',
        color: '#6E99A3',
        marginBottom: 20,
        marginTop: 10,
        fontSize: 12
    },
    back: {
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#A4D8CC',
        flex: 1
    },
    proceed: {
        textAlign: 'right',
        fontWeight: 'bold',
        color: '#A4D8CC',
        flex: 1
    }
});

export default forms

import React, { StyleSheet } from 'react-native';

const forms = StyleSheet.create({
    form: {
        paddingTop: 200,
        paddingLeft: 50,
        paddingRight: 50
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
    proceed: {
        textAlign: 'right',
        fontWeight: 'bold',
        color: '#A4D8CC'
    }
});

export default forms

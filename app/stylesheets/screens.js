import React, { StyleSheet } from 'react-native';

const screens = {
    login: StyleSheet.create({
        'screen': {
            backgroundColor: '#fff',
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row'
        },
        'form': {
            flex: 1
        }
    }),
    register: StyleSheet.create({
        'screen': {
            backgroundColor: '#fff',
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row'
        },
        'form': {
            flex: 1
        }
    }),
    register_step3: StyleSheet.create({
        'screen': {
            backgroundColor: '#fff',
            flex: 1,
            paddingLeft: 25,
            paddingRight: 25
        },
        'search': {
            marginTop: 40,
            flex: 1
        },
        'results': {
            flex: 4
        },
        'subscribe': {
            flexDirection: 'row',
            paddingTop: 10,
            paddingBottom: 10
        },
        'subscribe_text': {
            flex: 1,
            color: '#547190',
            fontSize: 14
        },
        'subscribe_button': {
            textAlign: 'right',
            paddingTop: 0,
            paddingBottom: 0,
            fontSize: 14
        },
        'buttons': {
            flex: 1
        }
    })
}

export const splash = StyleSheet.create({
    'screen': {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    status: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#CFD6DE',
        fontSize: 12
    }
});

export default screens

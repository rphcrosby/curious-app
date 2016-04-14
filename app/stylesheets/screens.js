import React, { StyleSheet } from 'react-native';

const screens = StyleSheet.create({
    register: {
        backgroundColor: '#fff',
        flex: 1
    }
});

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

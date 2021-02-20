import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function AppButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} >
            <Text style={styles.text}> {title} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 13,
        backgroundColor: '#9b6be8',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
    },
    text: {
        color: 'white',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default AppButton;
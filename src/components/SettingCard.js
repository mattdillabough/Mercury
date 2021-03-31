import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function SettingCard({ item, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{item.value}</Text>
            <AntDesign name="right" size={14} color="gray" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        width: '100%',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        textAlign: 'center'
    }
})

export default SettingCard;
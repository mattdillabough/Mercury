import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';


function Screen({ children, style }) {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})

export default Screen;
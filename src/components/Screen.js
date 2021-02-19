import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';


function Screen({ children }) {
    return (
        <View style={styles.container}>
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
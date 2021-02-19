import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { View, Text, StyleSheet } from 'react-native';
//import AppButton from '../../components/AppButton';

import { Screen } from '../../components';

function WelcomeScreen(props) {
    return (
        <Screen style={styles.containers}>
            <StatusBar backgroundColor="white" />
            <View>
                <Text>Welcome Screen</Text>
            </View>       
        </Screen>
    );
}

const styles = StyleSheet.create({
    containers: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'skyblue',
        //justifyContent: 'flex-end',
        //paddingTop: Constants.statusBarHeight,
    }
})

export default WelcomeScreen;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

function AuthStack(props) {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome"    component={WelcomeScreen} />
            <Stack.Screen name="Login"      component={LoginScreen} />
            <Stack.Screen name="Register"   component={RegisterScreen} />
        </Stack.Navigator>
    );
}

export default AuthStack;
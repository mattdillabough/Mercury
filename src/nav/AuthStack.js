import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { 
    LoginScreen, 
    RegisterScreen, 
    WelcomeScreen 
} from '../screens/auth';

const Stack = createStackNavigator();

function AuthStack(props) {
    return (
        <Stack.Navigator initialRouteName="Register" headerMode="none">
            <Stack.Screen name="Welcome"    component={WelcomeScreen} />
            <Stack.Screen name="Login"      component={LoginScreen} />
            <Stack.Screen name="Register"   component={RegisterScreen} />
        </Stack.Navigator>
    );
}

export default AuthStack;
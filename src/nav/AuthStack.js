import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { 
    LoginScreen, 
    RegisterScreen, 
    WelcomeScreen,
    RecoverScreen
} from '../screens/auth';

const Stack = createStackNavigator();

function AuthStack(props) {
    return (
        <Stack.Navigator initialRouteName="Welcome" headerMode="none">
            <Stack.Screen name="Welcome"    component={WelcomeScreen}   />
            <Stack.Screen name="Login"      component={LoginScreen}     />
            <Stack.Screen name="Register"   component={RegisterScreen}  />
            <Stack.Screen name="Recover"    component={RecoverScreen}   />
        </Stack.Navigator>
    );
}

export default AuthStack;
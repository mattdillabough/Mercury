import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { auth } from '../firebase/firebase';
import { AuthUserContext } from './AuthUserProvider';

function Routes(props) {

    const { user, setUser } = useContext(AuthUserContext);

    useEffect(() => {
        // onAuthStateChanged returns an unsubscriber
        const unsubscribeAuth = auth.onAuthStateChanged(async authUser => {
          try {
            await (authUser ? setUser(authUser) : setUser(null));

          } catch (error) {
            console.log(error);
          }
        });

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);


    return (
        <NavigationContainer>
            { user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
}

export default Routes;
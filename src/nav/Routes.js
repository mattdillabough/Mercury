import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { auth } from '../firebase/firebase';
import { AuthUserContext } from './AuthUserProvider';

const prefix = Linking.makeUrl('/');

function Routes(props) {

    const { user, setUser } = useContext(AuthUserContext);

    const linking = {
      prefixes: [prefix],
      config: {
          screens: {
              Applications: {
                screens: {
                  Schedule: "schedule",
                  Medical: "medical"
                }
              },
              Chat: "chat",
              Profile: {
                screens: {
                  Setting: "setting"
                }
              }
          }
      }
    }

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
        <NavigationContainer linking={linking}>
            { user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
}

export default Routes;
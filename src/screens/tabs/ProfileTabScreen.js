import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { logout } from '../../firebase/firebase';
import { removeData } from '../../utils/cache_handler';



function ProfileTabScreen(props) {

    async function handleSignOut() {
        try {
            await removeData('@events');
            await logout();
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <View style={styles.container}>
            <Text>
                Profile Screen
            </Text>
            <Button title="logout" onPress={handleSignOut} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})

export default ProfileTabScreen;
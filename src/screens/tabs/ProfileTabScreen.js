import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { logout } from '../../firebase/firebase';



function ProfileTabScreen(props) {

    async function handleSignOut() {
        try {
          await logout();
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <View style={styles.container}>
            <Text>
                Test Screen
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
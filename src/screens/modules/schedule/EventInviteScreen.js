import React, { useState, useEffect} from 'react';
import { Picker } from "@react-native-picker/picker";
import { Text, StyleSheet, View } from 'react-native';

import { Screen, AppButton } from '../../../components';
import { getAllRoles, inviteRoleGroup } from '../../../utils/api_handler/roles';

function EventInviteScreen(props) {

    const [allRoles, setAllRoles] = useState([]);
    const [inviteRole, setInviteRole] = useState(null);

    useEffect(() => {
        getRolesForPicker();
    },[])

    async function getRolesForPicker(){
        let role_data = await getAllRoles().catch((error) => console.error(error));
        setAllRoles(role_data);
    };

    async function onInviteGroup(){
        inviteRoleGroup(inviteRole);
    }



    return (
        <Screen>
            <View style={styles.form}>
                <Picker
                    selectedValue={inviteRole}
                    onValueChange={(value) => {
                    setInviteRole(value);
                    }}
                >
                    {allRoles.map((name, index) => (
                        <Picker.Item key={index} label={name} value={name} />
                    ))}
                </Picker>
                <AppButton title="Invite group" onPress={onInviteGroup} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    form: {
        marginLeft: 10,
        marginRight: 15,
        paddingTop: 15,
      },
})

export default EventInviteScreen;
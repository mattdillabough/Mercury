import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Text, View, Alert, StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";

import { auth } from "../../firebase/firebase";
import {
  createRole,
  getAllRoles,
  assignRole,
  revokeRole
} from "../../utils/api_handler/roles";
import { Screen, AppFormField, AppForm, SubmitButton } from "../../components";

const validationSchema = Yup.object().shape({
  roleName: Yup.string().required().label("Role name"),
});

const validationSchemaEmail = Yup.object().shape({
  email: Yup.string().required().email().label("Role name"),
});

function PermissionScreen({ navigation }) {
  const [isAuthor, setIsAuthor] = useState(false);
  const [selectLevel, setSelectLevel] = useState(1);

  const [giveRole, setGiveRole] = useState("");
  const [removeRole, setRemoveRole] = useState("");
  const [allRoles, setAllRoles] = useState([]);

  useEffect(() => {
    checkForAuthor();
  }, []);

  // Assure that only admins can access this setting page
  const checkForAuthor = () => {
    auth.currentUser
      .getIdTokenResult(true)
      .then((idTokenResult) => {
        if (!!idTokenResult.claims.admin) {
          // permit access to permissions
          setIsAuthor(true);
          getRolesForPicker();
        } else {
          // deny access to permissions
          showDenyAlert();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Retrieve all roles from DB to load into picker
  const getRolesForPicker = async () => {
    let role_data = await getAllRoles().catch((error) => console.error(error));
    setAllRoles(role_data);
  };

  // Alert to display for successful creation of role
  const createRoleAlert = () => {
    Alert.alert("Role created", "", [
      {
        text: "OK",
        onPress: () => navigation.navigate("Setting"),
      },
    ]);
  };

  const showDenyAlert = () => {
    Alert.alert("Permission denied", "Access not granted due to current role", [
      {
        text: "OK",
        onPress: () => navigation.navigate("Setting"),
      },
    ]);
  };

  const handleSubmit = (values) => {
    values["level"] = selectLevel;
    createRole(values);
    createRoleAlert();
  };

  const handleAssign = (values) => {
    values["role"] = giveRole;
    assignRole(values);
  };

  const handleUnassign = (values) => {
    values["role"] = removeRole;
    revokeRole(values);
  };

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.title}>Create Role</Text>
            <View style={styles.form}>
              <AppForm
                initialValues={{
                  roleName: "",
                }}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={validationSchema}
              >
                <Text style={styles.subtitle}>Role Name</Text>
                <AppFormField name="roleName" placeholder="Role name" />

                <Text style={styles.subtitle}>Level Access</Text>
                <Picker
                  selectedValue={selectLevel}
                  onValueChange={(itemValue) => setSelectLevel(itemValue)}
                >
                  <Picker.Item label="1" value={1} />
                  <Picker.Item label="2" value={2} />
                  <Picker.Item label="3" value={3} />
                  <Picker.Item label="4" value={4} />
                  <Picker.Item label="5" value={5} />
                </Picker>

                <SubmitButton title="Create" />
              </AppForm>
            </View>
          </View>
          {/* End of Create Role container */}
        </View>

        <View>
          {/* Start of Unassign Role container */}
          <Text style={[styles.title, { marginTop: 10 }]}>Assign Role</Text>
          <View style={styles.form}>
            <AppForm
              initialValues={{
                email: "",
              }}
              onSubmit={handleAssign}
              validationSchema={validationSchemaEmail}
            >
              <Text style={styles.subtitle}>Email Address</Text>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                placeholder="Email Address"
                textContentType="emailAddress"
              />
              <Text style={styles.subtitle}>Roles</Text>
              <Picker
                selectedValue={giveRole}
                onValueChange={(value) => {
                  setGiveRole(value);
                }}
              >
                {allRoles.map((name, index) => (
                  <Picker.Item key={index} label={name} value={name} />
                ))}
              </Picker>

              <SubmitButton title="Assign" />
            </AppForm>
          </View>
        </View>
        {/* End of Unassign Role container */}

        <View>
          <Text style={[styles.title, { marginTop: 10 }]}>
            Remove Role from User
          </Text>
          <View style={styles.form}>
            <AppForm
              initialValues={{
                email: "",
              }}
              onSubmit={handleUnassign}
              validationSchema={validationSchemaEmail}
            >
              <Text style={styles.subtitle}>Email Address</Text>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                placeholder="Email Address"
                textContentType="emailAddress"
              />

              <Text style={styles.subtitle}>Roles</Text>
              <Picker
                selectedValue={removeRole}
                onValueChange={(value) => {
                  setRemoveRole(value);
                }}
              >
                {allRoles.map((name, index) => (
                  <Picker.Item key={index} label={name} value={name} />
                ))}
              </Picker>
              <SubmitButton title="Revoke" />
            </AppForm>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  form: {
    marginLeft: 10,
    marginRight: 15,
    paddingTop: 15,
  },
  title: {
    fontSize: 22,
    marginLeft: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontWeight: "bold",
  },
});

export default PermissionScreen;

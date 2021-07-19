import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import { Screen, AppFormChoice, AppButton } from "../../../components";

const data = [
  {
    label: "Yes",
  },
  {
    label: "No",
  },
];

function CovidScreen(props) {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");

  const onSubmit = () => {
    if (
      ((question1.label === question2.label) ===
        (question3.label === question4.label)) ===
      (question5.label === "No")
    ) {
      alert(
        "Access to CDC facilities APPROVED. Please show this to security at the facility entrance. Thank you for helping us protect you and others during this time."
      );
    } else {
      alert(
        "Access to CDC facilities NOT APPROVED. Please see next page for further instructions. Thank you for helping us protect you and others during this time."
      );
    }
  };

  return (
    <Screen>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>CDC FACILITES COVID-19 SCREENING</Text>

        <Text style={styles.question}>
          Have you experienced any of the following symptons in the past 48
          hours:
        </Text>
        <Text> • fever or chills</Text>
        <Text> • cough</Text>
        <Text> • shortness of breath or difficulty breathing</Text>
        <Text> • fatigue</Text>
        <Text> • muscle or body aches</Text>
        <Text> • headache</Text>
        <Text> • new loss of taste or smell</Text>
        <Text> • sore throat</Text>
        <Text> • congestion or runny nose</Text>
        <Text> • nausea or vomiting</Text>
        <Text> • diarrhea</Text>
        <AppFormChoice
          name="question1"
          box={false}
          data={data}
          selectedBtn={(choice) => setQuestion1(choice)}
        />

        <Text style={styles.question}>
          Have you been in close physical contact in the last 14 days with:
        </Text>
        <Text>
          {" "}
          • Anyone who is known to have laboratory-confirmed COVID-19?
        </Text>
        <Text> • Anyone who has any symptoms consistent with COVID-19?</Text>
        <AppFormChoice
          name="question2"
          box={false}
          data={data}
          selectedBtn={(choice) => setQuestion2(choice)}
        />
        <Text style={styles.question}>
          Are you isolating or quarantining because you may have been exposed to
          a person with COVID-19 or are worried that you may be sick with
          COVID-19?
        </Text>
        <AppFormChoice
          name="question3"
          box={false}
          data={data}
          selectedBtn={(choice) => setQuestion3(choice)}
        />
        <Text style={styles.question}>
          Are you currently waiting on the results of a COVID-19 test?
        </Text>
        <AppFormChoice
          name="question4"
          box={false}
          data={data}
          selectedBtn={(choice) => setQuestion4(choice)}
        />
        <Text style={styles.question}>
          Have you traveled in the past 10 days?
        </Text>
        <AppFormChoice
          name="question5"
          box={false}
          data={data}
          selectedBtn={(choice) => setQuestion5(choice)}
        />

        <AppButton title="submit" onPress={onSubmit} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
    marginTop: 15,
  },
  question: {
    fontWeight: "bold",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 15,
  },
});

export default CovidScreen;

import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  Button
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

import { MonoText } from "../components/StyledText";

import { Request } from "../consumerRequests";
import { sendRequest } from "../firebaseFunctions";

export default function infoForm({ navigation }) {
  // console.log(navigation.getParam("description"));

  const request = new Request();
  request.restaurant_name = navigation.getParam("description");

  return (
    <View style={styles.container}>
      <Text>{navigation.getParam("description")}</Text>

      <Text>Enter name:</Text>
      <TextInput
        style={styles.inputName}
        placeholder="e.g. David"
        onChangeText={name => (request.name = name)}
      />

      <Text>Enter Party Size:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.inputPartySize}
        placeholder="e.g. 1"
        onChangeText={partySize => (request.party_size = partySize)}
      />

      <Text>Enter bounty:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.inputBounty}
        placeholder="e.g. 0"
        onChangeText={bounty => (request.price = bounty)}
      />

      <View
        style={{
          backgroundColor: "green",
          padding: 3,
          borderRadius: 16,
          shadowOpacity: 0.5,
          alignItems: "baseline",
          justifyContent: "flex-end"
        }}
      >
        <Button
          onPress={() => {
            sendRequest(request);
            navigation.push("Confirmed")
            // setTimeout(() => { navigation.pop(); }, 1650);
            // setTimeout(() => { navigation.push("ReservationScreen", request); }, 1650);
            setTimeout(() => { navigation.navigate("ReservationScreen", { location: request.restaurant_name, status: request.status, total: request.price }); }, 1650);
          }}
          title="send request"
          color="white"
        ></Button>
      </View>
    </View >
  );
}

// infoForm.navigationOptions = {
//   header: null,
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputName: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200
  },
  inputPartySize: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200
  },
  inputBounty: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200
  }
});

// infoForm.navigationOptions = {
//   header: null
// };
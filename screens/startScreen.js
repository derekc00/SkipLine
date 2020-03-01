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
// import { ScrollView } from 'react-native-gesture-handler';
// import * as WebBrowser from 'expo-web-browser';
// import { MonoText } from '../components/StyledText';

import { Request } from "../consumerRequests";
import { sendRequest } from "../firebaseFunctions";

export default function startScreen({ navigation }) {
  const request = new Request();


  //called when button is pressed
  const pressHandler = () => {
    //navigate to another screen
    navigation.push("MapScreen");
  };

  return (
    <View style={styles.container}>
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
          onPress={pressHandler}
          title="create request"
          color="white"
        ></Button>
      </View>
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
          onPress={() => {}}
          title="look for requests"
          color="white"
        ></Button>
      </View>
    </View>
  );
}

// startScreen.navigationOptions = {
//   header: null
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

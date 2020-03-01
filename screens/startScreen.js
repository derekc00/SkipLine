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

import { Request } from '../consumerRequests';
import { sendRequest } from '../firebaseFunctions';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

export default function startScreen({ navigation }) {
    const request = new Request();

    //called when button is pressed
    const pressHandler = () => {
        //navigate to another screen
        navigation.push("MapScreen");
    };

    return (
        <View style={styles.container}>
            <View style={styles.b1}>
                <AwesomeButtonRick onPress={pressHandler}
                    type="primary"
                > create request
                </AwesomeButtonRick>
            </View>

            <View>
                <AwesomeButtonRick onPress={pressHandler}
                    type="secondary"
                > look for requests
                </AwesomeButtonRick>
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    b1: {
        padding: 15
    }
});

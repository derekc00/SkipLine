import * as React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, RefreshControl, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { Request } from "../consumerRequests";

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


export default function ReservationScreen({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <Image source={{ uri: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg" }} style={styles.imageSize}></Image>
        <Text style={styles.optionText, styles.option}>
          {'Location: ' + navigation.getParam('location')}
        </Text>
        <Text style={styles.optionText, styles.option}>
          {'Status: ' + navigation.getParam('status')}
        </Text>
        <Text style={styles.optionText, styles.option}>
          {'Total: ' + navigation.getParam('total')}
        </Text>
        <Text style={styles.optionText, styles.option}>
          {'Time: '}
        </Text>
        <OptionButton
          icon="md-remove-circle"
          label="Cancel"
          onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
          c="rgba(128,0,0,1)"
        />

        <OptionButton
          icon="md-thumbs-up"
          label="Confirm"
          onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
          c="rgba(0,128,0,1)"
          isLastOption
        />
      </ScrollView >
    </SafeAreaView >
  );
}

function OptionButton({ icon, label, onPress, c, isLastOption }) {
  return (
    <RectButton
      style={[styles.option, isLastOption && styles.lastOption]}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color={c} />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

ReservationScreen.navigationOptions = {
  headerLeft: null,
  title: 'Your Reservation',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  contentContainer: {
    paddingTop: 15
  },
  optionIconContainer: {
    marginRight: 12
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed"
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  optionText: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 1
  },
  imageSize: {
    width: Math.round(Dimensions.get("window").width),
    height: Math.round(Dimensions.get("window").height) / 4
  }
});

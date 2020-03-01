import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function ReservationScreen() {
  return (
    <View style={styles.container} contentContainerStyle={styles.contentContainer}>
      <OptionButton
        icon="md-remove-circle"
        label="Cancel"
        onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
        c = "rgba(128,0,0,1)"
      />

      <OptionButton
        icon="md-thumbs-up"
        label="Confirm"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        c = "rgba(0,128,0,1)"
        isLastOption
      />
    </View>
  );
}

function OptionButton({ icon, label, onPress, c, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

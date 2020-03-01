import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MySearchBar from '../components/SearchBar'
import {Dimensions} from 'react-native';

export default class MapScreen extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0,
      error: null
    }
  }

  componentDidMount() {
    

    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.latitude,
        longitude: position.longitude,
        error: null
      });
    },
    error => this.setState({error: error.message}),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
    );

    console.log(this.state.latitude, this.state.longitude)
    console.log("a")
  }
  render() {
    return (

      //dasdaskdbasdjhfbasdjlhfb
      // <View>
      <View style={styles.container}>
        <View style= {styles.mapContainer}>
          <MapView
            provider = { PROVIDER_GOOGLE }
            style={{
              flex: 1
            }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            
          />
        </View>
        <View style={styles.searchContainer}>
          <MySearchBar/>
        </View>
      
      </View>
    );
  }
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    position: 'absolute',
    top:0,
    left:0,
    width: windowWidth,
    height: windowHeight
  },
  searchContainer: {
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    width: windowWidth,
    height: 40
  }
});

MapScreen.navigationOptions = {
  header: null,
};


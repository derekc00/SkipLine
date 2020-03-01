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
    

    navigator.geolocation.getCurrentPosition(
      position => {
      console.log(position)
      
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        },
        function() { console.log("setState completesd", this.state) }
        );
    },
    error => this.setState({error: error.message}),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
    
    );
  }
  render() {
    return (

      <View style={styles.container}>
        <View style= {styles.mapContainer}>
          <MapView
            provider = { PROVIDER_GOOGLE }
            style={{
              flex: 1
            }}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: .2,
              longitudeDelta: .2
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


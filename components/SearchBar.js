import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TextInput } from 'react-native-gesture-handler';

export default class MySearchBar extends React.Component {
  
  
  
  state = {
    search: '',
  };

  

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
        <View>
            <SearchBar  
            placeholder="Where to?"
            onChangeText={this.updateSearch}
            value={search}
            lightTheme = {true}
            />
            {/* <TextInput>
                placeholder="Enter destination..."
                value=
            </TextInput> */}
      //

        </View>
      
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    searchContainer: {
      marginTop: 20,
      position: "absolute"
      
    }
  });
  const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
  const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};
  const GooglePlacesInput = () => {
   
  }

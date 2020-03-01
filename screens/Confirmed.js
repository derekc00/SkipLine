import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import LottieView from "lottie-react-native";

export default class Confirmed extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;

  }
  componentDidMount() {
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };


  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            height: Math.round(Dimensions.get('window').height) / 10,
            backgroundColor: '#FFF',
          }}
          source={require('../assets/success.json')}

        />
      </View>

    );
  }
}

Confirmed.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});

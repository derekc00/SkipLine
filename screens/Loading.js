import * as React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
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
        <View>
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              height: Math.round(Dimensions.get("window").height) / 4,
              backgroundColor: "#FFF"
            }}
            source={require("../assets/loadingdots.json")}
          />
        </View>
        <View style={styles.findingLocation}>
          <Text>Finding Location...</Text>
        </View>
      </View>
    );
  }
}

Loading.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  buttonContainer: {
    paddingTop: 20
  },
  findingLocation: {
    position: "relative",
    marginTop: -30,
    fontFamily: "Montserrat",
    fontSize: 100
  }
});

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MapScreen from "../screens/MapScreen";
import HomeScreen from "../screens/HomeScreen";
import Loading from "../screens/Loading";
import ReservationScreen from "../screens/ReservationScreen";

const screens = {
  //setup params. call it whatever you want

  HomeScreen: {
    screen: HomeScreen
  },

  MapScreen: {
    screen: MapScreen
  },
  Loading: {
    screen: Loading
  },
  ReservationScreen: {
    screen: ReservationScreen
  }
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

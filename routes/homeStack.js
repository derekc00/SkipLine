import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MapScreen from "../screens/MapScreen";
import InfoForm from "../screens/infoForm";
import Loading from "../screens/Loading";
import ReservationScreen from "../screens/ReservationScreen";
import StartScreen from "../screens/startScreen";
import Confirmed from "../screens/Confirmed";

const screens = {
  //setup params. call it whatever you want

  StartScreen: {
    screen: StartScreen
  },
  MapScreen: {
    screen: MapScreen
  },
  InfoForm: {
    screen: InfoForm
  },
  Confirmed: {
    screen: Confirmed
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

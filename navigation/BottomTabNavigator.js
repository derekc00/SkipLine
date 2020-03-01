// import * as React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import TabBarIcon from '../components/TabBarIcon';
// import HomeScreen from '../screens/infoForm';
// import MapScreen from '../screens/MapScreen';
// import ReservationScreen from '../screens/ReservationScreen';
// import Loading from '../screens/Loading';

// const BottomTab = createBottomTabNavigator();
// const INITIAL_ROUTE_NAME = 'Home';

// export default function BottomTabNavigator({ navigation, route }) {
//   // Set the header title on the parent stack navigator depending on the
//   // currently active tab. Learn more in the documentation:
//   // https://reactnavigation.org/docs/en/screen-options-resolution.html
//   navigation.setOptions({ headerTitle: getHeaderTitle(route) });

//   return (
//     <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
//       <BottomTab.Screen
//         name="Map"
//         component={MapScreen}
//         options={{
//           title: 'Map',
//           tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
//         }}
//       />
//       <BottomTab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           title: 'getInfo',
//           tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-copy" />,
//         }}
//       />
//       <BottomTab.Screen
//         name="Reservation"
//         component={ReservationScreen}
//         options={{
//           title: 'Reservation',
//           tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-information-circle-outline" />,
//         }}
//       />
//       <BottomTab.Screen
//         name="Loading"
//         component={Loading}
//         options={{
//           title: 'Loading',
//           tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-refresh" />,
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

// function getHeaderTitle(route) {
//   const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

//   switch (routeName) {
//     case 'Home':
//       return 'Request Form';
//     case 'Reservation':
//       return 'Reservation Status';
//     case 'Map':
//       return 'This is the map';
//     case 'Loading':
//       return 'Loading';
//   }
// }

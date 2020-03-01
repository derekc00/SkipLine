//import firebase from 'react-native-firebase';
import { Request } from './consumerRequests';
import * as firebase from 'firebase';
import '@firebase/firestore';

/*
firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) {
      console.log('default app user ->', credential.user.toJSON());
    }
  });
*/



export function sendRequest(request, addComplete){
    const firebaseConfig = { 
        apiKey: "AIzaSyAkia1lQi1pkrLZS0YTBXuZW5LMCGGPjyI",
        authDomain: "skipline-5cd96.firebaseapp.com",
        databaseURL: "https://skipline-5cd96.firebaseio.com",
        projectId: "skipline-5cd96",
    }

    if (!firebase.apps.length) {firebase.initializeApp(firebaseConfig)};

    firebase.firestore()
    .collection("request")
    .add({
        // userID:                 request.name,
        // restaurantCoordinates:  request.restaurant_name,
        // address:                request.address,
        // partySize:              request.partySize,
        // price:                  request.price,
        // restaurant_name:        request.restaurant_name,
        // status:                 request.status,
        userID: "test",
        createdAt:              firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => addComplete(data))
    .catch((error) => console.log(error))
}

/*
export async function getRequests(requests){

    var requestList = [];

    var snapshot = await firebase.firestore()
    .collection('Requests')
    .orderBy('createdAt')
    .get();

    snapshot.forEach((doc) => {
        requestList.push(doc.data());
    });

    requests(requestList);
}
*/
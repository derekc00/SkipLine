import firebase from 'react-native-firebase';
import { Request } from './consumerRequests';

/*
firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) {
      console.log('default app user ->', credential.user.toJSON());
    }
  });
*/

// racism Derekkkk

export function sendRequest(request, addComplete){
    firebase.firestore()
    .collection('Requests')
    .add({
        userID:                 request.name,
        restaurantCoordinates:  request.restaurant_name,
        address:                request.address,
        partySize:              request.partySize,
        price:                  request.price,
        restaurant_name:        request.restaurant_name,
        status:                 request.status,
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
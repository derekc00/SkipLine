//import firebase from 'react-native-firebase';
import { Request } from './consumerRequests';
import * as firebase from 'firebase';
import '@firebase/firestore';

export function sendRequest(request, addComplete) {

    const firebaseConfig = {
        apiKey: "AIzaSyAkia1lQi1pkrLZS0YTBXuZW5LMCGGPjyI",
        authDomain: "skipline-5cd96.firebaseapp.com",
        databaseURL: "https://skipline-5cd96.firebaseio.com",
        projectId: "skipline-5cd96",
    }

    if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig) };

    const dbh = firebase.firestore();

    dbh.collection("requests").add({
        userID: request.name,
        partySize: request.party_size,
        price: request.price,
        restaurant_name: request.restaurant_name,
        status: request.status,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => addComplete(data))
        .catch((error) => console.log(error))
}


export async function getRequests(requestsReceived) {
    const firebaseConfig = {
        apiKey: "AIzaSyAkia1lQi1pkrLZS0YTBXuZW5LMCGGPjyI",
        authDomain: "skipline-5cd96.firebaseapp.com",
        databaseURL: "https://skipline-5cd96.firebaseio.com",
        projectId: "skipline-5cd96",
    }

    if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig) };

    const dbh = firebase.firestore();

    var requestList = [];

    var snapshot = await dbh
        .collection('requests')
        .orderBy('createdAt')
        .get()

    snapshot.forEach((doc) => {
        requestList.push(doc.data());
    });

    console.log(requestList);

    requestsReceived(requestList);
}
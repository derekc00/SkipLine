import * as React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { getRequests } from '../firebaseFunctions';
import { Component } from 'react';

export default class Requests extends Component {

    state = {
        requestList: []
    }

    onRequestsReceived = (requestList) => {
        // console.log(requestList);
        this.setState(prevState => ({
            requestList: prevState.requestList = requestList
        }))
    }

    componendDidMount() {
        getRequests(this.onRequestsReceived);
    }

    render() {
        this.componendDidMount();
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.requestList}
                    renderItem={({ item }) => (
                        <OptionButton
                            icon="ios-cash"
                            label={item.userID}
                            onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
                            c="rgba(0,0,0,1)"
                        />
                        // <Text style={styles.item}>{item.userID}</Text>
                    )
                    }
                />
            </View>
        )
    }
}
/*
export default function Requests() {


                // const requestList = getRequests();
                console.log(getRequests());
        
            return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <OptionButton
                    icon="ios-cash"
                    label="Check-in for "
                    onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
                    c="rgba(0,0,0,1)"
                />

                <OptionButton
                    icon="ios-cash"
                    label="Check-in for "
                    onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
                    c="rgba(0,0,0,1)"
                    isLastOption
                />
            </ScrollView>
            );
        }
        */
function OptionButton({ icon, label, onPress, c, isLastOption }) {
    return (
        <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionIconContainer}>
                    <Ionicons name={icon} size={22} color={c} />
                </View>
                <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>{label}</Text>
                </View>
            </View>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    },
    contentContainer: {
        paddingTop: 15,
    },
    optionIconContainer: {
        marginRight: 12,
    },
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 0,
        borderColor: '#ededed',
    },
    lastOption: {
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
        fontSize: 15,
        alignSelf: 'flex-start',
        marginTop: 1,
    },
});

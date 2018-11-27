import React from 'react';
import {StyleSheet, Alert, Text, View, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});


export default class Menu extends React.Component {

  static navigationOptions = {
    title: 'Menu',
    header: null
  };

  state = {
    location: null
  };

 findCoordinates = () => {
  navigator.geolocation.watchPosition(
    position => {
      const location = JSON.stringify(position);

      this.setState({ location });
    },
    error => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000}
  );
};


 

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.findCoordinates}>
        <Text style={styles.welcome}>Find My Coords?</Text>
        <Text>Location: {this.state.location}</Text>
      </TouchableOpacity>
    </View>
    );
  }
}
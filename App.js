import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TimerButton from './components/TimerButton';

 class Login extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#243B55'}}>
        <Text style={{fontSize: 20, textAlign: 'center', margin: 10, color: '#FFF'}}>Iniciar Sesión</Text>
        
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Details') }>
          <Text>
            "Moverme a Detalles"
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

class DetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'DetailsScreen',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: Login,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
  });

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

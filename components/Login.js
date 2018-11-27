import React from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image} from 'react-native';

export default class Login extends React.Component {

  static navigationOptions = {
    title: 'Login',
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#243B55'}}>
        <Text style={{fontSize: 20, textAlign: 'center', margin: 10, color: '#FFF'}}>Iniciar Sesión</Text>
        
        <TextInput
        style={{height: 40, width: 240, backgroundColor: 'white', borderWidth: 1}}
        placeholder={'email'}
      />
      <TextInput
        style={{height: 40,width: 240, backgroundColor: 'white', borderWidth: 1}}
        secureTextEntry={true}
        placeholder={'contraseña'}
      />
        <TouchableOpacity style={{marginTop: 24, padding: 20, width: 180, backgroundColor: 'white'}}>
          <Text>
            Iniciar Sesión
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}
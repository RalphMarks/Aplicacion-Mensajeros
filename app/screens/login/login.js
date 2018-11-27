import React from 'react';
import {
  Text,
  Image,
  Dimensions,
  Keyboard,
} from 'react-native';
import {Header} from 'react-native-elements';

export class Login extends React.Component {
  render = () => (
    <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'Componente de activacion', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
  />
  )
}
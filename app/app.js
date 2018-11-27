import React from 'react';
import { View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import * as Screens from './screens';


const KittenApp = createStackNavigator({
  Home: {
    screen: Screens.Login,
  },
}, {
  headerMode: 'none',
});


export default class App extends React.Component {

  render = () => (
    <View style={{ flex: 1 }}>
      <KittenApp/>
    </View>
  );
}

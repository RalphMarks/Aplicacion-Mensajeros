import {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image} from 'react-native';

export default class Detail extends Component {

  static navigationOptions = {
    title: 'Task 13K4H2SI3',
    header: null
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor: '#FFF' }}>
        <Text style={{marginTop: 40, fontSize: 16, textAlign: 'left', margin: 4}}>Calle Durango 12,Ciudad de México, México 22</Text>
        <Text style={{color:'#aaa',fontSize: 14, textAlign: 'left', margin: 4}}>Ciudad de México, México</Text>
        <Text style={{color:'#aaa',fontSize: 14, textAlign: 'left', margin: 4}}>6700</Text>
        <Text style={{color:'#aaa',fontSize: 16, textAlign: 'left', margin: 4}}>Cliente: Mariana G. Tamayo</Text>

         <TouchableOpacity style={{marginLeft: 24, marginTop: 80, padding: 20, width: 300, backgroundColor: '#1CACD8'}}>
          <Text style={{textAlign: 'center', color:'#FFF'}}>
            Iniciar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
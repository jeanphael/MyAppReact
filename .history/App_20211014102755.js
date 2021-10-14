import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
  
    //this.updateUserType = this.updateUserType.bind(this)
    this.state = {
      calculResult: 0,
    }
  }
  render() {
    return (
      <View style={{margin:20}}>
        <View style={{width:'80%',height:'20%' ,fontSize:20,borderColor:'red',borderWidth:2}}>
        <Text style={{fontSize:20}}>
          {this.state.calculResult}
        </Text>
        </View>
      </View>
      
    )
  }
}